// Styled Components
import styled from "styled-components";
// React Reveal
import Fade from "react-reveal/Fade";

const AboutUsTopPanel = () => {
  return (
    <Wrapper>
        <h1>Our Team</h1>
        <h3>The team behind Adamance</h3>
    </Wrapper>
  );
};

export default AboutUsTopPanel;

const Wrapper = styled.div`
  height : 200px;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
  h3 {
    margin-top : 10px;
  }
`;