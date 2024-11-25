import "./App.css";
import StudentTable from "./Components/StudentTable";
import { students } from "../src/data/StudentsDb";
function App() {
  return (
    <div className="App">
      <h1>Students Information Portal</h1>
      <hr></hr>
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
  );
}

export default App;
