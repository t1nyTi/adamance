// Styled Components
import styled from "styled-components";
// React Reveal
import Fade from "react-reveal/Fade";

const MemberItem = (props) => {
  return (
    <Wrapper>
        <img src = {props.member} alt = {props.memberName}></img>
        <h2>{props.memberName}</h2>
        <h4>{props.memberRole}</h4>
    </Wrapper>
  );
};

export default MemberItem;

const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  flex-wrap: wrap;
  flex-direction : column;
  margin-right : 4rem;
  @media only screen and (max-width: 1000px) {
    margin-right : 1rem;
  }
  img {
    //
    border-radius : 50%;
    margin-top : 20px;
    margin-bottom : 20px;
    width: 150px;
    @media only screen and (max-width: 1000px) {
      width: 55px;
    }
    //
  }
  h2{
    margin-bottom : 5px;
    @media only screen and (max-width: 1000px) {
      font-size : 1.4rem;
    }
  }
  h4{
    @media only screen and (max-width: 1000px) {
      font-size : 0.7rem;
      width : 70%;
    }
  }
`;