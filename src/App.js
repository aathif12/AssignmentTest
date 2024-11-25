import "./assets/styles/compo.css";
import StudentTable from "./Components/StudentTable";
import { students } from "../src/data/StudentsDb";
import { useState } from "react";
function App() {
  const [fontSize, setFontSize] = useState("16px");
  const ChangeFontSize = (size) => {
    switch (size) {
      case "small":
        setFontSize("12px");
        break;
      case "Medium":
        setFontSize("18px");
        break;
      case "Large":
        setFontSize("24px");
        break;
      default:
        setFontSize("12px");
    }
  };
  return (
    <>
      <div style={{ fontSize }}>
        <div>
          <button onClick={() => ChangeFontSize("small")}>S</button>
          <button onClick={() => ChangeFontSize("Medium")}>M</button>
          <button onClick={() => ChangeFontSize("Large")}>L</button>
        </div>
        <h1>Students Information Portal</h1>
        <hr></hr>
        <div className="outerDiv">
          <table>
            <tbody>
              <tr>
                <td>
                  <StudentTable students={students} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
