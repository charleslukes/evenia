import { update } from "@lib/controller/event";

export const PUT = async (req: Request) => {
  try {
    const { date, location, category, desc, eventId, title, price, image } =
      await req.json();
    const event = await update(
      eventId,
      {
        date,
        category,
        location,
        desc,
        title,
        image,
        price,
      }
    );
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    console.log({ error });
    return new Response("Failed to update event", { status: 500 });
  }
};
