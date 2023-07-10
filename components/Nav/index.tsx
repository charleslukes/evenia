"use client";
import Search from "@molecules/Search";
import styles from "./styles.module.scss";
import useNav from "@hooks/useNav";
import Image from "next/image";
import Button from "@molecules/Button";

const Nav = () => {
  const { session, providers, handleSignOut, signIn, handleSearch } = useNav();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/assets/icons/logo.svg"
          alt="evenia logo"
          width={30}
          height={30}
        />
        <h3>Evenia</h3>
      </div>
      <div>
        <Search handleSearch={handleSearch} />
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
          <Button
            text="Sign In"
            handleClick={() => signIn(provider.id)}
            key={provider.name}
          />
        ))
      )}
    </nav>
  );
};

export default Nav;
