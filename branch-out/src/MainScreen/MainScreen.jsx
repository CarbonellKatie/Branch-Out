import "./MainScreen.css";
import Mood from "../Mood/Mood.jsx";
import { useEffect } from "react";

const MainScreen = ({ showMoodScreen, showTaskScreen, currMood }) => {
  const imagesMain = [
    "./MoodImages/happy.gif",
    "./MoodImages/calm.gif",
    "./MoodImages/excited.gif",
    "./MoodImages/angry.gif",
    "./MoodImages/lonely.gif",
    "./MoodImages/sad.gif",
    "./MoodImages/Socialibe.gif",
  ];

  return (
    <div id="main-screen">
      <div id="body">
        <img id="logo" src={require("./logo.png")}></img>
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
