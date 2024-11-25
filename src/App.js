import "./assets/styles/compo.css";
import StudentTable from "./Components/StudentTable";
import { students } from "../src/data/StudentsDb";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
