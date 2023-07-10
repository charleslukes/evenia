"use client";
import styles from "./styles.module.scss";
import useNav  from "@hooks/useNav";

const Nav = () => {
  const {session, providers, handleSignOut, signIn} = useNav();
 
  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <div>
        <input type="text" />
      </div>
      {session?.user ? (
        <div>
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
          >
            Sign In
          </button>
        ))
      )}
    </nav>
  );
};

export default Nav;
