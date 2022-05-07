import React,{useState} from 'react'
import '../Styles/Rooms.css'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

export default function Rooms(props){
    //Hooks
    const [Name, setName] = useState(props.Name);

    //functions
    function sendRoomData(event){
        event.currentTarget = props.Name;
        setName(props.Name);
        for(let i = 0; i < props.RoomList.length; i++){
            if(Name == props.RoomList[i].Name){
                props.DirectToRoom(i,Name);
            } 
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <Link to = {`/room/${Name}`} style = {{textDecoration:'none'}}>
            <button className = 'RoomLink' style = {{backgroundColor:props.Color}} onClick={sendRoomData} value = {props.Name}>
            {props.Name}<br/>{props.Type}</button></Link>           

              
        </div>
    )
}
