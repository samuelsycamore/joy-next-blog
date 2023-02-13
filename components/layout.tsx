import Head from "next/head";
import Link from "next/link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import ModeButton from "./modeButton";

export default function Layout({ children, home }) {
  return (
    <Grid
      container
      spacing={4}
      sx={{ maxWidth: "1000px", display: "flex", mx: "auto", mt: "100px" }}
    >
      <header>
        <Box>
          <Link href="/">
            <Typography component="h1" level="display2" fontSize="xl">
              Joy Next Blog
            </Typography>
          </Link>
          <ModeButton />
        </Box>
      </header>
      <main>
        <Box sx={{ maxWidth: "600px", mx: "auto", p: "10px" }}>
          {children}
          {!home && (
            <div>
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </Box>
      </main>
    </Grid>
  );
}
