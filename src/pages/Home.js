import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import MobileContainer from "../components/MobileContainer";
import Container from "../components/Container";

export default function Home({
  handleClickToInstagram,
  handleClickToTwitter,
  handleClickToLinkin,
  handleClickToGithub,
}) {
  const LaptopOrDesktop = ({ children }) => {
    const isLaptopOrDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1440 });
    return isLaptopOrDesktop ? children : null;
  };

  // const Tablet = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 766, maxWidth: 991 });
  //   return isTablet ? children : null;
  // };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 765 });
    return isMobile ? children : null;
  };

  return (
    <>
      <LaptopOrDesktop>
        <div className=" bg-black flex items-center h-screen w-full">
          <Container>
            <div className=" grid grid-rows-4">
              <div>
                <h1 className=" text-white font-bold text-[40px]">
                  Muhammad Hilmy Setiawanto
                </h1>
              </div>

              <div>
                <h2 className=" text-white text-2xl">
                  Ready to learn and create
                  <span className=" text-green-400"> Innovative</span>{" "}
                  technology solutions.
                </h2>
              </div>

              <div className=" text-white flex gap-6">
                <button
                  onClick={handleClickToTwitter}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400 media-icon w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <IoLogoTwitter size={20} />
                </button>
                <button
                  onClick={handleClickToInstagram}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-orange-500 media-icon w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <IoLogoInstagram size={20} />
                </button>
                <button
                  onClick={handleClickToLinkin}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-600 media-icon w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <IoLogoLinkedin size={20} />
                </button>
                <button
                  onClick={handleClickToGithub}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-emerald-400 media-icon w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <IoLogoGithub size={20} />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </LaptopOrDesktop>

      <Mobile>
        <div className=" text-white bg-black h-[900px] flex justify-center items-center">
          <MobileContainer>
            <div>
              <div>
                <h1 className=" text-white font-bold text-[20px] text-center">
                  Muhammad Hilmy Setiawanto
                </h1>
              </div>

              <div>
                <h2 className=" text-white text-xs text-center">
                  Ready to learn and create
                  <span className=" text-green-400"> Innovative</span>{" "}
                  technology solutions.
                </h2>
              </div>

              <div className=" text-white flex gap-4 justify-center pt-5">
                <button
                  onClick={handleClickToTwitter}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400 media-icon w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <IoLogoTwitter size={15} />
                </button>
                <button
                  onClick={handleClickToInstagram}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-orange-500 media-icon w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <IoLogoInstagram size={15} />
                </button>
                <button
                  onClick={handleClickToLinkin}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-600 media-icon w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <IoLogoLinkedin size={15} />
                </button>
                <button
                  onClick={handleClickToGithub}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-emerald-400 media-icon w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <IoLogoGithub size={15} />
                </button>
              </div>
            </div>
          </MobileContainer>
        </div>
      </Mobile>
    </>
  );
}
