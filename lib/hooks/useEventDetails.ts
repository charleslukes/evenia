import { INewSession, eventDetailProp, eventRes } from "@lib/shared/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useEventDetails = ({ eventId }: eventDetailProp) => {
  const { data: session } = useSession();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [eventData, setEventData] = useState<eventRes>({} as eventRes);
  const router = useRouter();

  const fetchEvent = async () => {
    const userSession = session as INewSession;
    const response = await fetch(`/api/events/${eventId}`);
    const data = await response.json();
    setIsOwner(Number(data.ownerId) === Number(userSession?.ownerId));
    setEventData(data);
  };

  const handleUpdateEvent = () => {
    router.push(`/update-event?eventId=${eventId}`);
  };

  const deleteEvent = async () => {
    try {
      const res = await fetch(`/api/events/${eventId}`, { method: "DELETE" });
      if (res.ok) {
        alert("event deleted");
        router.push("/");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [session]);

  return {
    deleteEvent,
    handleUpdateEvent,
    isOwner,
    eventData,
  };
};

export default useEventDetails;
