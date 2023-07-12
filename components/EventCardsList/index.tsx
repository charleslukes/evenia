"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import useEventCards from "@lib/hooks/useEventCards";

const EventCardsList = () => {
  const { allEvents, handleClick, dateRange, titleRange } = useEventCards();

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
