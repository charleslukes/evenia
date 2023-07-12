"use client";
import styles from "./styles.module.scss";
import EventForm from "@components/EventForm";
import useUpdateEvent from "@lib/hooks/useUpdateEvent";
import { useSearchParams } from "next/navigation";

const UpdateEvent = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  const { updateEvent, ownerEvent } = useUpdateEvent(eventId!);

  return (
    <div className={styles.container}>
      <div>
        <h2>Event</h2>
        <small>Update your event</small>
      </div>
      {
        ownerEvent ? <EventForm
        submit={updateEvent}
        defaultValues={ownerEvent}
      /> : <div>Fetching event pls wait...</div>
      }
      
    </div>
  );
};

export default UpdateEvent;
