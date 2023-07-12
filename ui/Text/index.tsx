import styles from "./styles.module.scss";

type textInputType = {
  handleSearch?: () => void;
  placeholder: string;
  register: any
  className?: string
  type?: string
};

const TextInput = ({ handleSearch, placeholder, register, type, className }: textInputType) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <input
        type={type? type : "text"}
        placeholder={placeholder}
        className={styles.textInput}
        onChange={handleSearch}
        {...register}
      />
    </div>
  );
};

export default TextInput;
