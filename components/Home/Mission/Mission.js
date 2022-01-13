// Styled Components
import styled from "styled-components";

// Material UI
import PublicIcon from "@mui/icons-material/Public";
//import SecurityIcon from "@mui/icons-material/Security";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ExtensionIcon from "@mui/icons-material/Extension";
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// Components
import MissionItem from "./MissionItem/MissionItem";

const Mission = () => {
  return (
    <Wrapper>
      <MissionItem
        text={"An Infinitely Expansive Metaverse"}
        icon={<PublicIcon className="icon" />}
      />

      <MissionItem
        text={"Secure Game Asset Storage"}
        icon={<SportsEsportsIcon className="icon" />}
      />
      <MissionItem
        text={"Increasing NFT Utility"}
        icon={<BookmarkAddIcon className="icon" />}
      />
      <MissionItem
        text={"Endless User Generated Experiences"}
        icon={<AllInclusiveIcon className="icon" />}
      />
      <MissionItem
        text={"Build Your Own Adaverse Minigames"}
        icon={<ExtensionIcon className="icon" />}
      />
      <MissionItem
        text={"Meet New Blockchain Communities "}
        icon={<GroupsIcon className="icon" />}
      />
    </Wrapper>
  );
};

export default Mission;

const Wrapper = styled.div`
  height: max-content;
  margin: 0 auto;
  padding: 0 20px;

  //
  width: 1000px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  //

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 50px;

  //
  justify-items: center;
  @media only screen and (max-width: 610px) {
    justify-items: left;
  }
  //

  .header {
    align-self: center;

    height: 100%;

    .text {
      font-size: 30px;
    }

    .icon {
      font-size: 50px;
      fill: #cf0404;
    }

    @media only screen and (max-width: 610px) {
      margin-bottom: 20px;
    }
  }
`;
