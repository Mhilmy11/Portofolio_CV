import profilePicture from "../assets/images/profile-picture.jpg";
import { useMediaQuery } from "react-responsive";
import Container from "../components/Container";
import MobileContainer from "../components/MobileContainer";

export default function About() {
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
        <div className=" bg-black w-full pt-[55px]">
          <Container>
            <div className=" text-white pb-4">
              <h1 className=" font-semibold flex items-center text-gray-400">
                ABOUT{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[35px]">LEARN MORE ABOUT ME</h2>
            </div>

            <div className=" flex items-center">
              <div className=" w-[350px]">
                <img
                  className=" rounded-lg"
                  src={profilePicture}
                  alt="profile-picture"
                />
              </div>

              <div className=" text-white w-[700px] ml-16">
                <h2 className=" font-semibold text-[33px] text-green-500">
                  Junior FullStack Developer
                </h2>
                <p className=" my-3 text-lg text-justify">
                  I am a Junior FullStack Developer with a keen interest in web
                  application development and programming.
                </p>
                <div className=" flex gap-24 mb-4">
                  <div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[10px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold mr-3 text-lg">
                        Birthday:
                      </span>
                      <span>3 November 2002</span>
                    </div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold mr-3 text-lg">
                        Website:
                      </span>
                      <a href="http://localhost:3000/">www.localhost.com</a>
                    </div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold mr-3 text-lg">
                        Phone:
                      </span>
                      <span>+62 81388761325</span>
                    </div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold mr-3 text-lg">City:</span>
                      <span>Depok, West Java</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold text-lg mr-2">Age:</span>
                      <span>21</span>
                    </div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold text-lg mr-2">
                        Degree:
                      </span>
                      <span>Junior</span>
                    </div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold text-lg mr-2">
                        Email:
                      </span>
                      <span>setiawantojr@gmail.com</span>
                    </div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
                        &#10148;
                      </span>
                      <span className=" font-semibold text-lg mr-2">
                        Freelance:
                      </span>
                      <span>Available</span>
                    </div>
                  </div>
                </div>
                <div className=" text-lg">
                  <p className=" text-justify">
                    I enjoy solving complex problems and continually learning to
                    improve my skills in software development. With a solid
                    foundation in front-end and back-end development, I strive
                    to build efficient and user-friendly applications. I am also
                    open to freelance projects and enjoy working in a team to
                    create innovative solutions that meet user needs.
                  </p>
                </div>
              </div>
            </div>

            <div className=" text-white mt-[30px] pb-4">
              <h1 className=" font-semibold flex items-center text-gray-400">
                SKILLS{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[35px]">MY SKILLS</h2>
            </div>

            <div>
              <div className=" text-white w-full flex justify-between">
                <div>
                  <div className=" flex w-[450px] justify-between text-xs pb-1">
                    <p>HTML</p>
                    <p>100%</p>
                  </div>
                  <div className=" bg-slate-700 w-[450px] h-3 rounded-lg">
                    <div className=" bg-green-400 w-[450px] h-3 rounded-lg"></div>
                  </div>
                </div>
                <div>
                  <div className=" flex w-[450px] justify-between text-xs pb-1">
                    <p>PHP</p>
                    <p>40%</p>
                  </div>
                  <div className=" bg-slate-700 w-[450px] h-3 rounded-lg">
                    <div className=" bg-green-400 w-[208px] h-3 rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div className=" text-white w-full flex justify-between py-10">
                <div>
                  <div className=" flex w-[450px] justify-between text-xs pb-1">
                    <p>CSS</p>
                    <p>100%</p>
                  </div>
                  <div className=" bg-slate-700 w-[450px] h-3 rounded-lg">
                    <div className=" bg-green-400 w-[450px] h-3 rounded-lg"></div>
                  </div>
                </div>
                <div>
                  <div className=" flex w-[450px] justify-between text-xs pb-1">
                    <p>WORDPRESS/CMS</p>
                    <p>60%</p>
                  </div>
                  <div className=" bg-slate-700 w-[450px] h-3 rounded-lg">
                    <div className=" bg-green-400 w-[312px] h-3 rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div className=" text-white w-full flex justify-between">
                <div>
                  <div className=" flex w-[450px] justify-between text-xs pb-1">
                    <p>JAVASCRIPT</p>
                    <p>80%</p>
                  </div>
                  <div className=" bg-slate-700 w-[450px] h-3 rounded-lg">
                    <div className=" bg-green-400 w-[416px] h-3 rounded-lg"></div>
                  </div>
                </div>
                <div>
                  <div className=" flex w-[450px] justify-between text-xs pb-1">
                    <p>FIGMA</p>
                    <p>65%</p>
                  </div>
                  <div className=" bg-slate-700 w-[450px] h-3 rounded-lg">
                    <div className=" bg-green-400 w-[338px] h-3 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </LaptopOrDesktop>

      <Mobile>
        <div className=" bg-black w-full pt-11">
          <MobileContainer>
            <div className=" text-white pb-1">
              <h1 className=" font-semibold flex items-center text-gray-400 text-xs">
                ABOUT{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[20px]">LEARN MORE ABOUT ME</h2>
            </div>

            <div className=" text-white">
              <div>
                <h2 className=" font-semibold text-[15px] text-green-500">
                  Junior FullStack Developer
                </h2>
                <p className=" mb-3 text-xs text-justify">
                  I am a Junior FullStack Developer with a keen interest in web
                  application development and programming.
                </p>
              </div>

              <div className=" flex gap-8 items-center">
                <div className=" w-[150px]">
                  <img
                    className=" rounded-lg"
                    src={profilePicture}
                    alt="profile-picture"
                  />
                </div>

                <div className=" text-xs grid grid-rows-8 gap-2">
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-3">Birthday:</span>
                    <span>3 November 2002</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-3">Website:</span>
                    <a href="http://localhost:3000/">www.localhost.com</a>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-3">Phone:</span>
                    <span>+62 81388761325</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-3">City:</span>
                    <span>Depok, West Java</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-2">Age:</span>
                    <span>21</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-2">Degree:</span>
                    <span>Junior</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-2">Email:</span>
                    <span>setiawantojr@gmail.com</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-1">&#10148;</span>
                    <span className=" font-semibold mr-2">Freelance:</span>
                    <span>Available</span>
                  </div>
                </div>
              </div>

              <div className=" mt-3 pb-6">
                <p className=" text-justify text-xs">
                  I enjoy solving complex problems and continually learning to
                  improve my skills in software development. With a solid
                  foundation in front-end and back-end development, I strive to
                  build efficient and user-friendly applications. I am also open
                  to freelance projects and enjoy working in a team to create
                  innovative solutions that meet user needs.
                </p>
              </div>
            </div>

            <div className=" text-white pb-4">
              <h1 className=" font-semibold flex items-center text-xs text-gray-400">
                SKILLS{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[20px]">MY SKILLS</h2>
            </div>

            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </MobileContainer>
        </div>
      </Mobile>
    </>
  );
}
