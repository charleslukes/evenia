"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@ui/Button";
import { Calendar, MapPin } from "phosphor-react";
import ButtonOutline from "@ui/ButtonOutline";
import { eventDetailProp } from "@lib/shared/types";
import useEventDetails from "@lib/hooks/useEventDetails";
import { dateRange, monthAndDay } from "@lib/utils/date";

const EventDetails = ({ eventId }: eventDetailProp) => {
  const {eventData, isOwner, handleUpdateEvent, deleteEvent } = useEventDetails({eventId})

  return (
      eventData.title ? <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={
              eventData.image
                ? eventData.image
                : "/assets/images/landscape3.jpeg"
            }
            width={0}
            height={0}
            alt="an event card"
            className={styles.image}
            sizes="100vw"
          />
        </div>
        <div className={styles.register}>
          <div>
            <div>
              <div className={styles.updateContainer}>
                {isOwner && (
                  <>
                    <ButtonOutline
                      text="Update event"
                      handleClick={handleUpdateEvent}
                      className={styles.createEvent}
                    />
                    <Button
                      text="Delete"
                      handleClick={deleteEvent}
                      className={styles.delete}
                    />
                  </>
                )}
              </div>
            </div>
            <div className={styles.date}>{monthAndDay(eventData.date)}</div>
            <h1 className={styles.header}>{eventData.title}</h1>
            <div className={styles.priceAuthor}>
              <div>${eventData.price}</div>
              <div>
                by <small>{eventData.owner?.name}</small>
              </div>
            </div>
            <div>
              <Button text="Register" handleClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.desc}>
          <div>{eventData.title}</div>
          <div>
            <h3>What you will learn:</h3>
            <div>{eventData.desc}</div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.dateInfo}>
            <div className={styles.infoIcon}>
              <Calendar size={32} alt="calender icon" />
            </div>
            <div>
              <div>Date and time: </div>
              <div>{dateRange(eventData.date)?.substring(0, 12)}</div>
              <div>10:30 AM - 1:00 PM </div>
            </div>
          </div>
          <div className={styles.locationInfo}>
            <div className={styles.infoIcon}>
              <MapPin size={32} alt="location icon" />
            </div>
            <div>
              <div>Location: {eventData.location?.toUpperCase()}</div>
              <div>ONLINE</div>
            </div>
          </div>
        </div>
      </div>
    </div> : <div className={styles.container}>Fetching Event details...</div>
  );
};

export default EventDetails;
