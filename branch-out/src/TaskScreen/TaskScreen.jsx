import "./TaskScreen.css";

function tallyUp() {
  var tallier = 0;
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

  // var checkbox = document.querySelector("input [type = 'checkbox']");
  // checkbox.addEventListener("change",function(){
  //   this.value = this.checked ? 1 : 0;
  // });
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
              <input
                type="checkbox"
                id="Go to the gym"
                name="Go to the gym"
                value={5}
              ></input>
              <td>Go to the gym</td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  id="Talk to someone you don't know"
                  name="Talk to someone you don't know"
                  value={5}
                ></input>
              </td>
              <td>Talk to someone you don't know</td>
            </tr>
            <tr>
              <input
                type="checkbox"
                id="social event"
                name="Social event"
                value={5}
              ></input>
              <td>Go to a Hackathon</td>
            </tr>
            <tr>
              <input
                type="checkbox"
                id="go on a walk"
                name="Go on a walk"
                value={5}
              ></input>
              <td>Go on a walk</td>
            </tr>
            <tr>
              <input
                type="checkbox"
                id="call your granny"
                name="Call your granny"
                value={5}
              ></input>
              <td>Call your granny</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskScreen;
