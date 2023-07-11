import { JSX, ClassAttributes, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";

const Textarea = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLTextAreaElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <textarea
      name="event"
      className={styles.desc}
      placeholder="description"
      {...props}
    ></textarea>
  );
};

export default Textarea;
