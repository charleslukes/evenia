import { eventRes } from "@lib/shared/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useEventCards = () => {
  const router = useRouter();

  const [allEvents, setAllEvents] = useState<Array<eventRes>>([]);
  const handleClick = async (id: string) => {
    router.push(`/${id}`);
  };

  const dateRange = (dateString: string) => {
    const str = new Date(dateString).toString();
    const regex = /^.{4}(.{20})/;
    const res = regex.exec(str)![1];
    return res;
  };

  const titleRange = (str: string) => {
    const regex = /^.{0}(.{50})/;
    const res = regex?.exec(str) ? `${regex?.exec(str)![1]}...` : str;
    return res;
  };

  const fetchEvents = async () => {
    const response = await fetch("/api/events");
    const data = await response.json();
    setAllEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    allEvents,
    dateRange,
    titleRange,
    handleClick,
  };
};

export default useEventCards;
