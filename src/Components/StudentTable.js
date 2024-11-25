import Profile from "./profile.js";
import { useState } from "react";
export default function StudentTable(props) {
  const [stu, setStu] = useState(props.students[0]);
  return (
    <>
      <div className="leftDiv">
        <table width="100%" border="1">
          <thead>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Course</th>
            <th>Profile</th>
          </thead>
          <tbody>
            {props.students.map((student) => (
              <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.course}</td>
                <td>{student.address.country}</td>
                <td>
                  <button
                    id={student.studentId}
                    onClick={() => {
                      setStu(student);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            <td></td>
          </tbody>
        </table>
      </div>
      <div className="rightDiv">
        <Profile stu={stu} />
      </div>
    </>
  );
}
