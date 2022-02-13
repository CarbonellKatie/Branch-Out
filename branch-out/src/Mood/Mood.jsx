import "./Mood.css";
const Mood = ({ showMainScreen }) => {
  return (
    <div id="mood-screen">
      <div id="body-mood">
        <button id="tasks" onClick={showMainScreen}>
          Back to Main
        </button>
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
                    <button id="happy">
                      Mood 1<img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="sad">
                      Mood 2<img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="excited">
                      Mood 3<img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="angry">
                      Mood 4<img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="lonely">
                      Mood 5<img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="sociable">
                      Mood 6<img scr=""></img>
                    </button>
                  </td>
                  <td>
                    <button id="calm">
                      Mood 7<img scr=""></img>
                    </button>
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
