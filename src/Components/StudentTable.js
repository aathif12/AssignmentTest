export default function StudentTable(props) {
  return (
    <>
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
            </tr>
          ))}
          <td></td>
        </tbody>
      </table>
    </>
  );
}
