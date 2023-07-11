import styles from "./styles.module.scss";

type textInputType = {
  handleSearch?: () => void;
  placeholder: string;
};

const TextInput = ({ handleSearch, placeholder, ...others }: textInputType) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.textInput}
        onChange={handleSearch}
        {...others}
      />
    </div>
  );
};

export default TextInput;
