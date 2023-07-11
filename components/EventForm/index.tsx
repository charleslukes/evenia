import Textarea from "@ui/Textarea";
import styles from "./styles.module.scss";
import TextInput from "@ui/Text";
import Button from "@ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  category: string,
  desc: string,
  date: string,
  location: string,
  title: string
};


const EventForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(watch("title")); 

  return (
    <form>
      <div className={styles.formInput}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={`${styles.firstDetails} ${styles.marginBottom}`}>
            <TextInput placeholder="Event title" {...register('title', { required: true })} />
            <select name="category" >
              <option value="Category">Category</option>
              <option value="New Category">New Category</option>
            </select>
          </div>
          <div className={styles.marginBottom}>
            <Textarea {...register('desc', {required: true})} />
          </div>
          <div className={styles.marginBottom}>
            <TextInput placeholder="date" {...register('date', {required: true})} />
          </div>
          <div className={styles.marginBottom}>
            <TextInput placeholder="location" {...register("location", {required: true})} />
          </div>
        </div>
      </div>
      <div>
        <Button
          type="button"
          text="Continue"
          className={styles.contBtn}
          handleClick={() => {}}
        />
      </div>
    </form>
  );
};

export default EventForm;
