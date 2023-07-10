"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EventCard = () => {
  const router = useRouter();
  const handleClick = async () => {
    router.push("/333");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div>
        <Image
          src="/assets/images/landscape3.jpeg"
          width={0}
          height={0}
          alt="an event card"
          className={styles.image}
          sizes="100vw"
        />
      </div>
      <div className={styles.subcontainer}>
        <div className={styles.card_date}>Mon, Oct 25, 8:30 AM</div>
        <div className={styles.desc}>
          Critical Thinking skills for all Professional
        </div>
        <div>
          <small>Jalu Detya</small>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
