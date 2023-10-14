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
        return "./images/ButtonIcons/paintbrush.png";
      case "Needle":
        return "./images/ButtonIcons/needle.png";
      case "Twitter":
        return "./images/ButtonIcons/twitter.png";
      default:
        return "";
    }
  }

  return (
    <Link href={props.url} target={"_blank"}>
      <button id={props.name} className={style.button}>
        <section className={style.horizontal}>
          <div className={style.logoPlacement}>
            {
              <img
                src={iconPicker()}
                className={`${utilStyles.button} `}
                alt={props.name}
              />
            }
          </div>
          <div className={style.textPlacement}>
            <div className={utilStyles.headingMd}>{props.name}</div>
          </div>
        </section>
      </button>
    </Link>
  );
}
