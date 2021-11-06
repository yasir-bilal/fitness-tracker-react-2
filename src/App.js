
import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
// import NewItem from './components/dashboard/summary/Logic-control/newItem';
function App() {
  return (
    <>
    <Switch/>
      <Dashboard/>

      <Route path="/home">
        <Dashboard/>
        </Route>
        
      {/* <Route path="/newexercise">
        <Addexercise/>
      </Route> */}
{/* 
      <Route path="/additem">
        <NewItem/>
      </Route> */}

      
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>  
      <Switch />
    </>
  );
}

export default App;
