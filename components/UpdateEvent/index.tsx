"use client";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { INewSession } from "@lib/shared/types";
import EventForm from "@components/EventForm";

const UpdateEvent = () => {
  const { data: session } = useSession();
  const ownerSession = session as INewSession;
  const router = useRouter();

  useEffect(() => {
    // have a loading state before routing
    if (!session?.user) {
      router.push("/");
    }
  }, []);

  const updateEvent = async () => {
    try {
      const res = await fetch("/api/events/new", {
        method: "PUT",
        body: JSON.stringify({
          name: "Outline Intro",
          date: new Date(),
          city: "Lagos",
          title: "How do men think",
          desc: "Learn about men and how they think in many ways",
          image: "/assets/images/landscape2.jpeg",
          ownerId: ownerSession.ownerId,
        }),
      });
      if (res.ok) {
        alert("event created");
        router.push("/");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Event</h2>
        <small>Update your event</small>
      </div>
      <EventForm />
    </div>
  );
};

export default UpdateEvent;
