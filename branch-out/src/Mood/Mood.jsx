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
          <table id="mood-table">
            <tbody>
              <tr>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
                <td>
                  <img scr=""></img>
                </td>
              </tr>
            </tbody>
          </table>

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
                    <img id="img" src={require("./MoodImages/Excited.png")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/angry.gif")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/Lonely.png")} />
                  </td>
                  <td>
                    <img id="img" src={require("./MoodImages/sad.gif")} />
                  </td>
                  <td>
                    <img
                      id="img"
                      src={require("./MoodImages/Socialible.png")}
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
