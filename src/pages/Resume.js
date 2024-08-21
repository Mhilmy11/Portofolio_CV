import { AiOutlineClose } from "react-icons/ai";

export default function Resume({ setIsPopUpResume, popUpResume }) {
  if (!popUpResume) return null;
  return (
    <>
      <div className=" absolute flex items-center justify-center h-screen w-full">
        <div className=" bg-black w-[1200px] h-[600px] opacity-75"></div>
        <div className=" absolute w-[1200px] h-[600px]">
          <div className=" flex justify-end">
            <button
              onClick={() => setIsPopUpResume(false)}
              className=" hover:bg-red-400 bg-red-600 p-1 rounded-full"
            >
              <AiOutlineClose size={20} color="white" />
            </button>
          </div>
          <div className=" px-8 text-white">
            <h1 className=" font-semibold flex items-center text-gray-400">
              RESUME <div className=" bg-green-500 w-24 h-[2px] ml-4"></div>
            </h1>
            <h2 className=" font-bold text-[35px]">CHECK MY RESUME</h2>
          </div>
          <div className=" px-8 text-white flex">
            <div>
              <h2>Sumary</h2>
            </div>
            <div>
              <h2>Professional Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
