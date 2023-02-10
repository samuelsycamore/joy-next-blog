import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { Box, Typography } from "@mui/joy";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    summary: string;
    category: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout home>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box sx={{ maxWidth: "600px", mx: "auto", p: "10px" }}>
        <Typography level="body3">
          <Date dateString={postData.date} />
        </Typography>
        <Typography level="body3">
          {postData.category}
        </Typography>
        <Typography level="display2" fontSize="30px">
          {postData.title}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Box>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
