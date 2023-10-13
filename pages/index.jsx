import Head from "next/head";

import { useTheme, ThemeProvider } from "next-themes";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Layout from "./Layout";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const name = "Elite Lu Portfolio";

  return (
    <Layout home>
      <div>
        <Head>
          <title>{name}</title>
          <meta name="description" content="Elite Lu's Art Portfolio Site" />
          <meta name="og:title" content={name} />
        </Head>
      </div>
    </Layout>
  );
}
