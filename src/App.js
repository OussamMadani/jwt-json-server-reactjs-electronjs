import React,{useState} from 'react';
import {Route, Router, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Login from "./components/Login";
import Home from './components/Home';



function App() {
  const [logOut, setLogOut] = useState(false);

  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route path='/'  exact >
          <Home logOut={logOut} setLogOut={setLogOut} />
          </Route>
        <Route path='/login' >
          <Login setLogOut={setLogOut} />
          </Route>
      </Switch>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
