import { React, useEffect, useReducer } from 'react';
import About from "./components/About";
import Rosters from './components/Rosters';
import SimpleHome from "./components/SimpleHome";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import LogIn from './components/LogIn';
import LogInBar from './components/LogInBar';
import { StateContext } from "./utils/stateContext";
import reducer from "./utils/stateReducer";
import ThankYouPage from './components/ThankYou';
import RosterDetails from "./components/RosterDetails";
import NewRoster from './components/NewRoster';
import { getRosters } from './services/rosterServices';
import EmployeeDashboard from './components/EmployeeDashboard';
import './App.scss';

const sections = [
  {
    title: "About", 
    url:"/about",
  },
  {
    title: "View Rosters", 
    url:"/rosters",
  }
]

function App() {
  const initialState = {
    employees: [],
    loggedInUser: sessionStorage.getItem("user") || null,
    adminUser: sessionStorage.getItem("user") || null,
    auth: sessionStorage.getItem("token") || null,
  };
  const [store, dispatch] = useReducer(reducer, initialState);

  const { loggedInUser } = store;

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }

    getRosters()
    .then((rosters) => 
      dispatch({ type: "setRosters", data: rosters })
    )
    .catch((error) => console.log(error));
  }, [loggedInUser]);

  // Use ternery to operate loading page and main page
  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <Container maxWidth='lg'>
          <LogInBar />
          <Nav title="EasyPortal"
          sections={sections}>
          </Nav>
        </Container>
     <Routes>
          {!loggedInUser ?(
          <>
          <Route path="/" element={<SimpleHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
          </>
          ):(
            <>
          <Route path="/" element={<SimpleHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/rosters" element={<Rosters />} />
          <Route path="/rosters/new" element={<NewRoster />} />
          <Route path="/rosters/:id" element={<RosterDetails />} />
          <Route path="/rosters/update/:id" element={<NewRoster />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="*" element={<NotFound />} />
            </>
          )}
          </Routes>
          <Footer title={"Check weekly for roster updates!"}
          subtitle={"Contact manager with any concerns"}/>
    </StateContext.Provider>
  );
}

export default App;