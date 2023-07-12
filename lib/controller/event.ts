import { formInputTypes } from "@lib/shared/types";
import prisma from "../prisma";


export const create = async (data: formInputTypes, ownerId: number) => {
  const event = await prisma.event.create({
    data: { ...data,  ownerId },
  });
  return event;
};

export const deleteEvent = async (id: number) => {
  const event = await prisma.event.delete({
    where: {
      id,
    },
  });
  return event;
};

export const update = async (id: number, data: formInputTypes) => {
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

export const getAllEvents = async () => {
  const events = await prisma.event.findMany({
    include: {
      owner: true,
    },
  });
  return events;
};

export const getOneEvent = async (id: number) => {
  const events = await prisma.event.findFirst({
    where: {
      id,
    },
    include: {
      owner: true,
    },
  });
  return events;
};
