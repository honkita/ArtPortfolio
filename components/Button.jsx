import React, { useEffect, useState } from "react";
import utilStyles from "../styles/theme.util.module.css";
import { useTheme, ThemeProvider } from "next-themes";
import style from "../styles/Home.module.css";

export default function Button() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [press, setPress] = useState(0);
  var url = "";
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function toggleTheme() {
    if (resolvedTheme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeProvider>
      <section className={style.containerRight}>
        <button
          id="ThemeToggle"
          aria-label="Name"
          className={
            utilStyles.toggle +
            " " +
            (resolvedTheme === "dark" ? utilStyles.toggledark : null)
          }
          onClick={toggleTheme}
        />
      </section>
    </ThemeProvider>
  );
}
