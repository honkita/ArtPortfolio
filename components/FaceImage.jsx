import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import { useTheme, ThemeProvider } from "next-themes";
import style from "../styles/Home.module.css";

export default function FaceImage() {
  return (
    <ThemeProvider>
      <img
        src={"./images/Face/Hector_Pixel.png"}
        className={`${utilStyles.mainFace} ${utilStyles.imageRendering} ${utilStyles.mainFaceBorder}`}
        alt={"Hector Image"}
      ></img>
    </ThemeProvider>
  );
}
