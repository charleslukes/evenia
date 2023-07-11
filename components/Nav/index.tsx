"use client";
import Search from "@ui/Search";
import styles from "./styles.module.scss";
import useNav from "@lib/hooks/useNav";
import Image from "next/image";
import Button from "@ui/Button";
import ButtonOutline from "@ui/ButtonOutline";

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
        <div className={styles.signOutContainer}>
          <ButtonOutline text="Create Event" handleClick={() => {}} className={styles.createEvent} />
          <Button text="Sign Out" handleClick={handleSignOut} />
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
