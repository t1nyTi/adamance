// Styled Components
import styled from "styled-components";

// Components
import Project from "./Project/Project";

const Projects = () => {
  return (
    <Wrapper>
      <Project
        image={"./logo/jpgStore.png"}
        title={"JPG.STORE"}
        main={"Now available on JPG.store, the leading Cardano NFT marketplace"}
        link={"https://www.jpg.store/user/addr1q9ashvspu02efamavw79d32y3uulcx9qm8fcma42wmrhpwd28jrcantqpc5m0a3vdujeu3hf6z6lpt809xkz8x6cup6s8kd4zj?tab=sales"}
      />
      <Project
        image={
          "./logo/filled-logo2.png"
        }
        title={"COMING SOON"}
        main={""}
        link={"https://www.jpg.store/user/addr1q9ashvspu02efamavw79d32y3uulcx9qm8fcma42wmrhpwd28jrcantqpc5m0a3vdujeu3hf6z6lpt809xkz8x6cup6s8kd4zj?tab=sales"}
      />
      <Project
        image={
          "./logo/filled-logo2.png"
        }
        title={"COMING SOON"}
        main={""}
        link={"https://www.jpg.store/user/addr1q9ashvspu02efamavw79d32y3uulcx9qm8fcma42wmrhpwd28jrcantqpc5m0a3vdujeu3hf6z6lpt809xkz8x6cup6s8kd4zj?tab=sales"}
      />
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;
