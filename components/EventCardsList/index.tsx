"use client";
import { eventRes } from "@lib/shared/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EventCardsList = () => {
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

  return (
    <>
      {allEvents.map((data, i) => {
        return (
          <div
            key={i}
            className={styles.container}
            onClick={() => handleClick(data.id.toString())}
          >
            <div>
              <Image
                src={data.image ? data.image : "/assets/images/landscape3.jpeg"}
                width={0}
                height={0}
                alt="an event card"
                className={styles.image}
                sizes="100vw"
              />
            </div>
            <div className={styles.subcontainer}>
              <div className={styles.card_date}>{dateRange(data.date)}</div>
              <div className={styles.title}>{titleRange(data.desc)}</div>
              <div className={styles.ownerName}>
                <small>{data.owner.name}</small>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventCardsList;
