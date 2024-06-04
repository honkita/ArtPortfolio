import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import style from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import IconsLinks from "../public/IconsLinks.json";

export default function Button(props) {
  var IconsLinksJSON = JSON.parse(JSON.stringify(IconsLinks));
  function iconPicker() {
    if (IconsLinksJSON[props.image] != null) return IconsLinksJSON[props.image];
    return null;
  }

  return (
    <Link href={props.url} target={"_blank"}>
      <Head>
        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <button id={props.name} className={style.button}>
        <section className={style.horizontal}>
          <div className={style.logoPlacement}>
            {
              <span className={`${utilStyles.logoImage} `} priority>
                <i class={iconPicker()} alt={props.name}></i>
              </span>
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
