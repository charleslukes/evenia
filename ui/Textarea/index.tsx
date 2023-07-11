import styles from "./styles.module.scss";

const Textarea = () => {
  return (
    <textarea
      name="event"
      className={styles.desc}
      placeholder="description"
    ></textarea>
  );
};

export default Textarea;
