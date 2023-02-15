import Layout from "../components/layout";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/List";

export default function Contact() {
  return (
    <Layout>
      Here's how you can get in touch with me:
      <List>
        <ListItem>
          <a href="">
            <EmailIcon /> name@email.com
          </a>
        </ListItem>
        <ListItem>
          <a href="">
            <GitHubIcon /> GitHub_username
          </a>
        </ListItem>
        <ListItem>
          <a href="">
            <LinkedInIcon /> LinkedIn_username
          </a>
        </ListItem>
        <ListItem>
          <a href="">
            <TwitterIcon /> Twitter_username
          </a>
        </ListItem>
      </List>
    </Layout>
  );
}
