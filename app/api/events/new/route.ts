import { create } from "@lib/controller/event";

export const POST = async (req: Request) => {
  try {
    const { date, location,category, desc, ownerId, title, price, image } = await req.json();
    const event = await create(
      {
        date,
        category, 
        location,
        desc,
        title,
        image,
        price
      },
      ownerId
    );
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    console.log({ error });
    return new Response("Failed to delete event", { status: 500 });
  }
};
