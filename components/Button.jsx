import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import Image from "next/image";
import { useTheme, ThemeProvider } from "next-themes";
import style from "../styles/Home.module.css";
import Link from "next/link";
import needleIcon from "../public/images/ButtonIcons/needle.svg";
import paintbrushIcon from "../public/images/ButtonIcons/paintBrush.svg";

export default function Button(props) {
  function iconPicker() {
    switch (props.image) {
      case "Paintbrush":
        return <Image src={paintbrushIcon} className={utilStyles.button} />;
      case "Needle":
        return <Image src={needleIcon} className={utilStyles.button} />;
      default:
        return <Image src={needleIcon} className={utilStyles.button} />;
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
