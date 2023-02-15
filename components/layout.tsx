import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import NavBar from "./navBar";

export default function Layout({ children }) {
  return (
    <Grid
      container
      sx={{
        maxWidth: "900px",
        display: "flex",
        mx: "auto",
        mt: "2rem",
        gap: "6rem",
        p: "2rem",
      }}
    >
      <NavBar />
      <Box sx={{ maxWidth: "600px" }}>{children}</Box>
    </Grid>
  );
}
