import "./Mood.css";
const Mood = ({ showMainScreen }) => {
  return (
    <div id="mood-screen">
      <div id="body-mood">
        <button id="tasks" onClick={showMainScreen}>
          Back to Main
        </button>
        <img id="current-state" src={require("./MoodImages/calm.gif")} />
        <div id="mood-of-the-day">
          <div id="options">
            <table id="options-table">
              <tbody>
                <tr>
                  <td>
                    <img id="img" src={require("./poof.gif")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/calm.gif")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/excited.gif")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/angry.gif")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/lonely.gif")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/sad.gif")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/Socialibe.gif")} />
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
