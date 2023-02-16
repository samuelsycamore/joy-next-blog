import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import NavBar from "./navBar";
import { PropsWithChildren } from "react";
import { siteMetaData } from "../lib/siteMetaData";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout(props: PropsWithChildren) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{siteMetaData.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={siteMetaData.description} />
        <meta
          property="og:url"
          content={`${siteMetaData.siteUrl}${router.asPath}`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content={siteMetaData.title} />
        <meta property="og:description" content={siteMetaData.description} />
        <meta property="og:title" content={siteMetaData.title} />
        <meta
          property="og:image"
          content={`${siteMetaData.siteUrl}${siteMetaData.ogImage}`}
          key={siteMetaData.ogImage}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetaData.title} />
        <meta name="twitter:description" content={siteMetaData.description} />
        <meta
          name="twitter:image"
          content={`${siteMetaData.siteUrl}${siteMetaData.ogImage}`}
        />
        <link
          rel="canonical"
          href={`${siteMetaData.siteUrl}${router.asPath}`}
        />
      </Head>
      <Grid
        container
        sx={{
          maxWidth: "1000px",
          display: "flex",
          mx: "auto",
          mt: { xs: "2rem", md: "6rem" },
          gap: { xs: "2rem", md: "6rem" },
          p: "2rem",
        }}
      >
        <NavBar />
        <Box sx={{ maxWidth: "600px" }}>{props.children}</Box>
      </Grid>
    </>
  );
}
