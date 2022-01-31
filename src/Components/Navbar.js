import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="px-2 lg:px-12 py-6">
        <ul className="flex gap-12 lg:justify-between">
          <li className="text-white font-Sacramento text-[3vh] lg:text-[5.5vh] ">
            Srm Hub
          </li>
          <li>
            <div className="flex gap-2 lg:gap-10 text-white font-Roboto text-[2vh] lg:text-[2.5vh]  ">
              <p className="hover:cursor-pointer hover:font-extrabold">Home</p>
              <p className="hover:cursor-pointer hover:font-extrabold">Notes</p>
              <p className="hover:cursor-pointer hover:font-extrabold">
                Restaurants
              </p>
              <p className="hover:cursor-pointer hover:font-extrabold">
                Contact Us
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
