import { INewSession, eventRes, formInputTypes } from "@lib/shared/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useUpdateEvent = (eventId: string) => {
  const { data } = useSession();
  const [session, setSession] = useState<INewSession>(data as INewSession);
  const router = useRouter();
  const [ownerEvent, setOwnerEvent] = useState<formInputTypes>();
  
  const fetchEvent = async () => {
    const response = await fetch(`/api/events/${eventId}`);
    const data: eventRes = await response.json();
    const {owner, ...others} = data;
    setOwnerEvent(others);
  };

  useEffect(() => {
    if (data) {
      setSession(data as INewSession);
    }
  }, [data]);

  useEffect(() => {
    fetchEvent()
  }, [eventId])

  const updateEvent = async (data: formInputTypes) => {
    try {
      const newData = {
        ...data,
        ownerId: session.ownerId
      };
      const res = await fetch("/api/events/new", {
        method: "PUT",
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

  return {
    updateEvent,
    ownerEvent
  };
};

export default useUpdateEvent;