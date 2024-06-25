import { Typography, Button } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateRoster,
  getRoster,
} from "../services/rosterServices";
import "../App.scss";

// Function for creating a new employee roster, will be accessible from the Rosters.js page 
// and only visible to admin users to make changes

export default function NewRoster() {
  const initialFormState = {
    employee_id: 1,
    monday: "hello",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: ""
  };
  const [formState, setFormState] = useState(initialFormState);

  const { dispatch, store } = useGlobalState();
  const { employees } = store;

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getRoster(id).then(() => {
        const employee = employees.find(
          (employee) =>
            employee.name.toLowerCase()
        );
        setFormState({
          employee_id: employee.id,
          monday: employee.monday,
          tuesday: employee.tuesday,
          wednesday: employee.wednesday,
          thursday: employee.thursday,
          friday: employee.friday,
          saturday: employee.saturday,
          sunday: employee.sunday
        });
      });
    }
  }, [id, employees]);

  function handleClick(event) {
    event.preventDefault();
    if (id) {
      updateRoster({ id: id, ...formState })
        .then(() => {
          dispatch({
            type: "updateRoster",
            data: { id: id, ...formState },
          });
          navigate(`/employees/${id}`);
        })
        .catch((error) => console.log(error));
      }
  }

    // Each key will have it's own input field and if a person is not to be rostered on for a day, 
    // or even several days, the field will be left blank and the key updated with an empty string
  return (
    <div className="main">
      <Typography>Employee:</Typography>
      <Typography>Monday:</Typography>
      <input
        type="text"
        name="monday"
      ></input>
      <Typography>Tuesday:</Typography>
      <input
        type="text"
        name="tuesday"
      ></input>
      <Typography>Wednesday:</Typography>
      <input
        type="text"
        name="wednesday"
      ></input>
      <Typography>Thursday:</Typography>
      <input
        type="text"
        name="thursday"
      ></input>
      <Typography>Friday:</Typography>
      <input
        type="text"
        name="friday"
      ></input>
      <Typography>Saturday:</Typography>
      <input
        type="text"
        name="saturday"
      ></input>
      <Typography>Sunday:</Typography>
      <input
        type="text"
        name="sunday"
      ></input>
      <Button onClick={handleClick}>Update</Button>
    </div>
  );
}