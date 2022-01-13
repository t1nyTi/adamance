// Styled Components
import styled from "styled-components";

import MemberItem from "./MemberItem/MemberItem";

const TeamMember = () => {
  return (
    <ContainerWrapper>
    <Wrapper>
        <MemberItem 
          member = "./logo/green.png" 
          memberName = "Green" 
          memberRole = "Chief Executive Officer"/>
        <MemberItem member = "./logo/red.png" memberName = "Red" memberRole="Chief Technical Officer"/>
        <MemberItem member = "./logo/purple.png" memberName = "Purple" memberRole="Chief Divination Officer"/>
    </Wrapper>
    <Wrapper>
        <MemberItem 
          member = "./logo/black.png" 
          memberName = "Black" 
          memberRole = "Game Development Lead"/>
        <MemberItem member = "./logo/blue.png" memberName = "Blue" memberRole="Senior Game Developer"/>
        <MemberItem member = "./logo/yellow.png" memberName = "Yellow" memberRole="Junior Game Developer"/>
        <MemberItem member = "./logo/orange.png" memberName = "Orange" memberRole="Visual Experience Director"/>
    </Wrapper>
    </ContainerWrapper>
  );
};

export default TeamMember;

const ContainerWrapper = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width : 100%;
  display : flex;
  flex-direction : row;
  justify-content: center;
  margin-bottom : 3rem;
`;