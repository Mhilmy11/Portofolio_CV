import "./App.css";
import Container from "./components/Container.js";
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
import { useRef } from "react";
import Card from "./components/Card.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

export default function App() {
  const home = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const portfolio = useRef(null);

  const handleClickToHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToResume = () => {
    resume.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToPortfolio = () => {
    portfolio.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
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

  return (
    <>
      <nav className=" bg-black fixed flex justify-center w-full py-2">
        <div className=" text-white flex justify-between px-20 w-full">
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
      </nav>

      <div className=" bg-black w-full">
        <Container>
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

          <section ref={resume} className=" pt-[55px]">
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
          </section>

          <section ref={portfolio} className=" pt-[55px] h-screen">
            <div className=" text-white">
              <h1 className=" font-semibold flex items-center text-gray-400">
                PORTFOLIO
                <div className=" bg-green-500 w-24 h-[2px] ml-4 rounded-md"></div>
              </h1>
              <h2 className=" font-bold text-[35px]">
                CHECK OUT MY VARIOUS PORTFOLIOS
              </h2>
            </div>
            <Card></Card>
          </section>

          <section ref={contact} className="pt-[55px]">
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
                  <p className=" text-sm w-[350px]">
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
          </section>
        </Container>

        <footer className=" bg-neutral-900 mt-20 rounded-t-lg">
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
      </div>
    </>
  );
}
