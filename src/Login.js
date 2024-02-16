import { useState } from "react";
const Login = () => {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState();
  const handleUsername = (e) => {
    // console.log(document)
    setUsername(e.target.value);
    // return value.length < 4 ? <p style={{color:'red'}}>username must have at least four characters</p> : <mark>done!</mark>
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  return (
    <>
      <form>
        <input type="text" placeholder="username" onChange={handleUsername} id="username" />
        {username.length < 4 ? <p style={{color:'red'}}>username must have at least four characters</p> : <mark>done!</mark>}
        <input type="number" placeholder="age" onChange={handleAge} />
        {age < 12 ? <p>you must at least have 12 years old</p> : <mark>done!</mark>}
        {age > 100 ? <p>please enter correct age!</p> : <mark style={{color:'green'}}>correct!</mark>}
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value='Log in' className="submit"/>
      </form>

    </>
  )
}
export default Login;