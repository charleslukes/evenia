import { INewSession, eventRes, formInputTypes } from "@lib/shared/types";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useUpdateEvent = () => {
  const { data } = useSession();
  const [session, setSession] = useState<INewSession>(data as INewSession);
  const router = useRouter();
  const [ownerEvent, setOwnerEvent] = useState<formInputTypes>();
  const searchParams = useSearchParams();
  const [eventId, setEventId] = useState<number>();

  const fetchEvent = async (id: string) => {
    const response = await fetch(`/api/events/${id}`);
    const data: eventRes = await response.json();
    const { owner, ...others } = data;
    setOwnerEvent(others);
  };

  useEffect(() => {
    if (data) {
      setSession(data as INewSession);
    }
  }, [data]);

  useEffect(() => {
    const id = searchParams.get("eventId");
    if (id) {
      fetchEvent(id);
      setEventId(+id);
    }
  }, [searchParams.get("eventId")]);

  //2023-07-15
  const updateEvent = async (data: formInputTypes) => {
    try {
      const newData = {
        ...data,
        ownerId: session.ownerId,
        date: new Date(data.date),
        eventId,
      };
      const res = await fetch("/api/events/update", {
        method: "PUT",
        body: JSON.stringify(newData),
      });
      if (res.ok) {
        alert("event updated");
        router.push("/");
      }
    } catch (error) {
      alert(error);
      console.log({ error });
    }
  };

  return {
    updateEvent,
    ownerEvent,
  };
};

export default useUpdateEvent;
