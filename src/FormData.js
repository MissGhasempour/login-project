import { useState } from "react";
// import { input } from "./Login";

const FormData = (props) => {

  // let username = document.getElementById("username");
  // console.log(username);
  // const searchParams = new URLSearchParams(props.location.search);
  // const username = searchParams.get('name')
  let { username } = props.match.params;
  return (
    <>
      
      <h1>Login Information</h1>
      {/* {username ? <p>{ username}</p> : <p>not</p>} */}
      <p>{username }</p>
    </>
  )
 }
export default FormData;