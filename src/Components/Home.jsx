import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Rooms from './Rooms'
import '../Styles/Home.css'
import Grid from '@react-css/grid'

export default function Home(props) {
    //Hooks 
    const [RoomList, setRoomList] = useState(props.RoomList)

    //function
    function logout(){
    var currentUser = {
        Name: props.ThisUser.Name,
        Password: props.ThisUser.Password,
        Rooms: RoomList
    };      
    props.saveUserStateAndLogout(currentUser);
    }

    /////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <div id = 'HomeCard'>
                <div id = 'RoomDiv'>
                    <Link to = {'/'}><button id = 'LogoutBtn' onClick = {logout}>Logout</button></Link>
                    <h2 id = 'UserNameHome'>{props.ThisUser.Name}'s House</h2>
                    <Grid columns='150px 150px 150px' style = {{marginLeft:'13%'}}>
                        {props.RoomList.map( r => {
                        return <Rooms key = {r} Name = {r.Name} Color = {r.Color} Type = {r.Type} Product = {r.Product}
                        RoomList = {props.RoomList} DirectToRoom = {props.DirectToRoom} setRoomNamefunc={props.setRoomNamefunc}/>
                        })}
                    </Grid>
                </div>
                <Link id = 'AddRoomBtn' className='text-link' to = "/addRoom">Add New Room</Link>
            </div>
        </div>
    )
}
