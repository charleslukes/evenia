import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/icons/logo.svg"
          alt="evenia logo"
          width={30}
          height={30}
        />
        <h3>Evenia</h3>
      </div>
      <div className={styles.list}>
        <div>
          <Link href={"/"} className={styles.link}>
            Home
          </Link>
        </div>
        <div>
          <Link href={"/create-event"} className={styles.link}>
            Create Event
          </Link>
        </div>
        <div>
          <Link href={"/"} className={styles.link}>
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
