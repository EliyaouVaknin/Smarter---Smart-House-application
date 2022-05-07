import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Login.css'

export default function Login(props) {
    //Hooks
    const [UserName, setUserName] = useState();
    const [Password, setPassword] = useState();
    const [Valid, setValid] = useState(false);

    function login(){
        for(let i = 0; i < props.UsersList.length; i++){
            if(props.UsersList[i].Name == UserName && props.UsersList[i].Password == Password){
                props.setHomeScreen(props.UsersList[i]);
                setValid(true);
                break;
            } else {
                setValid(false);
            }
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <div id = 'LoginCard'>
                <div id = 'LoginDiv'>
                    <h1>Login To Smarter.</h1>
                    <input id = 'UserName' placeholder = 'Enter Your UserName' onChange={(e) => setUserName(e.target.value)}></input>
                    <input type = 'password' id = 'Password' placeholder = 'Enter Your Password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <Link to = {Valid == true ? '/home' : '/' }><button id = 'LoginBtn' onClick={login}>Login</button></Link>
                <Link style = {{color:'white',textDecoration:'none'}} to = '/Register'>Do not have an account ?</Link>
            </div>
        </div>
    )
}
