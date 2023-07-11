import { Session } from "next-auth";

export type eventRes = {
  id: number;
  name: string;
  date: string;
  city: string;
  desc: string;
  image: string;
  title: string;
  ownerId: number | null;
  owner: {
    id: number;
    name: string;
    email: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type eventDetailProp = {
  eventId: number;
};

export type eventDetailsPageProp = {
  params: eventDetailProp;
};

export interface INewSession extends Session {
    ownerId: number | undefined;
  }