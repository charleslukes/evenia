import { INewSession, formInputTypes } from "@lib/shared/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useUpdateEvent = () => {
  const { data } = useSession();
  const [session, setSession] = useState<INewSession>(data as INewSession);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setSession(data as INewSession);
    }
  }, [data]);

  const updateEvent = async (data: formInputTypes) => {
    try {
      const newData = {
        ...data,
        ownerId: session.ownerId,
        date: new Date(data.date),
      };
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

  return {
    updateEvent
  };
};

export default useUpdateEvent;