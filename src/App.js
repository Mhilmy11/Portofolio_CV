import "./App.css";
import Container from "./components/Container.js";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";
import profilePicture from "./assets/images/profile-picture.jpg";
import { useRef } from "react";

export default function App() {
  const home = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  // const contact = useRef(null);

  const handleClickToHome = () => {
    home.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToResume = () => {
    resume.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleClickToContact = () => {
  //   contact.current?.scrollIntoView({ behavior: "smooth" });
  // };

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
        <Container>
          <div className=" text-white flex justify-between">
            <h1 className=" text-[30px] font-bold">Personal CV</h1>
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
              <button className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-400">
                Contact
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <div className=" bg-black w-full">
        <Container>
          <div ref={home} className=" flex items-center h-screen w-full">
            <div className=" grid grid-rows-4">
              <div>
                <h1 className=" text-white font-bold text-[40px]">
                  Muhammad Hilmy Setiawanto
                </h1>
              </div>

              <div>
                <h2 className=" text-white text-2xl">
                  Lorem ipsum Lorem, ipsum dolor
                  <span className=" text-green-400"> tesingsd</span> sit amet.
                </h2>
              </div>

              <div className=" text-white flex gap-2">
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
          </div>

          <section ref={about} className=" pt-10">
            <div className=" text-white pb-4">
              <h1 className=" font-semibold flex items-center text-gray-400">
                ABOUT <div className=" bg-green-500 w-24 h-[2px] ml-4"></div>
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
                <p className=" my-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum, provident! Facilis ipsam commodi voluptatibus ex?
                </p>
                <div className=" flex gap-24 mb-4">
                  <div>
                    <div>
                      <span className=" text-green-500 mr-3 text-[20px]">
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis illum beatae facilis corrupti voluptatibus quaerat
                    ex, accusantium voluptatum similique eos, ad delectus rem
                    sunt rerum fugit culpa at explicabo eligendi, harum nemo.
                    Ratione odio ex laborum quos, perferendis aspernatur est.
                    Perspiciatis quisquam natus facilis velit delectus fuga,
                    suscipit animi odit?
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section ref={resume} className=" pt-10">
            <div className=" text-white">
              <h1 className=" font-semibold flex items-center text-gray-400">
                RESUME <div className=" bg-green-500 w-24 h-[2px] ml-4"></div>
              </h1>
              <h2 className=" font-bold text-[35px]">CHECK MY RESUME</h2>
            </div>
            <div className=" text-white flex">
              <div>
                <div>
                  <h2 className=" text-[25px] font-bold w-[520px]">Sumary</h2>
                </div>

                <div>
                  <h2 className=" text-[25px] font-bold w-[520px]">
                    Education
                  </h2>
                  <p>asdasdasd</p>
                </div>
              </div>
              <div>
                <h2 className=" text-[25px] font-bold w-[520px]">
                  Professional Experience
                </h2>
              </div>
            </div>
          </section>
        </Container>

        <footer className=" bg-neutral-900 mt-10">
          <Container>
            <div className=" text-center text-white">
              <h1 className=" text-[30px] font-bold pt-8">Personal CV</h1>
              <p className=" pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, repellendus!
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
                Copyright<span className=" font-bold px-2">Personal CV</span>All
                Right Reserved
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
