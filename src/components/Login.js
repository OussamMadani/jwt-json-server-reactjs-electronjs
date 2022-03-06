import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import "./Login.css";
import img from "../images/img-vote1.png";
import img2 from "../images/vote.jpg";

const Login = ({setLogOut}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let history = useHistory();
  
    const Login =(e) => {
      e.preventDefault();
      axios.post("http://localhost:8000/auth/login",{
        email,
        password
      }).then((response)=>{
        console.log("response", response);
        localStorage.setItem("login",JSON.stringify({
          useLogin:true,
          token: response.data.access_token,  
        }));
        setError(" ");
        setEmail(" ");
        setPassword(" ");
        setLogOut(false);
        history.push("/");
      }).catch((error)=> setError(error.response.data.message));
    }


    return(
        <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img2} alt="Image" className="img-fluid"/>
            </div>
            <div className="col-md-6 contents" >
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                  <h3>LogIn</h3>
                  <p className="mb-4">Desktop & Web Application Created by Reactjs integreted on Electron js to launch it on Desktop, Using Node.js on backend & jwt for Authentification & json-server as a fake server  </p>
                </div>
                <form action="#" method="post" onSubmit={Login}>
                  <div className="form-group first">
                    {/* <label for="username">Email:</label> */}
                    <input type="text" className="form-control" placeholder='Email' value={email} name='email' onChange={(e) => setEmail(e.target.value)}/>
    
                  </div>
                  <div className="form-group last mb-4">
                    {/* <label for="password">Password</label> */}
                    <input type="password" className="form-control" placeholder='Password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  
                  {/* <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                      <input type="checkbox" checked="checked"/>
                      <div className="control__indicator"></div>
                    </label>
                  </div> */}
    
                  <input type="submit" value="Log In" className="btn btn-block btn-primary"/>
    
                </form>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default Login;