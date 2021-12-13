import "./App.css";
import Boxes from "./Boxes";
import Footer from "./Footer";
import Header from "./Header";
function App() {
  return (
    <div className="box-border overflow-x-hidden bg-[#E5E5E5] ">
      <Header />

      <div className=" container mx-auto flex flex-wrap items-center justify-center mt-15 md:mt-28">
        <Boxes
          name="Birds"
          image="images/birds.png"
          audioPlay="music/birds.mp3"
        />
        <Boxes
          name="Cafe"
          image="images/coffee-shop.png"
          audioPlay="music/cafe.mp3"
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
          name="Lightning"
          image="images/flash.png"
          audioPlay="music/lightning.mp3"
        />
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
        <Boxes
          name="Wave"
          image="images/wave.png"
          audioPlay="music/ocean.mp3"
        />
        <Boxes name="Wind" image="images/wind.png" audioPlay="music/wind.mp3" />
        <Boxes
          name="Office"
          image="images/work.png"
          audioPlay="music/office.mp3"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
