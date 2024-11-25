export default function Profile(props) {
  return (
    <>
      <table className="profile" border={1} width="100%">
        <tr>
          <td rowspan={7}>
            <img
              src={require("../assets/profilepic/" + props.stu.profilePic)}
              alt="Image"
            ></img>
          </td>
          <td>ID:{props.stu.studentId}</td>
        </tr>
        <tr>
          <td>Fullname:{props.stu.firstName + " " + props.stu.lastName}</td>
        </tr>
        <tr>
          <td>Age:{props.stu.age}</td>
        </tr>
        <tr>
          <td>Course:{props.stu.course}</td>
        </tr>
        <tr>
          <td>Gender:{props.stu.gender}</td>
        </tr>
        <tr>
          <td>
            Address: {props.stu.address.city + " " + props.stu.address.country}
          </td>
        </tr>
        <tr>
          <td>Skills: {props.stu.skills.map((skill) => skill + ",")}</td>
        </tr>
      </table>
    </>
  );
}
