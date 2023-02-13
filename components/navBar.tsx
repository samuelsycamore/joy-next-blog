import Link from "next/link";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import ModeButton from "./modeButton";

export default function NavBar() {
  return (
    <Box>
      <Link href="/">
        <Typography component="h1" level="display2" fontSize="xl">
          Joy Next Blog
        </Typography>
      </Link>
      <ModeButton />
    </Box>
  );
}
