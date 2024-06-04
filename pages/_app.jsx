/**
 * Import your global css before MyApp
 */
import "../styles/variables.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

/**
 * Defualt _app.jsx file
 */
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
