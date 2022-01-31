import React from "react";
import town from "../Assets/Img/town.svg";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-[14vw] text-white mt-12 lg:m-12 lg:p-12 place-items-center ">
        <div>
          <img src={town} alt="town" />
        </div>

        <div className="flex flex-col gap-4  lg:gap-8 font-Montserrat">
          <div>
            <p className="font-extrabold text-[6vh] lg:text-[8vh]">
              Welcome To
            </p>
            <p className="font-semibold text-violet-700 text-[4vh] lg:text-[5vh]">
              SRM HUB
            </p>
          </div>
          <div>
            <p className="text-[2vh] lg:text-[2.5vh]  lg:w-[90%] ">
              Find the best notes and restaurant reviews
            </p>
          </div>
          <div className="flex gap-8 pt-10">
            <button className="text-[2vh] lg:text-[2.5vh] text-black bg-violet-700 font-extrabold lg:w-[8vw] px-4 py-2  lg:p-2 rounded-md cursor-pointer">
              Notes
            </button>
            <button className="text-[2vh] lg:text-[2.5vh] text-black bg-zinc-500 font-extrabold lg:w-[8vw] px-4 py-2 lg:p-2 rounded-md cursor-pointer">
              Restaurant
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
