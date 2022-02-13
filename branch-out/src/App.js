//EDIT THIS
//pls work or ill cry
import { useState } from "react";
import MainScreen from "./MainScreen/MainScreen.jsx";
import TaskScreen from "./TaskScreen/TaskScreen.jsx";
import Mood from "./Mood/Mood.jsx";

function App() {
  const [state, setState] = useState({
    loginVis: false,
    mainVis: true,
    moodVis: false,
    taskVis: false,
    currMood: 3,
  });

  const setMood = (mood) => {
    const obj = { ...state, currMood: mood };
    console.log(mood);
    setState(obj);
  };
  const showMoodScreen = () => {
    let obj = {
      ...state,
      loginVis: false,
      mainVis: false,
      taskVis: false,
      moodVis: true,
    };
    console.log("clicked mood button");
    setState(obj);
  };

  const showTaskScreen = () => {
    let obj = {
      ...state,
      loginVis: false,
      mainVis: false,
      taskVis: true,
      moodVis: false,
    };
    console.log("clicked task screen");
    setState(obj);
  };

  const showMainScreen = () => {
    let obj = {
      ...state,
      loginVis: false,
      mainVis: true,
      taskVis: false,
      moodVis: false,
    };
    setState(obj);
  };

  return (
    <div className="App">
      {state.mainVis && (
        <MainScreen
          showMoodScreen={showMoodScreen}
          showTaskScreen={showTaskScreen}
          currMood={state.currMood}
        />
      )}
      {state.moodVis && (
        <Mood showMainScreen={showMainScreen} setMood={setMood} />
      )}
      {state.taskVis && <TaskScreen showMainScreen={showMainScreen} />}
    </div>
  );
}

// this is a test
export default App;
