import Link from "next/link";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import ModeButton from "./modeButton";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog/",
  },
  {
    name: "About",
    path: "/about/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function NavBar() {
  return (
    <Box>
      <Link href="/">
        <Typography component="h1" level="display2" fontSize="xl">
          Joy Next Blog
        </Typography>
      </Link>
      <nav>
        <List
          sx={{ display: "flex", flexDirection: { xs: "row", sm: "column" } }}
        >
          {navLinks.map(({ path, name }) => {
            return (
              <ListItem key={path}>
                <Link href={path}>{name}</Link>
              </ListItem>
            );
          })}
          <ListItem>
            <ModeButton />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
