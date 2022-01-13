// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Next
import Head from "next/head";

// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Home/Footer/Footer";
import SectionBreak from "../../components/Home/SectionBreak/SectionBreak";
import Socials from "../../components/Home/Socials/Socials";
import Background from "../../components/Home/Background/Background";
import AboutUsTopPanel from "./AboutUsTopPanel/AboutUsTopPanel";

// React Reveal
import Fade from "react-reveal/Fade";
import TeamMember from "./TeamMember/TeamMember";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>ADAMANCE | About us</title>
        <link rel="icon" href="./logo/transparent-logo.png" />
      </Head>
      <Nav />
      <Wrapper>
        <Background />
        <Fade>
          <AboutUsTopPanel/>
        </Fade>
        <Fade>
          <TeamMember/>
        </Fade>
        <Fade>
        <Socials />
        </Fade>
        <SectionBreak />
        <Footer />
      </Wrapper>
    </Fragment>
  );
};

export default index;
/*
const Wrapper = styled.div`
  width: 100%;
  padding-top: 25vh;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }
`;*/
const Wrapper = styled.div`
  background-color: #1c0000;
  color: #fff;
  width: 100%;
  flex-direction : column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
