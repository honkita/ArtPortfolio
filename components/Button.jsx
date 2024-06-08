import React from "react";
import utilStyles from "../styles/theme.util.module.css";
import style from "../styles/Home.module.css";
import Link from "next/link";
import IconsLinks from "../public/userJSONS/IconsLinks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button(props) {
  const {
    library,
    config,
    findIconDefinition,
  } = require("@fortawesome/fontawesome-svg-core");
  var IconsLinksJSON = JSON.parse(JSON.stringify(IconsLinks));

  function iconPicker() {
    return findIconDefinition({
      prefix: String(IconsLinksJSON[props.image]["prefix"]),
      iconName: String(IconsLinksJSON[props.image]["iconName"]),
    });
  }

  return (
    <Link href={props.url} target={"_blank"}>
      <button id={props.name} className={style.button}>
        <section className={style.horizontal}>
          <div className={style.logoPlacement}>
            <span className={`${utilStyles.headingMd} `} priority>
              <FontAwesomeIcon icon={iconPicker()} size="xl" />
            </span>
          </div>
          <div className={style.textPlacement}>
            <div className={utilStyles.headingMd}>{props.name}</div>
          </div>
        </section>
      </button>
    </Link>
  );
}
