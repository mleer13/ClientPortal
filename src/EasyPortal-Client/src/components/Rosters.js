import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { Link, useNavigate } from "react-router-dom";
import { getRosters } from "../services/rosterServices";
import { useEffect } from "react";
import "../App.scss";

// Essentially the admin dashboard component
// A signed in admin user will be able to view the full list of register employees
// All the items in this list will be clickable links that then open the assocaited roster details for that employee
// This component will have the 'Add Roster' button for admin user and will display a 'please log in'
// message for any employee users

function Rosters() {
  let navigate = useNavigate();

  const { store, dispatch } = useGlobalState();
  const { loggedInUser, employees } = store;

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }
    
    getRosters()
    .then((employees) =>
      dispatch({ type: "setEmployees", data: employees})
    )
    .catch((error) => console.log(error));
  }, [loggedInUser, dispatch]);

  return(
    <div className="main">
      {loggedInUser ? (
        <>
      <Typography><h1>Employee Roster List</h1></Typography>
      <Typography><h2>Click on employee name to make changes</h2></Typography>
      {employees.map((employee, index) => {
            return (
              <Link key={employee._id} to={`/rosters/${employee._id}`}>
                <Typography>{employee._id}</Typography>
              </Link>
            );
          })}
          <button onClick={() => navigate("/rosters/new")}>
            Add Roster
          </button>
          </>
      ):(
        <>
        <Typography><h1>
          Please log in.
        </h1>
        </Typography>
        </>
      )}
    </div>
  )
}

export default Rosters;

