
import { useLocation } from "react-router-dom";

const FormData = () => {

  // let username = document.getElementById("username");
  // console.log(username);
  // const searchParams = new URLSearchParams(props.location.search);
  // const username = searchParams.get('name')
  // let { username } = props.match.params;

  let location = useLocation()
  return (
    <>
      
      <h1>Login Information</h1>
      {/* {username ? <p>{ username}</p> : <p>not</p>} */}
      {/* <p>{username }</p> */}
      <h3>username = {location.state.username}</h3>
      <h3>age = {location.state.age}</h3>
      <h3>email = {location.state.email}</h3>
      <h3>password = {location.state.password}</h3>
    </>
  )
 }
export default FormData;