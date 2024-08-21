import { AiOutlineClose } from "react-icons/ai";
import profilePicture from "../assets/images/profile-picture.jpg";

export default function About({ popUpAbout, setIsPopUpAbout }) {
  if (!popUpAbout) return null;
  return (
    <>
      <div className=" absolute flex items-center justify-center h-screen w-full">
        <div className=" bg-black w-[1200px] h-[600px] opacity-75"></div>
        <div className=" absolute w-[1200px] h-[600px]">
          <div className=" flex justify-end">
            <button
              onClick={() => setIsPopUpAbout(false)}
              className=" hover:bg-red-400 bg-red-600 p-1 rounded-full"
            >
              <AiOutlineClose size={20} color="white" />
            </button>
          </div>
          <div className=" px-8 text-white">
            <h1 className=" font-semibold flex items-center text-gray-400">
              ABOUT <div className=" bg-green-500 w-24 h-[2px] ml-4"></div>
            </h1>
            <h2 className=" font-bold text-[35px]">LEARN MORE ABOUT ME</h2>
          </div>
          <div className=" px-10 flex items-center">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
                provident! Facilis ipsam commodi voluptatibus ex?
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
                    <span>www.localhost.com</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-3 text-[20px]">
                      &#10148;
                    </span>
                    <span className=" font-semibold mr-3 text-lg">Phone:</span>
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
                    <span className=" font-semibold text-lg mr-2">Degree:</span>
                    <span>Junior</span>
                  </div>
                  <div>
                    <span className=" text-green-500 mr-3 text-[20px]">
                      &#10148;
                    </span>
                    <span className=" font-semibold text-lg mr-2">Email:</span>
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
                  ex, accusantium voluptatum similique eos, ad delectus rem sunt
                  rerum fugit culpa at explicabo eligendi, harum nemo. Ratione
                  odio ex laborum quos, perferendis aspernatur est. Perspiciatis
                  quisquam natus facilis velit delectus fuga, suscipit animi
                  odit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
