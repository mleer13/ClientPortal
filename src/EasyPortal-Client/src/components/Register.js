import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { registerUser } from "../services/authServices";
import { useState } from "react";
import { useGlobalState } from "../utils/stateContext";

// The register form is used when a user clicks on the register button in the LogInBar component
// The initial form state will be empty so that the user can enter their own details

export default function Register() {
  const initialFormState = {
    displayName: "",
    email: "",
    password: "",
    password_confirmation: "",
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

  // Following the click of the register button, user will be register to the Firebase auth logs
  // and then set as signed in and able to view the relevant information for their type of user (employee or admin)

  function handleRegister(event) {
    event.preventDefault();
    registerUser(formState).then((data) => {
      let displayName = data.displayName;
      let token = data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", displayName);
      dispatch({ type: "setLoggedInUser", data: displayName });
      dispatch({ type: "setToken", data: token });
      navigate("/");
    });
  }

  return (
    <>
      <Box sx={{fontFamily: 'default', textAlign: 'center', textTransform: 'uppercase'
      }}>
        <label>Name:</label>
        <br></br>
        <input
          type="text"
          name="displayName"
          value={formState.displayName}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Email:</label>
        <br></br>
        <input
          type="text"
          name="email"
          value={formState.email}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Password Confirmation:</label>
        <br></br>
        <input
          type="password"
          name="password_confirmation"
          value={formState.password_confirmation}
          onChange={handleChange}
        ></input>
        <br></br>
        <Button onClick={handleRegister}>Register</Button>
      </Box>
    </>
  );
}