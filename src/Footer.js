import React from "react";
import { BsHeartFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
function Footer() {
  return (
    <div className=" bg-[#000000]   w-screen  mt-32">
      <a href="https://www.buymeacoffee.com/pawan.67"></a>
      <div className="container font-poppins text-xl   text-center mx-auto p-10 text-[#F0F5F9]">
        <p className=" font-poppins text-lg  inline">
          Made with &nbsp;
          <BsHeartFill className="inline text-red-600" /> by{" "}
          <a
            href="https://github.com/pawan67"
            className=" underline decoration-indigo-400"
          >
            @pawan67
          </a>
        </p>
        <p className="mt-3 text-lg sm:inline sm:ml-5 ">
          Follow me &nbsp;
          <a href="https://www.linkedin.com/in/pawan-tamada-abb073199/">
            <AiFillLinkedin className="inline text-2xl ml-4" />
          </a>
          <a href="https://github.com/pawan67">
            <AiOutlineGithub className="inline text-2xl ml-4" />
          </a>
          <a href="https://twitter.com/Pawantamada21">
            <AiFillTwitterCircle className="inline text-2xl ml-4" />
          </a>
        </p>
        <a href="https://www.buymeacoffee.com/pawan.67">
          <img
            className=" rounded-2xl inline ml-5 mt-5 mx-auto w-36 h-full"
            src="images/buymecofee.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
