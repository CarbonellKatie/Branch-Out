import "./MainScreen.css";

const MainScreen = ({ showMoodScreen, showTaskScreen }) => {
  return (
    <div id="main-screen">
      <div id="body">
        <img id="logo" src={require("./newlogo.png")} />
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
