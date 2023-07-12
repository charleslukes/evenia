"use client";
import styles from "./styles.module.scss";
import EventForm from "@components/EventForm";
import useUpdateEvent from "@lib/hooks/useUpdateEvent";

const UpdateEvent = () => {
  const {updateEvent} = useUpdateEvent()

  return (
    <div className={styles.container}>
      <div>
        <h2>Event</h2>
        <small>Update your event</small>
      </div>
      <EventForm submit={updateEvent} />
    </div>
  );
};

export default UpdateEvent;
