import styles from "./styles.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <div>
        <input type="text" />
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Nav;
