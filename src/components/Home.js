import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Login from "./Login";



const Home = ({logOut, setLogOut}) => {
    const [login, setLogin] = useState("");

    const isLoginTrue = JSON.parse(localStorage.getItem('login'));

    useEffect(()=> {
        stateWithLocalStorage();
    },[logOut])


    const stateWithLocalStorage =()=>{
        if(localStorage.hasOwnProperty("login")){
            let value = localStorage.getItem("login");
            try {
                value = JSON.parse(value);
                setLogin(value);
            }catch (e) {
                setLogin("");
            }
        }
    }

    const logout = () => {
        localStorage.removeItem("login");
        setLogOut(true);
    };
    return(
        <div>
        {!logOut && isLoginTrue&& login.userLogin ? (
          <button onClick={logout}>LogOut</button>
        ) : (
          <Link to="/login">
           <button> logIn</button>
          </Link>
        )}
        </div>
    )
}

export default Home;