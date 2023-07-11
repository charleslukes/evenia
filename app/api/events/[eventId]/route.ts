import { deleteEvent, getOneEvent } from "@lib/controller/event";
import { eventDetailsPageProp } from "@lib/shared/types";
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

export const DELETE = async (req: NextApiRequest) => {
  try {
    const eventId = req.query.id;

    const session = await getSession({ req });

    if (session) {
      const event = await deleteEvent(Number(eventId));
      return new Response(JSON.stringify(event), { status: 201 });
    }

    return new Response("Unauthorized", { status: 401 });
  } catch (error) {
    return new Response("Failed to delete event", { status: 500 });
  }
};

export const GET = async (req: NextApiRequest, { params }: eventDetailsPageProp) => {
  try {
    const eventId = params.eventId;  
    const event = await getOneEvent(Number(eventId));
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    return new Response("Failed to delete event", { status: 500 });
  }
};
