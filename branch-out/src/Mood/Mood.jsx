import "./Mood.css";
const Mood = () => {
  return (
    <div id="mood-screen">
        <div id ="body-mood">
            <div id="mood-of-the-day">
                <table>
                    <tr>
                        <td><img scr=""></img> </td>
                        <td> <img scr=""></img></td>
                        <td> <img scr=""></img></td>
                        <td> <img scr=""></img></td>
                        <td> <img scr=""></img></td>
                        <td> <img scr=""></img></td>
                        <td> <img scr=""></img></td>
                    </tr>
                </table>    
            
            <div id="options">
                        <table>
                            <tr>
                                <td><button id = "happy"><img scr = ""></img></button></td>
                                <td><button id = "sad"><img scr = ""></img></button></td>
                                <td><button id = "excited"><img scr = ""></img></button></td>
                                <td><button id = "angry"><img scr = ""></img></button></td>
                                <td><button id = "lonely"><img scr = ""></img></button></td>
                                <td><button id = "sociable"><img scr = ""></img></button></td>
                                <td><button id = "calm"><img scr = ""></img></button></td>
                            </tr>
                        </table>
                    </div>
            </div>
        </div>
    </div>  
    
  );
};

export default Mood;
