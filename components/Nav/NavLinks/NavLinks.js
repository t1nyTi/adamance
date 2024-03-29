// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Next
import Link from "next/link";

const NavLinks = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/about-us">
            <a>ABOUT US</a>
          </Link>
        </li>
        <li>
          <Link href="/token-ico">
            <a>
              <Button variant="contained">CONNECT</Button>
            </a>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 50px;

    list-style-type: none;
    li {
      font-weight: 600;
      a {
        text-decoration: none;
        color: #fff;
        transition: all 0.2s ease-in-out 0s;

        &:hover {
          color: #cf0404;
        }
      }

      button {
        background-color: #cf0404;
        padding: 0 12.5px;
        height: 30px;
        width: 150px;

        display: flex;
        align-items: center;

        &:hover {
          background-color: rgba(207, 4, 4, 0.9);
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
