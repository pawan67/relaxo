import React, { useRef, useState } from "react";

function Boxes({ name, image, audioPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioEL = useRef(null);
  const playPause = () => {
    audioEL.current.play();
    setIsPlaying(true);
    if (isPlaying) {
      audioEL.current.pause();
      setIsPlaying(false);
    }
  };
  if (isPlaying) {
    return (
      <div
        onClick={playPause}
        className={`shadow-sm shadow-2xl cursor-pointer w-32 sm:w-40 md:w-48 aspect-square  m-4 bg-[#9FD3C7]  rounded-2xl`}
      >
        <p className=" font-poppins mt-3 ml-3 sm:m-3 sm:text-base text-sm">
          {name}
        </p>
        <img className=" aspect-square w-2/4 mx-auto" src={image} alt={name} />

        <audio loop ref={audioEL} src={audioPlay}></audio>
      </div>
    );
  } else {
    return (
      <div
        onClick={playPause}
        className={`shadow-sm hover:shadow-2xl cursor-pointer w-32 sm:w-40 md:w-48 aspect-square  m-4 bg-[#C4C4C4]  rounded-2xl`}
      >
        <p className=" font-poppins mt-3 ml-3 sm:m-3 sm:text-base text-sm">
          {name}
        </p>
        <img className=" aspect-square w-2/4 mx-auto" src={image} alt={name} />

        <audio ref={audioEL} src={audioPlay}></audio>
      </div>
    );
  }
}

export default Boxes;
