import { getAllEvents } from "@lib/controller/event";

export const GET = async (_req: Request) => {
  try {
    const allEvents = await getAllEvents();
    return new Response(JSON.stringify(allEvents), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch events", { status: 500 });
  }
};
