import Layout from "../components/layout";
import Link from "next/link";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/system";

export default function About() {
  return (
    <Layout home>
      <Typography level="h2">About me</Typography>
      <img src="../images/photo.jpeg" />
      <Typography>
        I'm baby waistcoat ugh before they sold out pok pok mlkshk, iceland
        chicharrones. Art party craft beer semiotics Brooklyn, bitters aesthetic
        cornhole authentic vape YOLO food truck waistcoat cliche. Same pork
        belly cornhole wayfarers, hexagon DSA raclette praxis farm-to-table
        edison bulb woke you probably haven't heard of them.
      </Typography>
    </Layout>
  );
}
