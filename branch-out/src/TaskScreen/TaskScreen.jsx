import "./TaskScreen.css";
import { useState, useEffect } from "react";

var tallier = 0;
const TaskScreen = ({ showMainScreenTally }) => {
  useEffect(() => {
    sessionStorage.setItem("tally", 0);
  }, []);

  const tallyUp = (e) => {
    console.log(e.target.checked);
    tallier = sessionStorage.getItem("tally")
      ? sessionStorage.getItem("tally")
      : 0;
    if (e.target.checked) {
      tallier++;
      sessionStorage.setItem("tally", tallier);
    } else {
      tallier--;
      sessionStorage.setItem("tally", tallier);
    }
  };

  return (
    <div id="main-screen">
      <button id="tasks" onClick={showMainScreenTally}>
        Back to Main
      </button>
      <div id="body-task-screen">
        <table id="task-table">
          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onClick={tallyUp}
                  className="box"
                  name="Go to the gym"
                  value={5}
                ></input>
              </td>
              <td>Go to the gym</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onClick={(e) => tallyUp(e)}
                  className="box"
                  name="Talk to someone you don't know"
                  value={5}
                ></input>
              </td>
              <td>Talk to someone you don't know</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onClick={tallyUp}
                  className="box"
                  name="Social event"
                  value={5}
                ></input>
              </td>
              <td>Go to a Hackathon</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onClick={tallyUp}
                  className="box"
                  name="Go on a walk"
                  value={5}
                ></input>
              </td>
              <td>Go on a walk</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onClick={tallyUp}
                  className="box"
                  name="Call your granny"
                  value={5}
                ></input>
              </td>
              <td>Call your granny</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskScreen;
