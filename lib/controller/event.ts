import prisma from "../prisma";

type eventType = {
  name: string;
  date: Date;
  city: string;
  desc: string;
};

export const create = async (data: eventType) => {
  const event = await prisma.event.create({
    data: { ...data },
  });
  return event;
};

export const remove = async (id: number) => {
  const event = await prisma.event.delete({
    where: {
      id,
    },
  });
  return event;
};

export const update = async (id: number, data: eventType) => {
  const event = await prisma.event.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });
  return event;
};
