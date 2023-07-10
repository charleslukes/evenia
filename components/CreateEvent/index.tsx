import Textarea from "@molecules/Textarea";
import styles from "./styles.module.scss";
import TextInput from "@molecules/Text";

const CreateEvent = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Event</h2>
        <small>Please fill all the required information</small>
      </div>
      <form>
        <div className={styles.formInput}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <div className={`${styles.firstDetails} ${styles.marginBottom}`}>
              <TextInput placeholder="Event title" />
              <select name="category">
                <option value="Category">Category</option>
                <option value="New Category">New Category</option>
              </select>
            </div>
            <div className={styles.marginBottom}>
              <Textarea />
            </div>
            <div className={styles.marginBottom}>
              <TextInput placeholder="date" />
            </div>
            <div className={styles.marginBottom}>
              <TextInput placeholder="location" />
            </div>
          </div>
        </div>
        <div>
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
