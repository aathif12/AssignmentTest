export default function Profile(props) {
  return (
    <>
      <table>
        <tr>
          <td rowspan="7">
            <img src="{require('../assets/profilepic/'+props.student.profilePic)}"></img>
          </td>
        </tr>
      </table>
    </>
  );
}
