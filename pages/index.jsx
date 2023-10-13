import Head from "next/head";

import { useTheme, ThemeProvider } from "next-themes";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Layout from "./Layout";
import utilStyles from "../styles/theme.util.module.css";
import style from "../styles/Home.module.css";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const name = "Elite Lu Art Portfolio";

  return (
    <Layout home>
      <div>
        <Head>
          <title>{name}</title>
          <meta name="description" content="Elite Lu's Art Portfolio Site" />
          <meta name="og:title" content={name} />
        </Head>
        <section className={style.container}>
          <section className={utilStyles.heading2Xl}>Elite Lu</section>
          <section className={utilStyles.headingMD}>
            Still working on this come back soon for my art stuff!!!!!
          </section>
        </section>
      </div>
    </Layout>
  );
}
