import React from "react";
import { FaLink } from "react-icons/fa";
import ayraMassage from "../assets/images/WhatsApp Image 2024-08-27 at 15.30.47_6633fc5a.jpg";
import paeko from "../assets/images/5946hXBJK6DhLXwwfsyON9TIXCwOOgQDrDBi1p9d.png";
import rac from "../assets/images/rac_logo.png";
import { useMediaQuery } from "react-responsive";

export default function Card() {
  const handleClickToAyraMassage = () => {
    window.open("https://ayra-massage.netlify.app/");
  };

  const handleClickToPaekoId = () => {
    window.open("https://www.paeko.id/");
  };

  const handleClickToRaConsulting = () => {
    window.open("https://rac.co.id/");
  };

  const LaptopOrDesktop = ({ children }) => {
    const isLaptopOrDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1440 });
    return isLaptopOrDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 765 });
    return isMobile ? children : null;
  };

  return (
    <>
      <LaptopOrDesktop>
        <div className=" flex gap-4 justify-center pt-8">
          <div className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src={ayraMassage}
              alt="ayra-massage"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-20 backdrop-blur-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <h2 className="text-xl font-semibold">Ayra Massage</h2>
              <p className="text-sm text-gray-500">Portfolio 1</p>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <button onClick={handleClickToAyraMassage}>
                <FaLink className="text-xl text-gray-600 cursor-pointer hover:text-black" />
              </button>
            </div>
          </div>

          <div className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src={paeko}
              alt="paeko-id"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-20 backdrop-blur-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <h2 className="text-xl font-semibold">PaEko.ID</h2>
              <p className="text-sm text-gray-500">Portfolio 2</p>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <button onClick={handleClickToPaekoId}>
                <FaLink className="text-xl text-gray-600 cursor-pointer hover:text-black" />
              </button>
            </div>
          </div>

          <div className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src={rac}
              alt="ra-consulting"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-20 backdrop-blur-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <h2 className="text-xl font-semibold">RA Consulting</h2>
              <p className="text-sm text-gray-500">Portfolio 3</p>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <button onClick={handleClickToRaConsulting}>
                <FaLink className="text-xl text-gray-600 cursor-pointer hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      </LaptopOrDesktop>

      <Mobile>
        <div className=" flex justify-center pt-2">
          <div className=" grid grid-rows-3 gap-4">
            <button
              onClick={handleClickToAyraMassage}
              className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={ayraMassage}
                alt="ayra-massage"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-20 backdrop-blur-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">Ayra Massage</h2>
                <p className="text-sm text-gray-500">Portfolio 1</p>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <button onClick={handleClickToAyraMassage}>
                  <FaLink className="text-xl text-gray-600 cursor-pointer hover:text-black" />
                </button>
              </div>
            </button>

            <button
              onClick={handleClickToPaekoId}
              className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={paeko}
                alt="paeko-id"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-20 backdrop-blur-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">PaEko.ID</h2>
                <p className="text-sm text-gray-500">Portfolio 2</p>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <button onClick={handleClickToPaekoId}>
                  <FaLink className="text-xl text-gray-600 cursor-pointer hover:text-black" />
                </button>
              </div>
            </button>

            <button
              onClick={handleClickToRaConsulting}
              className="relative group w-80 h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={rac}
                alt="ra-consulting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-20 backdrop-blur-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">RA Consulting</h2>
                <p className="text-sm text-gray-500">Portfolio 3</p>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <button onClick={handleClickToRaConsulting}>
                  <FaLink className="text-xl text-gray-600 cursor-pointer hover:text-black" />
                </button>
              </div>
            </button>
          </div>
        </div>
      </Mobile>
    </>
  );
}
