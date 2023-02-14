import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    title: string;
    summary: string;
    category: string;
    date: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>Joy Next Blog</title>
      </Head>
      <Typography level="h2" fontSize="xl">
        Posts
      </Typography>
      <List
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        {allPostsData.map(({ id, date, category, title, summary }) => (
          <ListItem
            key={id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span>
              <Date dateString={date} />
              {category}
            </span>
            <Link href={`/blog/${id}`}>{title}</Link>
            {summary}
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
