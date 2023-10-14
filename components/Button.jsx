import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import Image from "next/image";
import { useTheme, ThemeProvider } from "next-themes";
import style from "../styles/Home.module.css";
import Link from "next/link";

export default function Button(props) {
  function iconPicker() {
    switch (props.image) {
      case "Paintbrush":
        return (
          <img
            src={"./images/ButtonIcons/paintbrush.png"}
            className={`${utilStyles.button} `}
            alt="IDK"
          />
        );
      case "Needle":
        return (
          <img
            src={"./images/ButtonIcons/needle.png"}
            className={`${utilStyles.button} `}
            alt="IDK"
          />
        );
      default:
        return (
          <img
            src={"./images/ButtonIcons/needle.png"}
            className={`${utilStyles.button} `}
            alt="IDK"
          />
        );
    }
  }

  return (
    <Link href={props.url} target={"_blank"}>
      <button id={props.name} className={style.button}>
        <section className={style.horizontal}>
          <div className={style.logoPlacement}>{iconPicker()}</div>
          <div className={style.textPlacement}>
            <div className={utilStyles.headingMd}>{props.name}</div>
          </div>
        </section>
      </button>
    </Link>
  );
}
