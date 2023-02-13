import Head from "next/head";
import Link from "next/link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import ModeButton from "./modeButton";

const name = "Joy UI Next.js Blog";
export const siteTitle = "Joy UI";

export default function Layout({ children, home }) {
  return (
    <div>
      <header>
        <Box sx={{ maxWidth: "600px", mx: "auto" }}>
          <Link href="/">
            <Typography component="h1" level="display2">
              {name}
            </Typography>
          </Link>
          <ModeButton />
        </Box>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
