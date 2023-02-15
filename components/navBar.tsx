import Link from "next/link";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import ModeButton from "./modeButton";
import { usePathname } from "next/navigation";

const navLinks = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/about": {
    name: "About",
  },
  "/contact": {
    name: "Contact",
  },
};

export default function NavBar() {
  let pathname = usePathname();
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
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
          {Object.entries(navLinks).map(([path, { name }]) => {
            const isActive = path === pathname;

            return (
              <ListItem>
                <Link key={path} href={path}>
                  {name}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </nav>
      <ModeButton />
    </Box>
  );
}
