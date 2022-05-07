import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Register.css'

export default function Register(props) {
    //Hooks
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [Valid, setValid] = useState(false);

    //Functions
    function Register(){
        let checkIfExist = 0;
        let NewUser = {
            Name: UserName,
            Password: Password,
            Rooms: []
        };
        for(let i = 0; i < props.UsersList.length; i++){
            if(props.UsersList[i].Name == UserName){
                checkIfExist++;
            }
        }
        if ((UserName != '') && (Password != '') && (checkIfExist == 0)){
            props.saveNewUser(NewUser);
            setValid(true);
            alert('Register Successfully')
        } else {
            alert('Please Enter valid inputs or choose another Name');
            setValid(false);
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <div id = 'RegisterCard'>
                <div id = 'RegisterDiv'>
                    <h1>Register To Smarter.</h1>
                    <input id = 'UserName' placeholder = 'Enter Your UserName' onChange = {(e) => setUserName(e.target.value)}></input>
                    <input type = 'password' id = 'Password' placeholder = 'Enter Your Password' onChange = {(e) => setPassword(e.target.value)}></input>
                </div>
                <Link style = {{color:'white',textDecoration:'none'}} to = '/'>Have an account ?</Link>
                <Link to = {Valid == true ? '/' : '/Register' }><button id = 'RegisterBtn' onClick = {Register}>Register</button></Link>
            </div>
        </div>
    )
}
