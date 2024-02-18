import { useState } from "react";
import FormData from "./FormData";
// import { useHistory } from 'react-router-dom';


// let username = "";
// let setUsername = function (username) { return username };
// export const input = <input type="text"/>
const Login = () => {

  let [username, setUsername] = useState("");
  let [age, setAge] = useState();
  let [password, setPassword] = useState([]);
  let [confirmPassword, setConfirmPassword] = useState([]);
  let [email, setEmail] = useState("");

  const handleUsername = (e) => {
    // console.log(document)
    setUsername(e.target.value);
    // return value.length < 4 ? <p style={{color:'red'}}>username must have at least four characters</p> : <mark>done!</mark>
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(e)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  // const handleClick = () => {
  
  //   setUsername("");
  //   setAge();
  //   setPassword([]);
  //   setConfirmPassword([]);
  //   setEmail("")
  // }

  // const history = useHistory();
  // history.push('/data', { username });
 
  return (
    <>
      <h1 style={{textAlign:"center", color:"grey"}}>Log in page</h1>
      <form action={`/data/${username}`} id="form" method="get">
        <input type="text" placeholder="username" onChange={handleUsername} id="username" />
        {username.length < 4 ? <p style={{color:'red'}}>username must has at least four characters</p> : <mark>done!</mark>}
        <input type="number" placeholder="age" onChange={handleAge} />
        {!age ? <p style={{color:'red'}}>please fill the age field</p> : null}
        <p style={{color:'red'}}>{age < 12 ? <span>your age at least must be 12 years old</span> : null}</p>
        <p style={{color:'red'}}>{ age > 100 ? <span>please enter a correct age!</span> : null}</p>
        <input type="password" placeholder="password" onChange={handlePassword} />
        {password.length < 6 ? <p style={{color:'red'}}>password must has at least 6 characters</p> : <mark>done!</mark>}
        <input type="password" placeholder="confirm password" onChange={handleConfirmPassword} />
        {confirmPassword !== password ? <p style={{ color: 'red' }}>please enter a correct password</p> : <mark>done!</mark>}
        <input type="text" placeholder="email" onChange={handleEmail} />
        {(email.includes('@') && email.toLowerCase().includes('.com') && email.length > 10) ? <p>valid email</p> : <p style={{color:'red'}}>please enter a valid email</p>}
        {(username.length >= 4 && age && age > 11 && password.length > 5 && password == confirmPassword && email.includes('@') && email.includes('.com') && email.length > 10) ? <input type="submit" value='Log in' className="submit" id="submit" /> : null}
        
      </form>
     
    
      {/* <FormData username={username } /> */}
    </>
  )
}
export default Login;
