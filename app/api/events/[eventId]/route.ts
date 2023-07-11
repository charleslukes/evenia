import { deleteEvent, getOneEvent } from "@lib/controller/event";
import { eventDetailsPageProp } from "@lib/shared/types";
import { NextApiRequest } from "next";

export const DELETE = async (
  req: NextApiRequest,
  { params }: eventDetailsPageProp
) => {
  try {
    const eventId = params.eventId;
    const event = await deleteEvent(Number(eventId));
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    return new Response("Failed to delete event", { status: 500 });
  }
};

export const GET = async (
  req: NextApiRequest,
  { params }: eventDetailsPageProp
) => {
  try {
    const eventId = params.eventId;
    const event = await getOneEvent(Number(eventId));
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    return new Response("Failed to delete event", { status: 500 });
  }
};
