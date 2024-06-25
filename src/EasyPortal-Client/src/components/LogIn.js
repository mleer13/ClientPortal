import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";
import { Button, Box } from "@mui/material";

// LogIn route will be navigated to from the LogInBar
export default function LogIn() {
  // Establish initial form with empty fields for input
  const initialFormState = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const { dispatch } = useGlobalState();
  let navigate = useNavigate();

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    loginUser(formState)
      .then((data) => {
        let displayName = data.displayName;
        let token = data.token;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", displayName);
        dispatch({ type: "setLoggedInUser", data: displayName });
        dispatch({ type: "setAdminUser", data: displayName})
        dispatch({ type: "setToken", data: token });
        if ('adminUser') {
          navigate("/rosters");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
    <Box sx={{fontFamily: 'default', textAlign: 'center', textTransform: 'uppercase'
      }}>
      <h2 className="sign-in">Log In</h2>
      <label>Email:</label>
      <br></br>
      <input
        className="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      ></input>
      <br></br>
      <label>Password:</label>
      <br></br>
      <input
        className="password"
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      ></input>
      <br></br>
      <Button onClick={handleSubmit}>Login</Button>
      </Box>
      </>
  );
}