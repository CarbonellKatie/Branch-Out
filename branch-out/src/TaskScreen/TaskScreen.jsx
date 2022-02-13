import "./TaskScreen.css";

const TaskScreen = () => {
  return (
    <div id="main-screen">
      <div id="body-task-screen">
        <table id="task-table">
          <tbody>
            <tr>
              <input type = "checkbox" id = "Go to the gym" name = "Go to the gym"></input>
              <td>Go to the gym</td>
              {/* <label for = "Go to the gym">Go to the gym</label> */}
              {/* <td>Go To Gym</td> */}
            </tr>
            <tr> 
              <td>
            <input type = "checkbox" id = "Talk to someone you don't know" name = "Talk to someone you don't know"></input>
            </td>
              <td>Talk to someone you don't know</td>
            </tr>
            <tr>
            <input type = "checkbox" id = "social event" name = "social event"></input>
            <td>Go to a social event</td>
              {/* <label for = "social event">Go to a social event</label> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskScreen;
