//EDIT THIS
//pls work or ill cry
import { useState } from "react";
import MainScreen from "./MainScreen/MainScreen.jsx";
import Mood from "./Mood/Mood.jsx";

function App() {
  const [state, setState] = useState({
    loginVis: false,
    mainVis: true,
    moodVis: false,
    taskVis: false,
  });

  const showMoodScreen = () => {
    let obj = {
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
        />
      )}
      {state.moodVis && <Mood showMainScreen={showMainScreen} />}
    </div>
  );
}

// this is a test
export default App;
