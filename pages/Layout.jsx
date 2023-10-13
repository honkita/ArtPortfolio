import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/theme.util.module.css";
import React, { useState, useEffect, Component } from "react";

export default function Layout({ home, children }) {
  return (
    <div className={styles.background}>
      <main>{children}</main>
      <section className={styles.container}>
        <section className={styles.headingMd}>
          Copyrights © 2023 Elite Lu
        </section>
      </section>
    </div>
  );
}
