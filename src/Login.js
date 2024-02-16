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
        {!age ? <p style={{color:'red'}}>please fill the age field</p> : null}
        <p style={{color:'red'}}>{age < 12 ? <span>your age at least must be 12 years old</span> : null}</p>
        <p style={{color:'red'}}>{ age > 100 ? <span>please enter a correct age!</span> : null}</p>
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value='Log in' className="submit"/>
      </form>

    </>
  )
}
export default Login;