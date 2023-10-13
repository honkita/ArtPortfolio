import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/theme.util.module.css";
import React, { useState, useEffect, Component } from "react";
import PixelSwitch from "../components/PixelSwitch";
import { useTheme, ThemeProvider } from "next-themes";

export default function Layout({ home, children }) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <ThemeProvider>
      <PixelSwitch />
      <main>{children}</main>
      <section className={styles.container}>
        <section className={styles.headingMd}>
          Copyrights © 2023 Elite Lu
        </section>
      </section>
    </ThemeProvider>
  );
}
