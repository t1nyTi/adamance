// Styled Components
import styled from "styled-components";

// Next
import { useRouter } from "next/router";

const NavLogo = () => {
  const router = useRouter();

  const wrapperHandler = () => {
    router.push("/");
  };

  return (
    <Wrapper onClick={wrapperHandler}>
      <img src="./logo/adamance_logo.png" alt="logo" />
    </Wrapper>
  );
};

export default NavLogo;

const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  img {
    //
    margin-top : 20px;
    width: 350px;
    @media only screen and (max-width: 1000px) {
      width: 250px;
    }
    //
  }

  p {
    width: min-content;
    margin-left: 10px;

    //
    font-size: 1.7rem;
    line-height: 25px;
    @media only screen and (max-width: 1000px) {
      font-size: 1.25rem;
      line-height: 20px;
    }
    //
  }
`;
