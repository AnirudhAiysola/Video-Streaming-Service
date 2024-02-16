"use client";

import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";
import SignIn from "./signIn";
import { onAuthChangeHandler } from "../firebase/firebase";
import Upload from "./upload";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChangeHandler((user) => setUser(user));
    return () => unsubscribe();
  }, []);
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          width={90}
          height={20}
          src="/youtube-logo.svg"
          alt="Youtube logo"
        />
      </Link>
      {user && <Upload />}
      <SignIn user={user} />
    </nav>
  );
};

export default Navbar;
