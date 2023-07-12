import Textarea from "@ui/Textarea";
import styles from "./styles.module.scss";
import TextInput from "@ui/Text";
import Button from "@ui/Button";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { CloudArrowUp } from "phosphor-react";
import Dropzone from "react-dropzone";
import useEventForm from "@lib/hooks/useEventForm";
import { eventFormPropType } from "@lib/shared/types";

const EventForm = ({ submit, defaultValues }: eventFormPropType) => {
  const {
    handleSubmit,
    onDrop,
    register,
    categoryOption,
    control,
    locationOptions,
  } = useEventForm(defaultValues);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={styles.formInput}>
        <div className={styles.left}>
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange } }) => {
              return (
                <Dropzone
                  accept={{
                    "image/jpeg": [],
                    "image/png": [],
                  }}
                  onDrop={onDrop}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <CloudArrowUp size={40} />
                      </div>
                    </section>
                  )}
                </Dropzone>
              );
            }}
          />
        </div>
        <div className={styles.right}>
          <div className={`${styles.firstDetails} ${styles.marginBottom}`}>
            <TextInput
              placeholder="Event title"
              register={register("title", { required: true })}
              className={styles.titleInput}
            />
            <Controller
              control={control}
              defaultValue={categoryOption[4].value}
              name="category"
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <Select
                    classNamePrefix="addl-class"
                    options={categoryOption}
                    value={categoryOption.find((c) => c.value === value)}
                    onChange={(val) => val && onChange(val.value)}
                  />
                );
              }}
            />
          </div>
          <div className={styles.marginBottom}>
            <Textarea register={register("desc", { required: true })} />
          </div>
          <div className={`${styles.firstDetails} ${styles.marginBottom}`}>
            <TextInput
              placeholder="Price in USD $"
              register={register("price", { required: true })}
              type="number"
            />

            <TextInput
              placeholder="date"
              type="date"
              register={register("date", { required: true })}
            />
          </div>
          <div className={styles.marginBottom}>
            <Controller
              control={control}
              defaultValue={locationOptions[3].value}
              name="location"
              render={({ field: { onChange, value, ref } }) => {
                return (
                  <Select
                    classNamePrefix="addl-class"
                    options={locationOptions}
                    value={locationOptions.find((c) => c.value === value)}
                    onChange={(val) => val && onChange(val.value)}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <Button type="submit" text="Continue" className={styles.contBtn} />
      </div>
    </form>
  );
};

export default EventForm;
