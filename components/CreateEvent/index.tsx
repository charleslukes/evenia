"use client";
import {useState, useEffect} from "react";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { INewSession, formInputTypes } from "@lib/shared/types";
import EventForm from "@components/EventForm";

const CreateEvent = () => {
  const { data } = useSession();
  const [session, setSession] = useState<INewSession>(data as INewSession)
  const router = useRouter();

  useEffect(() => {
    if(data) {
      setSession(data as INewSession)
    }
  }, [data])

  const createEvent = async (data: formInputTypes) => {
    try {
      const newData = {...data, ownerId: session.ownerId, date: new Date(data.date) }
      const res = await fetch("/api/events/new", {
        method: "POST",
        body: JSON.stringify(newData),
      });
      if (res.ok) {
        alert("event created");
        router.push("/");
      }
    } catch (error) {
      alert(error);
      console.log({ error });
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Event</h2>
        <small>Please fill all the required information</small>
      </div>
      <EventForm submit={createEvent} />
    </div>
  );
};

export default CreateEvent;
