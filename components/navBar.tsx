import Link from "next/link";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import ModeButton from "./modeButton";
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
  '/blog': {
    name: 'Blog',
  },
  '/contact': {
    name: 'Contact',
  },
};

export default function NavBar() {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  return (
    <Box>
      <Link href="/">
        <Typography component="h1" level="display2" fontSize="xl">
          Joy Next Blog
        </Typography>
      </Link>
      <nav>

      </nav>
      <ModeButton />
    </Box>
  );
}
