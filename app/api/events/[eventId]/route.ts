import { deleteEvent, getOneEvent } from "@lib/controller/event";
import { eventDetailsPageProp } from "@lib/shared/types";

export const DELETE = async (
  _req: Request,
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
  _req: Request,
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
