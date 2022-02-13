import "./TaskScreen.css";

var tallier = 0;

function tallyUp(e) {
  console.log(e.target.checked);
  if (e.target.checked) {
    tallier++;
  } else {
    tallier--;
  }
  sessionStorage.setItem("tally", tallier);

  if ("Go to the gym".checked) {
    tallier = "Go to the gym".value + tallier;
  } else if ("talk to someone you don't know".checked) {
    tallier = "talk to someone you don't know".value + tallier;
  } else if ("Social event".checked) {
    tallier = "social event".value + tallier;
  }
  if (tallier < 5) {
  } else if (tallier == 5) {
  } else if (tallier == 10) {
  } else if (tallier == 15) {
  } else if (tallier == 20) {
  } else if (tallier == 25) {
  }
}

const TaskScreen = ({ showMainScreen }) => {
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
