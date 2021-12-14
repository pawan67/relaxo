import React, { useRef, useState } from "react";

import "./App.css";
import Boxes from "./Boxes";
import Footer from "./Footer";
import Header from "./Header";
//BsFillLightbulbFill
import {  BsFillLightbulbFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function setDarkMode() {
    var root = document.getElementsByTagName("html")[0];
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }
  let toggleBtn = "";
  if(isDarkMode) {
    toggleBtn = <BsFillLightbulbFill />;
  }
  else{
    toggleBtn = <MdDarkMode/>;
  }

  return (
    <div className="box-border overflow-x-hidden dark:bg-[#1b1b1b] transition-all  bg-[#E5E5E5] ">
      <Header />

      <div className=" container mx-auto flex flex-wrap items-center justify-center mt-15 md:mt-28">
        <Boxes
          name="Lightning"
          image="images/flash.png"
          audioPlay="music/lightning.mp3"
        />
        <Boxes
          name="Train"
          image="images/underground.png"
          audioPlay="https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/train160.mp3"
        />
        <Boxes
          name="Birds"
          image="images/birds.png"
          audioPlay="music/birds.mp3"
        />
        <Boxes
          name="Wave"
          image="images/wave.png"
          audioPlay="music/ocean.mp3"
        />
        <Boxes
          name="Campfire"
          image="images/campfire.png"
          audioPlay="music/campfire.mp3"
        />
        <Boxes
          name="Rowing"
          image="images/canoe.png"
          audioPlay="music/rowing.mp3"
        />
        <Boxes
          name="Clock"
          image="images/clock.png"
          audioPlay="music/clock.mp3"
        />
        <Boxes
          name="Keyboard"
          image="images/electric-keyboard.png"
          audioPlay="music/keyboard.mp3"
        />
        <Boxes name="Farm" image="images/farm.png" audioPlay="music/farm.mp3" />

        <Boxes
          name="Steps"
          image="images/footsteps-silhouette-variant.png"
          audioPlay="music/steps.mp3"
        />
        <Boxes
          name="Leaves"
          image="images/leaves.png"
          audioPlay="music/leaves.mp3"
        />
        <Boxes
          name="Night"
          image="images/night-mode.png"
          audioPlay="music/night.mp3"
        />
        <Boxes name="Rain" image="images/rain.png" audioPlay="music/rain.mp3" />
        <Boxes
          name="Snowfall"
          image="images/snowfall.png"
          audioPlay="music/snow.mp3"
        />

        <Boxes name="Wind" image="images/wind.png" audioPlay="music/wind.mp3" />
        <Boxes
          name="Office"
          image="images/work.png"
          audioPlay="music/office.mp3"
        />
        <Boxes
          name="Stadium"
          image="images/sports.png"
          audioPlay="music/stadium.mp3"
        />
        <Boxes
          name="Fan"
          image="images/extractor.png"
          audioPlay="https://e8b8e3q2.ssl.hwcdn.net/sounds/objects/fan-two160.mp3"
        />
        <Boxes
          name="Library"
          image="images/book.png"
          audioPlay="https://e8b8e3q2.ssl.hwcdn.net/sounds/people/delft-library160.mp3"
        />
        <Boxes
          name="Road"
          image="images/road.png"
          audioPlay="https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/highway160.mp3"
        />
        <Boxes
          name="Windchime"
          image="images/sound.png"
          audioPlay="https://e8b8e3q2.ssl.hwcdn.net/sounds/windchime160.mp3"
        />
        <Boxes
          name="Cafe"
          image="images/coffee-shop.png"
          audioPlay="music/cafe.mp3"
        />
      </div>
      <Footer />
    
      <div
        onClick={setDarkMode}
        className={` bg-[#fff]  fixed bottom-6 sm:right-10 sm:bottom-10 shadow-xl right-6 px-4 py-4 rounded-2xl transition-all   `}
      >
     
        {toggleBtn}
      </div>
    </div>
  );
}

export default App;
