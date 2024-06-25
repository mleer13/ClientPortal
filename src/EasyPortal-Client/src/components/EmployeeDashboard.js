import { Typography } from "@mui/material";
import "../App.scss";

// Employee dashboard, to render specific employee information based on their log in with the user id
// Will be wrapped in the authentication ternary in App.js so that non-authenticated users have no access to personal information
function EmployeeDashboard() {
  return (
    <div className="main">
      <Typography><h1>Roster</h1></Typography>
      <Typography><h4>Remember to check the roster weekly and contact your manager for changes</h4></Typography>
    </div>
  );
}

export default EmployeeDashboard;