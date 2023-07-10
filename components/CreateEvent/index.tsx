import styles from "./styles.module.scss";

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
            <div>
              <input type="text" placeholder="Event title" />
              <select name="category">
                <option value="Category">Category</option>
                <option value="New Category">New Category</option>
              </select>
            </div>
            <div>
              <textarea name="event" cols={30} rows={10}></textarea>
            </div>
            <div>
                <input type="date" placeholder="date" />
            </div>
            <div>
                <input type="text" placeholder="location" />
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
