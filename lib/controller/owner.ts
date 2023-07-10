import prisma from "../prisma";

type ownerType = {
  name: string;
  email: string;
  image?: string;
};

export const createOwner = async (data: ownerType) => {
  let owner = await prisma.owner.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!owner) {
    owner = await prisma.owner.create({
      data: { ...data },
    });
  }

  return owner;
};

export const update = async (id: number, data: ownerType) => {
  const owner = await prisma.owner.update({
    where: { id },
    data: { ...data },
  });
  return owner;
};
