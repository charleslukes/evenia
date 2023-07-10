import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.list}>
        <div>Home</div>
        <div>Create Event</div>
        <div>Sign Up</div>
        <div>Explore Events</div>
      </div>
    </div>
  );
};

export default Footer;
