import "./TaskScreen.css";
import { useState } from "react";

const TaskScreen = ({ showMainScreen }) => {
  const [input, setState] = useState("");
  const addRow = () => {
    const input = document.querySelector("#usertext");
    console.log(input);
    const row = document.createElement("tr");
    row.innerHTML = input;
    document.querySelector("#task-table").appendChild(row);
  };

  return (
    <div id="main-screen">
      <button id="tasks" onClick={showMainScreen}>
        Back to Main
      </button>
      <div id="body-task-screen">
        <table id="task-table">
          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  id="Go to the gym"
                  name="Go to the gym"
                ></input>
              </td>
              <td>Go to the gym</td>
              {/* <label for = "Go to the gym">Go to the gym</label> */}
              {/* <td>Go To Gym</td> */}
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  id="Talk to someone you don't know"
                  name="Talk to someone you don't know"
                ></input>
              </td>
              <td>Talk to someone you don't know</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  id="social event"
                  name="social event"
                ></input>
              </td>
              <td>Go to a social event</td>
              {/* <label for = "social event">Go to a social event</label> */}
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input id="usertext" type="text" />
                <button onClick={addRow}>Add row</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskScreen;
