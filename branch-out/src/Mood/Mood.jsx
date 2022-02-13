import "./Mood.css";
import { useState } from "react";

const Mood = ({ showMainScreen, setMood }) => {
  // let currImage = "./MoodImages/calm.gif";
  const [state, setState] = useState({ currImage: "./MoodImages/calm.gif" });

  const changeImg = (e) => {
    // console.log(e.target.id);
    setState({ currImage: images[parseInt(e.target.id) - 1] });
    console.log("got here");
    console.log(e.target.id - 1);
    // currImage = images[parseInt(e.target.id) - 1];
    setMood(parseInt(e.target.id) - 1);
  };
  const images = [
    "./MoodImages/happy2.gif",
    "./MoodImages/calm2.gif",
    "./MoodImages/excited2.gif",
    "./MoodImages/angry2.gif",
    "./MoodImages/lonely2.gif",
    "./MoodImages/sad2.gif",
    "./MoodImages/socialible2.gif",
  ];

  return (
    <div id="mood-screen">
      <div id="body-mood">
        <button id="tasks" onClick={showMainScreen}>
          Back to Main
        </button>
        <img id="current-state" src={require(`${state.currImage}`)}></img>
        <div id="mood-of-the-day">
          <div id="options">
            <table id="options-table">
              <tbody>
                <tr>
                  <td>
                    <img
                      id="1"
                      onClick={(e) => changeImg(e)}
                      src={require("./MoodImages/happy2.gif")}
                    />
                  </td>
                  <td>
                    <img
                      id="2"
                      onClick={(e) => changeImg(e)}
                      src={require("./MoodImages/calm2.gif")}
                    />
                  </td>
                  <td>
                    <img
                      id="3"
                      onClick={(e) => changeImg(e)}
                      src={require("./MoodImages/excited2.gif")}
                    />
                  </td>
                  <td>
                    <img
                      id="4"
                      onClick={(e) => changeImg(e)}
                      src={require("./MoodImages/angry2.gif")}
                    />
                  </td>
                  <td>
                    <img
                      id="5"
                      onClick={(e) => changeImg(e)}
                      src={require("./MoodImages/lonely2.gif")}
                    />
                  </td>
                  <td>
                    <img
                      id="6"
                      onClick={(e) => changeImg(e)}
                      src={require("./MoodImages/sad2.gif")}
                    />
                  </td>
                  <td>
                    <img
                      id="7"
                      onClick={(e) => changeImg(e)}
                      src={require("./MoodImages/socialible2.gif")}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mood;
