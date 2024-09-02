import { useMediaQuery } from "react-responsive";
import Container from "../components/Container";
import Card from "../components/Card";
import MobileContainer from "../components/MobileContainer";

export default function Portfolio() {
  const LaptopOrDesktop = ({ children }) => {
    const isLaptopOrDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1440 });
    return isLaptopOrDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 765 });
    return isMobile ? children : null;
  };

  //   const Tablet = ({ children }) => {
  //     const isTablet = useMediaQuery({ minWidth: 766, maxWidth: 991 });
  //     return isTablet ? children : null;
  //   };

  return (
    <>
      <LaptopOrDesktop>
        <div className=" bg-black w-full pt-[55px]">
          <Container>
            <div className=" text-white">
              <h1 className=" font-semibold flex items-center text-gray-400">
                PORTFOLIO
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[35px]">
                CHECK OUT MY VARIOUS PORTFOLIOS
              </h2>
            </div>
            <Card />
          </Container>
        </div>
      </LaptopOrDesktop>

      <Mobile>
        <div className=" bg-black w-full pt-11">
          <MobileContainer>
            <div className=" text-white pb-3">
              <h1 className=" font-semibold text-xs flex items-center text-gray-400">
                PORTFOLIO
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[19px]">
                CHECK OUT MY VARIOUS PORTFOLIOS
              </h2>
            </div>
            <Card />
          </MobileContainer>
        </div>
      </Mobile>
    </>
  );
}
