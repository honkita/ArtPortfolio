import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import { useTheme, ThemeProvider } from "next-themes";
import style from "../styles/Home.module.css";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.url} target={"_blank"}>
      <button id={props.name} className={style.button}>
        <div className={style.horizontalRight}>
          <img></img>
          <div className={utilStyles.headingMd}>{props.name}</div>
        </div>
      </button>
    </Link>
  );
}
