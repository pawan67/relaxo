import React from "react";

function Header() {
  return (
    <>
      <div className="pt-6 flex text-[#142D4C] justify-between items-center w-screen  font-poppins font-semibold  container lg mx-auto">
        <a href="https://relaxo.vercel.app/">
        <div className=" ml-10  font-bold   hover:shadow-2xl hover:cursor-pointer transition-all px-9 p-4 shadow-md rounded-2xl mt-5 inline-block bg-[#9FD3C7] text-xl ">
          Relaxo
        </div></a>
        <p className=" w-[550px] sm:hidden hidden lg:block   text-2xl  font-semibold text-center">
          Create your own mix of nature sounds & double your productivity
        </p>
        <a href="https://github.com/pawan67/relaxo">
          <div className=" mr-10 hover:shadow-2xl hover:cursor-pointer transition-all text-xl px-9 font-bold p-4 shadow-md rounded-2xl mt-5 inline-block bg-[#9FD3C7]">
            Github
          </div>
        </a>
      </div>
      <p className=" w-[270px] font-poppins text-[#142D4C]    text-2xl font-semibold text-center md:hidden mx-auto mt-14 mb-10">
        Create your own mix of nature sounds & double your productivity
      </p>
    </>
  );
}

export default Header;
