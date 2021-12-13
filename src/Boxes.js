import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
function Boxes({ name, image, audioPlay }) {
  const [value, setValue] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    audioEL.current.volume = value;
    console.log(value);
  };

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
      <div className="flex flex-col items-center">
        <div
          onClick={playPause}
          className={` shadow-2xl cursor-pointer w-32 sm:w-40 md:w-48 aspect-square  m-4 bg-[#9FD3C7]  rounded-2xl`}
        >
          <p className=" font-poppins mt-3 ml-3 sm:m-3 sm:text-base text-sm">
            {name}
          </p>
          <img
            className=" aspect-square w-2/4 mx-auto"
            src={image}
            alt={name}
          />
        </div>
        <Box sx={{ width: 170 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider min={0} max={1} step={0.05} color="secondary" aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
          </Stack>
        </Box>
        
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
