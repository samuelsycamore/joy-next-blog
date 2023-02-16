import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import NavBar from "./navBar";
import { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren) {
  return (
    <Grid
      container
      sx={{
        maxWidth: "900px",
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
  );
}
