"use client";
import styles from "./styles.module.scss";
import EventForm from "@components/EventForm";
import useCreateEvent from "@lib/hooks/useCreateEvent";

const CreateEvent = () => {
 const {createEvent} = useCreateEvent()

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
