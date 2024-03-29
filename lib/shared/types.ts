import { Session } from "next-auth";
import { SubmitHandler } from "react-hook-form";

export type eventRes = {
  id: number;
  category: string;
  desc: string;
  date: string;
  location: string;
  title: string;
  price: string;
  image: any
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

export type formInputTypes = {
  category: string;
  desc: string;
  date: string;
  location: string;
  title: string;
  price: string;
  image: any
};


export type eventFormPropType = {
  submit: SubmitHandler<formInputTypes>
  defaultValues?: Record<any, any>
}