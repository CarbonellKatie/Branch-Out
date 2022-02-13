import "./MainScreen.css";
import Mood from "../Mood/Mood.jsx";
import { useEffect } from "react";
import q4 from "./backgrounds/q4.gif";
import q1 from "./backgrounds/q1.gif";
import q2 from "./backgrounds/q2.gif";
import q3 from "./backgrounds/q3.gif";
import q5 from "./backgrounds/q5.gif";

const MainScreen = ({ showMoodScreen, showTaskScreen, currMood, tally }) => {
  const imagesMain = [
    "./MoodImages/happy.gif",
    "./MoodImages/calm.gif",
    "./MoodImages/excited.gif",
    "./MoodImages/angry.gif",
    "./MoodImages/lonely.gif",
    "./MoodImages/sad.gif",
    "./MoodImages/Socialibe.gif",
  ];
  var bg = q1;
  if (tally == 1) {
    bg = q1;
  } else if (tally == 2) {
    bg = q2;
  } else if (tally == 3) {
    bg = q3;
  } else if (tally == 4) {
    bg = q4;
  } else if (tally == 5) {
    bg = q5;
  }

  var sectionStyle = {
    width: "100vw",
    height: "100vh",
    backgrounSize: "100% 100%",
    backgroundImage: `url(${bg})`,
  };

  // useEffect(() => {
  //   document.querySelector("#body").style.background =
  //     "url('./backgrounds/q1.gif')";
  //   document.querySelector("#body").style.backgroundSize = "100% 100%";
  //   console.log("background change");
  // }, []);

  return (
    <div id="main-screen">
      <div id="body" style={sectionStyle}>
        <img id="logo" src={require("./logo.png")}></img>
        <div id="tally">{tally}</div>
        {/* <img id="current-state" src={require(`${currMood}`)} /> */}
        <img id="current-state" src={require(`${imagesMain[currMood]}`)}></img>
        <button id="tasks" onClick={showTaskScreen}>
          Tasks
        </button>
        <button id="mood" onClick={showMoodScreen}>
          Mood
        </button>
      </div>
    </div>
  );
};
export default MainScreen;
