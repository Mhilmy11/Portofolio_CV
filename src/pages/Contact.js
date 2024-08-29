import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLocationOutline,
  IoPhonePortraitOutline,
  IoMailOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import Container from "../components/Container";
import MobileContainer from "../components/MobileContainer";

export default function Contact({
  handleClickToInstagram,
  handleClickToTwitter,
  handleClickToLinkin,
  handleClickToGithub,
}) {
  const LaptopOrDesktop = ({ children }) => {
    const isLaptopOrDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1440 });
    return isLaptopOrDesktop ? children : null;
  };

  //   const Tablet = ({ children }) => {
  //     const isTablet = useMediaQuery({ minWidth: 766, maxWidth: 991 });
  //     return isTablet ? children : null;
  //   };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 765 });
    return isMobile ? children : null;
  };

  return (
    <>
      <LaptopOrDesktop>
        <div className=" bg-black w-full py-[55px]">
          <Container>
            <div className=" text-white">
              <h1 className=" font-semibold flex items-center text-gray-400">
                CONTACT{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[35px]">MY CONTACT</h2>
            </div>

            <div className=" grid grid-cols-2 grid-rows-2 gap-20 mt-14">
              <div className=" flex items-center">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoLocationOutline size={30} />
                </div>
                <div className=" text-white ml-3">
                  <h4 className=" font-semibold text-lg">Address</h4>
                  <p className=" text-sm">
                    Pondok Sukatani Permai Jl.Bacang 1 Blok F4 No.10 Rt 04 Rw 14
                    Tapos, Depok. Jawa Barat
                  </p>
                </div>
              </div>

              <div className=" flex items-center">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoPhonePortraitOutline size={30} />
                </div>
                <div className=" text-white ml-3">
                  <h4 className=" font-semibold text-lg">Phone Number</h4>
                  <p className=" text-sm">+62 813 8876 1325</p>
                </div>
              </div>

              <div className=" flex items-center">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoMailOutline size={30} />
                </div>
                <div className=" text-white ml-3">
                  <h4 className=" font-semibold text-lg">Email Us</h4>
                  <p className=" text-sm">setiawantojr@gmail.com</p>
                </div>
              </div>

              <div className=" flex items-center">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoShareSocialOutline size={30} />
                </div>
                <div className=" text-white ml-3">
                  <h4 className=" font-semibold text-lg">Social Media</h4>
                  <div className=" flex gap-6 mt-2">
                    <button onClick={handleClickToInstagram} className=" flex">
                      <IoLogoInstagram size={35} />
                    </button>
                    <button onClick={handleClickToTwitter} className=" flex">
                      <IoLogoTwitter size={35} />
                    </button>
                    <button onClick={handleClickToLinkin} className=" flex">
                      <IoLogoLinkedin size={35} />
                    </button>
                    <button onClick={handleClickToGithub} className=" flex">
                      <IoLogoGithub size={35} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </LaptopOrDesktop>

      <Mobile>
        <div className=" bg-black w-full pt-11 pb-6">
          <MobileContainer>
            <div className=" text-white">
              <h1 className=" font-semibold text-xs flex items-center text-gray-400">
                CONTACT{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[20px]">MY CONTACT</h2>
            </div>

            <div className=" grid grid-rows-4 gap-5">
              <div className=" flex items-center w-full">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoLocationOutline size={30} />
                </div>
                <div className=" text-white ml-3 w-[300px]">
                  <h4 className=" font-semibold text-lg">Address</h4>
                  <p className=" text-sm w-[300px]">
                    Pondok Sukatani Permai Jl.Bacang 1 Blok F4 No.10 Rt 04 Rw 14
                    Tapos, Depok. Jawa Barat
                  </p>
                </div>
              </div>

              <div className=" flex items-center">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoPhonePortraitOutline size={30} />
                </div>
                <div className=" text-white ml-3">
                  <h4 className=" font-semibold text-lg">Phone Number</h4>
                  <p className=" text-sm">+62 813 8876 1325</p>
                </div>
              </div>

              <div className=" flex items-center">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoMailOutline size={30} />
                </div>
                <div className=" text-white ml-3">
                  <h4 className=" font-semibold text-lg">Email Us</h4>
                  <p className=" text-sm">setiawantojr@gmail.com</p>
                </div>
              </div>

              <div className=" flex items-center">
                <div className=" bg-green-400 w-14 h-14 rounded-full flex items-center justify-center">
                  <IoShareSocialOutline size={30} />
                </div>
                <div className=" text-white ml-3">
                  <h4 className=" font-semibold text-lg">Social Media</h4>
                  <div className=" flex gap-6 mt-2">
                    <button onClick={handleClickToInstagram} className=" flex">
                      <IoLogoInstagram size={35} />
                    </button>
                    <button onClick={handleClickToTwitter} className=" flex">
                      <IoLogoTwitter size={35} />
                    </button>
                    <button onClick={handleClickToLinkin} className=" flex">
                      <IoLogoLinkedin size={35} />
                    </button>
                    <button onClick={handleClickToGithub} className=" flex">
                      <IoLogoGithub size={35} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </MobileContainer>
        </div>
      </Mobile>
    </>
  );
}
