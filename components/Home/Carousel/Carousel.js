// Styled Components
import styled from "styled-components";

// Material UI
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    swipe: true,
    arrows: false,
    autoplaySpeed: 7000,
    customPaging: () => <FiberManualRecordIcon />,
  };

  return (
    <Wrapper {...settings}>
      <div className="slide-1">
        <p>
        The spiritual successor to classic pixel virtual chatroom games.
        </p>
      </div>
      <div className="slide-2">
        <p>
        Every in-metaverse item stored securely on the blockchain.
        </p>
      </div>
      <div className="slide-3">
        <p>
        Now available on jpg.store, the world leading Cardano NFT marketplace.
        </p>
      </div>
      <div className="slide-4">
        <p>
        Building additional utility to NFT projects on the Cardano blockchain.
        </p>
      </div>
      <div className="slide-5">
        <p>
        Regular development updates across social media platforms.
        </p>
      </div>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled(Slider)`
  width: 100%;

  padding: 7.5vh 0;

  //
  //  height: 500px;
  @media only screen and (max-width: 1500px) {
    //  height: 450px;
  }
  @media only screen and (max-width: 1150px) {
    //  height: 375px;
  }
  @media only screen and (max-width: 500px) {
    //   height: 350px;
  }
  @media only screen and (max-width: 500px) {
    //  height: 325px;
  }
  //

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;

    p {
      padding: 20px;

      //
      width: 950px;
      @media only screen and (max-width: 950px) {
        width: 100%;
      }
      //

      margin: 0 auto;

      //
      font-size: 3.9rem;
      @media only screen and (max-width: 1500px) {
        font-size: 3.4rem;
      }
      @media only screen and (max-width: 1150px) {
        font-size: 2.9rem;
      }
      @media only screen and (max-width: 700px) {
        font-size: 2.65rem;
      }
      @media only screen and (max-width: 500px) {
        font-size: 2.4rem;
      }
      //
    }
  }

  .slick-dots {
    color: #fff;
    position: absolute;
    bottom: 0px;

    .slick-active {
      color: #cf0404;
    }
  }
`;
