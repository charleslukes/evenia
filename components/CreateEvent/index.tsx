"use client";
import Textarea from "@ui/Textarea";
import styles from "./styles.module.scss";
import TextInput from "@ui/Text";
import Button from "@ui/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { INewSession } from "@lib/shared/types";

const CreateEvent = () => {
  const { data: session } = useSession();
  const ownerSession = session as INewSession;

  const router = useRouter();

  useEffect(() => {
    // have a loading state before routing
    if (!session?.user) {
      router.push("/");
    }
  }, []);

  const createEvent = async () => {
    try {
      const res = await fetch("/api/events/new", {
        method: "POST",
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
        <small>Please fill all the required information</small>
      </div>
      <form>
        <div className={styles.formInput}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <div className={`${styles.firstDetails} ${styles.marginBottom}`}>
              <TextInput placeholder="Event title" />
              <select name="category">
                <option value="Category">Category</option>
                <option value="New Category">New Category</option>
              </select>
            </div>
            <div className={styles.marginBottom}>
              <Textarea />
            </div>
            <div className={styles.marginBottom}>
              <TextInput placeholder="date" />
            </div>
            <div className={styles.marginBottom}>
              <TextInput placeholder="location" />
            </div>
          </div>
        </div>
        <div>
          <Button
            type="button"
            text="Continue"
            className={styles.contBtn}
            handleClick={createEvent}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
