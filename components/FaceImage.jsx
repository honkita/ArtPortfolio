import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import { useTheme, ThemeProvider } from "next-themes";
import style from "../styles/Home.module.css";

export default function FaceImage() {
  return (
    <ThemeProvider>
      <section
        className={`${utilStyles.mainFace} ${utilStyles.imageRendering} ${utilStyles.mainFaceBorder}`}
      ></section>
    </ThemeProvider>
  );
}
