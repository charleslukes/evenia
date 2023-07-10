import Image from "next/image";
import styles from "./styles.module.scss";

const EventDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/landscape3.jpeg"
            width={0}
            height={0}
            alt="an event card"
            className={styles.image}
            sizes="100vw"
          />
        </div>
        <div className={styles.register}>
          <div>
            <div className={styles.date}>SEP 09</div>
            <h1 className={styles.header}>
              Learn design sprint with jake Knapp
            </h1>
            <div className={styles.priceAuthor}>
              <div>$780</div>
              <div>
                by <span>jaludetya</span>
              </div>
            </div>
            <div>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.desc}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eos
            officiis laudantium accusamus rerum commodi fugiat quod, repellendus
            veritatis magni dolorem, accusantium delectus tempore maxime eveniet
            nobis obcaecati optio quibusdam?
          </div>
          <div>
            <h1>What you will learn:</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sit quos aliquam voluptatum magni praesentium aperiam
              molestias nobis optio illo repellat eos aspernatur minima quis
              placeat doloribus ex, sunt minus!
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.dateInfo}>
            <div className={styles.infoIcon}>ICON</div>
            <div>
              <div>Date and time: </div>
              <div>Thu, September 9, 2021</div>
              <div>10:30 AM - 1:00 PM </div>
            </div>
          </div>
          <div className={styles.locationInfo}>
            <div className={styles.infoIcon}>ICON</div>
            <div>
              <div>Location:</div>
              <div>ONLINE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
