// Styled Components
import styled from "styled-components";

// Material UI
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";

// Components
import SocialsIcon from "./SocialsIcon/SocialsIcon";

const Socials = () => {
  return (
    <Wrapper>
      <p className="header">Join the community</p>

      <div className="items">
        <SocialsIcon
          text={"Discord"}
          icon={"./svg/discord-icon.svg"}
          link={"https://discord.gg/ryghNxR6CV"}
        />
        <SocialsIcon
          text={"Twitter"}
          icon={<TwitterIcon className="icon" />}
          link={"https://twitter.com/adamanceio"}
        />
        <SocialsIcon
          text={"Reddit"}
          icon={<RedditIcon className="icon" />}
          link={"https://www.reddit.com/r/adamance/"}
        />
      </div>
    </Wrapper>
  );
};

export default Socials;

const Wrapper = styled.div`
  width: 100%;
  height: min-content;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    font-size: 2rem;
    padding-bottom: 50px;
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    //
    width: 800px;
    @media only screen and (max-width: 825px) {
      width: 100%;
    }
    //
  }
`;
