import Textarea from "@ui/Textarea";
import styles from "./styles.module.scss";
import TextInput from "@ui/Text";
import Button from "@ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import Select from "react-select";
import { CloudArrowUp } from "phosphor-react";

type Inputs = {
  category: string;
  desc: string;
  date: string;
  location: string;
  title: string;
  price: string;
};

const EventForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  
  const options = [
    { value: "paris", label: "paris" },
    { value: "new york", label: "new york" },
    { value: "instanbul", label: "instanbul" },
    { value: "london", label: "london" },
    { value: "madrid", label: "madrid" },
    { value: "tokyo", label: "tokyo" },
    { value: "dubia", label: "dubia" },
    { value: "bilda", label: "bilda" },
    { value: "wakanda", label: "wakanda" },
    { value: "gotham", label: "gotham" },
  ];



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formInput}>
        <div className={styles.left}>
          <CloudArrowUp size={40} />
        </div>
        <div className={styles.right}>
          <div className={`${styles.firstDetails} ${styles.marginBottom}`}>
            <TextInput
              placeholder="Event title"
              register={register("title", { required: true })}
              className={styles.titleInput}
            />
            <Select options={options} id={"1"} />
          </div>
          <div className={styles.marginBottom}>
            <Textarea register={register("desc", { required: true })} />
          </div>
          <div className={styles.marginBottom}>
            <TextInput
              placeholder="price in USD"
              register={register("price", { required: true })}
            />
          </div>

          <div className={styles.marginBottom}>
            <TextInput
              placeholder="date"
              register={register("date", { required: true })}
            />
          </div>
          <div className={styles.marginBottom}>
            <TextInput
              placeholder="location"
              register={register("location", { required: true })}
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          type="submit"
          text="Continue"
          className={styles.contBtn}
        />
      </div>
    </form>
  );
};

export default EventForm;
