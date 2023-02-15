import Layout from "../components/layout";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";

export default function Contact() {
  return (
    <Layout>
      <Typography level="h2" sx={{ mb: "1rem" }}>
        Contact
      </Typography>
      Here's how you can get in touch with me:
      <List>
        <ListItem>
          <ListItemDecorator>
            <EmailIcon />
          </ListItemDecorator>
          <ListItemContent>
            <a href="mailto:name@email.com">name@email.com</a>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <GitHubIcon />
          </ListItemDecorator>
          <ListItemContent>
            <a href="https://github.com/">GitHub username</a>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <LinkedInIcon />
          </ListItemDecorator>
          <ListItemContent>
            <a href="https://linkedin.com/">LinkedIn username</a>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <TwitterIcon />
          </ListItemDecorator>
          <ListItemContent>
            <a href="https://twitter.com/">Twitter username</a>
          </ListItemContent>
        </ListItem>
      </List>
    </Layout>
  );
}
