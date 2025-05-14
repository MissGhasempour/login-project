import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [username, setUsername] = useState("");
  let [age, setAge] = useState();
  let [password, setPassword] = useState([]);
  let [confirmPassword, setConfirmPassword] = useState([]);
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  const handleUsername = (e) => {
    // console.log(document)
    setUsername(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(e)
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };


  return (
    <>
      <h1 className="title">Log in page</h1>
      <form action={`/data/${username}`} id="form" method="get">
        <input
          type="text"
          placeholder="username"
          onChange={handleUsername}
          id="username"
        />

        {username.length < 4 ? (
          <p className="message-color">
            username must has at least four characters
          </p>
        ) : (
          <mark>done!</mark>
        )}

        <input type="number" placeholder="age" onChange={handleAge} />

        <p className="message-color">
          {age < 12 || age > 100 || !age ? (
            <span>
              your age at least must be 12 years old please enter a correct age!
            </span>
          ) : (
            <mark>done!</mark>
          )}
        </p>

        <input
          type="password"
          placeholder="password"
          onChange={handlePassword}
        />

        {password.length < 6 ? (
          <p className="message-color">
            password must has at least 6 characters
          </p>
        ) : (
          <mark>done!</mark>
        )}

        <input
          type="password"
          placeholder="confirm password"
          onChange={handleConfirmPassword}
        />

        {confirmPassword !== password ? (
          <p className="message-color">please enter a correct password</p>
        ) : (
          <mark>done!</mark>
        )}

        <input type="text" placeholder="email" onChange={handleEmail} />

        {email.includes("@") &&
        email.toLowerCase().includes(".com") &&
        email.length > 10 ? (
          <p>valid email</p>
        ) : (
          <p className="message-color">please enter a valid email</p>
        )}

        {username.length >= 4 &&
        age &&
        age > 11 &&
        password.length > 5 &&
        password == confirmPassword &&
        email.includes("@") &&
        email.includes(".com") &&
        email.length > 10 ? (
          <input
            type="submit"
            value="Log in"
            className="submit"
            id="submit"
            onClick={() =>
              navigate("/data", {
                state: {
                  id: 1,
                  name: "sabaoon",
                  username,
                  age,
                  email,
                  password,
                },
              })
            }
          />
        ) : null}
      </form>
    </>
  );
};
export default Login;
