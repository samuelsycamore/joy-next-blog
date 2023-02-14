import Head from "next/head";
import Layout from "../components/layout";
import TypographySystem from "../components/typographySystem";

export default function TypographySys({}) {
  return (
    <Layout home>
      <Head>
        <title>Typography System</title>
      </Head>
      <section>
        <TypographySystem />
      </section>
    </Layout>
  );
}
