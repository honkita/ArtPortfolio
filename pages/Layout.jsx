import styles from "../styles/Home.module.css";
import React from "react";

export default function Layout({ home, children }) {
  return (
    <div className={styles.background}>
      <main>{children}</main>
      <section className={styles.container}>
        <div className={styles.headingMd}>Copyrights © 2023 Elite Lu</div>
      </section>
    </div>
  );
}
