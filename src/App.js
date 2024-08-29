import "./App.css";
import Container from "./components/Container.js";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoList,
} from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import MobileContainer from "./components/MobileContainer.js";
import Resume from "./pages/Resume.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";

export default function App() {
  const home = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const portfolio = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickToHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleClickToAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleClickToResume = () => {
    resume.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleClickToPortfolio = () => {
    portfolio.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleClickToContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleClickToInstagram = () => {
    window.open(
      "https://www.instagram.com/hilmystwnt?igsh=MThuNjIzcDVuc2I0ZA=="
    );
  };

  const handleClickToTwitter = () => {
    window.open("https://x.com/hilmy_stwnt?t=BXuPVqFHtXsUbEUfy5ZTfw&s=09");
  };

  const handleClickToLinkin = () => {
    window.open(
      "https://www.linkedin.com/in/muhammad-hilmy-947ba4283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  };

  const handleClickToGithub = () => {
    window.open("https://github.com/Mhilmy11");
  };

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
        <nav className=" bg-black fixed flex justify-center w-full py-2 z-10">
          <Container>
            <div className=" text-white flex justify-between w-full">
              <h1 className=" text-[30px] font-bold">Hilmy's CV</h1>
              <div className=" flex items-center gap-8 text-gray-500 text-lg">
                <button
                  onClick={handleClickToHome}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-400"
                >
                  Home
                </button>
                <button
                  onClick={handleClickToAbout}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-400"
                >
                  About
                </button>
                <button
                  onClick={handleClickToResume}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-400"
                >
                  Resume
                </button>
                <button
                  onClick={handleClickToPortfolio}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-400"
                >
                  Portfolio
                </button>
                <button
                  onClick={handleClickToContact}
                  className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-400"
                >
                  Contact
                </button>
              </div>
            </div>
          </Container>
        </nav>
      </LaptopOrDesktop>

      <Mobile>
        <nav className=" bg-black fixed flex justify-center w-full py-2 z-10">
          <MobileContainer>
            <div className=" text-white flex justify-between items-center">
              <h1 className=" text-[20px] font-bold">Hilmy's CV</h1>
              <div className="relative inline-block text-left">
                <button onClick={toggleDropdown} className=" flex items-center">
                  <IoList size={30} />
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-neutral-900 ring-1 ring-black ring-opacity-5">
                    <div className="">
                      <button
                        onClick={handleClickToHome}
                        className="block px-4 py-2 text-sm text-white active:bg-gray-800"
                      >
                        Home
                      </button>
                      <button
                        onClick={handleClickToAbout}
                        className="block px-4 py-2 text-sm text-white active:bg-gray-800"
                      >
                        About
                      </button>
                      <button
                        onClick={handleClickToResume}
                        className="block px-4 py-2 text-sm text-white active:bg-gray-800"
                      >
                        Resume
                      </button>
                      <button
                        onClick={handleClickToPortfolio}
                        className="block px-4 py-2 text-sm text-white active:bg-gray-800"
                      >
                        Portfolio
                      </button>
                      <button
                        onClick={handleClickToContact}
                        className="block px-4 py-2 text-sm text-white active:bg-gray-800"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </MobileContainer>
        </nav>
      </Mobile>

      <div>
        <section ref={home}>
          <Home
            handleClickToInstagram={handleClickToInstagram}
            handleClickToTwitter={handleClickToTwitter}
            handleClickToLinkin={handleClickToLinkin}
            handleClickToGithub={handleClickToGithub}
          />
        </section>

        <section ref={about}>
          <About />
        </section>

        <section ref={resume}>
          <Resume />
        </section>

        <section ref={portfolio}>
          <Portfolio />
        </section>

        <section ref={contact}>
          <Contact
            handleClickToInstagram={handleClickToInstagram}
            handleClickToTwitter={handleClickToTwitter}
            handleClickToLinkin={handleClickToLinkin}
            handleClickToGithub={handleClickToGithub}
          />
        </section>

        <LaptopOrDesktop>
          <footer className=" bg-neutral-900">
            <Container>
              <div className=" text-center text-white">
                <h1 className=" text-[30px] font-bold pt-8">Hilmy's CV</h1>
                <p className=" pt-4">
                  Always ready to{" "}
                  <span className=" text-green-400">
                    learn and create Innovative
                  </span>{" "}
                  technology solutions.
                </p>
                <div className=" text-white justify-center flex gap-2 pt-8">
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
                <div className=" bg-green-400 h-0.5 w-full mt-8"></div>
                <p className=" text-sm pt-6">
                  Copyright<span className=" font-bold px-2">Hilmy's CV</span>
                  All Right Reserved
                </p>
                <p className=" text-xs pt-2 pb-6">
                  Created by
                  <span className=" text-green-400 pl-2">
                    MuhammadHilmySetiawanto
                  </span>
                </p>
              </div>
            </Container>
          </footer>
        </LaptopOrDesktop>

        <Mobile>
          <footer className=" bg-neutral-900">
            <MobileContainer>
              <div className=" text-center text-white">
                <h1 className=" text-[20px] font-bold pt-8">Hilmy's CV</h1>
                <p className=" pt-2 text-xs">
                  Always ready to{" "}
                  <span className=" text-green-400">
                    learn and create Innovative
                  </span>{" "}
                  technology solutions.
                </p>
                <div className=" text-white justify-center flex gap-2 pt-4">
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
                <div className=" bg-green-400 h-0.5 w-full mt-8"></div>
                <p className=" text-[10px] pt-6">
                  Copyright<span className=" font-bold px-2">Hilmy's CV</span>
                  All Right Reserved
                </p>
                <p className=" text-[7px] pt-2 pb-6">
                  Created by
                  <span className=" text-green-400 pl-2">
                    MuhammadHilmySetiawanto
                  </span>
                </p>
              </div>
            </MobileContainer>
          </footer>
        </Mobile>
      </div>
    </>
  );
}
