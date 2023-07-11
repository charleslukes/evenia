import { create } from "@lib/controller/event";

export const POST = async (req: Request) => {
  try {
    const { name, date, city, desc, ownerId, title, image } = await req.json();
    const event = await create(
      {
        name,
        date,
        city,
        desc,
        title,
        image,
      },
      ownerId
    );
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    console.log({ error });
    return new Response("Failed to delete event", { status: 500 });
  }
};
