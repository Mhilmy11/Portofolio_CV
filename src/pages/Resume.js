import { useMediaQuery } from "react-responsive";
import Container from "../components/Container";
import MobileContainer from "../components/MobileContainer";

export default function Resume() {
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
            <div className=" text-white">
              <h1 className=" font-semibold flex items-center text-gray-400">
                RESUME{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[35px]">CHECK MY RESUME</h2>
            </div>

            <div className=" text-white flex">
              <div>
                <div>
                  <h2 className=" text-[25px] font-semibold w-[520px]">
                    Education
                  </h2>
                  <div className=" flex pt-3">
                    <div>
                      <div className=" bg-green-400 rounded-full w-5 h-5 flex justify-center mt-1 mr-3">
                        <div className=" bg-green-400 w-0.5 h-20"></div>
                      </div>
                      <div className=" bg-green-400 rounded-full w-5 h-5 flex justify-center mt-10 mr-3">
                        <div className=" bg-green-400 w-0.5 h-12"></div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className=" font-semibold">SMAN 4 Depok</p>
                        <p>2018 - 2021</p>
                      </div>
                      <div className=" mt-4">
                        <p className=" font-semibold">
                          Universitas Mercu Buana
                        </p>
                        <p>Information Technology (S1) 2021 - Present</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className=" text-[25px] font-semibold w-[520px]">
                  Experience
                </h2>
                <div className=" flex pt-3">
                  <div>
                    <div className=" bg-green-400 rounded-full w-5 h-5 flex justify-center mt-1 mr-3">
                      <div className=" bg-green-400 w-0.5 h-[405px]"></div>
                    </div>
                    <div className=" bg-green-400 rounded-full w-5 h-5 flex justify-center mt-[383px] mr-3">
                      <div className=" bg-green-400 w-0.5 h-[235px]"></div>
                    </div>
                    <div className=" bg-green-400 rounded-full w-5 h-5 flex justify-center mt-[215px] mr-3">
                      <div className=" bg-green-400 w-0.5 h-12"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className=" font-semibold">
                        PT. MAKUI TEKNOLOGI INDONESIA
                      </p>
                      <p>Web Developer (November 2021 - April 2023)</p>
                      <li>
                        Perform regular web maintenance/ensure that there are no
                        bugs in the web
                      </li>
                      <li>
                        Designing the basic idea of ​the website/application
                        appearance together with the UX designer
                      </li>
                      <li>
                        Ensure that the appearance of the designed program
                        complies with the technical design of UI/UX.
                      </li>
                      <li>
                        Manage the speed of the website/application so that it
                        can run optimally
                      </li>
                      <li>
                        Implementing visual elements of a site or application
                        that have been previously designed by a UI designer
                      </li>
                      <li>
                        Using responsive design in creating user interfaces for
                        websites or applications
                      </li>
                      <li>
                        Testing the site or application functionally together
                        with other developer teams
                      </li>
                    </div>
                    <div className=" pt-5">
                      <p className=" font-semibold">PT. RA CONSULTING GROUP</p>
                      <p>FrontEnd Developer (August 2023 - April 2024)</p>
                      <li>
                        perform hosting migration and office email migration
                      </li>
                      <li>
                        sparked to redesign the landing page and change the
                        programming language
                      </li>
                      <li>
                        Perform regular web maintenance/ensure that there are no
                        bugs in the web
                      </li>
                      <li>
                        Resolve bugs in office email when there are problems
                        when sending or receiving
                      </li>
                    </div>
                    <div className=" pt-5">
                      <p className=" font-semibold">
                        PT. ENAKANS MEDIA TEKNOLOGI
                      </p>
                      <p>Business Analyst (May 2024 - Present)</p>
                    </div>
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
            <div className=" text-white">
              <h1 className=" font-semibold flex text-xs items-center text-gray-400">
                RESUME{" "}
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[20px]">CHECK MY RESUME</h2>
            </div>

            <div>
              <div className=" text-white">
                <h2 className=" text-[15px] font-semibold">Education</h2>
                <div className=" flex">
                  <div>
                    <div className=" bg-green-400 rounded-full w-3 h-3 flex justify-center mt-0.5 mr-1">
                      <div className=" bg-green-400 w-0.5 h-12"></div>
                    </div>
                    <div className=" bg-green-400 rounded-full w-3 h-3 flex justify-center mt-7 mr-1">
                      <div className=" bg-green-400 w-0.5 h-7"></div>
                    </div>
                  </div>
                  <div className=" text-xs">
                    <div>
                      <p className=" font-semibold">SMAN 4 Depok</p>
                      <p>2018 - 2021</p>
                    </div>
                    <div className=" mt-2">
                      <p className=" font-semibold">Universitas Mercu Buana</p>
                      <p>Information Technology (S1) 2021 - Present</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-white py-4">
                <h2 className=" text-[15px] font-semibold">Experience</h2>
                <div className=" flex">
                  <div>
                    <div className=" bg-green-400 rounded-full w-3 h-3 flex justify-center mt-0.5 mr-1">
                      <div className=" bg-green-400 w-0.5 h-[277px]"></div>
                    </div>
                    <div className=" bg-green-400 rounded-full w-3 h-3 flex justify-center mt-[265px] mr-1">
                      <div className=" bg-green-400 w-0.5 h-[180px]"></div>
                    </div>
                    <div className=" bg-green-400 rounded-full w-3 h-3 flex justify-center mt-[156px] mr-1">
                      <div className=" bg-green-400 w-0.5 h-10"></div>
                    </div>
                  </div>
                  <div>
                    <div className=" text-xs">
                      <p className=" font-semibold">
                        PT. MAKUI TEKNOLOGI INDONESIA
                      </p>
                      <p>Web Developer (November 2021 - April 2023)</p>
                      <li>
                        Perform regular web maintenance/ensure that there are no
                        bugs in the web
                      </li>
                      <li>
                        Designing the basic idea of ​the website/application
                        appearance together with the UX designer
                      </li>
                      <li>
                        Ensure that the appearance of the designed program
                        complies with the technical design of UI/UX.
                      </li>
                      <li>
                        Manage the speed of the website/application so that it
                        can run optimally
                      </li>
                      <li>
                        Implementing visual elements of a site or application
                        that have been previously designed by a UI designer
                      </li>
                      <li>
                        Using responsive design in creating user interfaces for
                        websites or applications
                      </li>
                      <li>
                        Testing the site or application functionally together
                        with other developer teams
                      </li>
                    </div>
                    <div className=" pt-5 text-xs">
                      <p className=" font-semibold">PT. RA CONSULTING GROUP</p>
                      <p>FrontEnd Developer (August 2023 - April 2024)</p>
                      <li>
                        perform hosting migration and office email migration
                      </li>
                      <li>
                        sparked to redesign the landing page and change the
                        programming language
                      </li>
                      <li>
                        Perform regular web maintenance/ensure that there are no
                        bugs in the web
                      </li>
                      <li>
                        Resolve bugs in office email when there are problems
                        when sending or receiving
                      </li>
                    </div>
                    <div className=" pt-5">
                      <p className=" font-semibold">
                        PT. ENAKANS MEDIA TEKNOLOGI
                      </p>
                      <p>Business Analyst (May 2024 - Present)</p>
                    </div>
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
