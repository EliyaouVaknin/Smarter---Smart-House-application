import React,{useState} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../Styles/SideBar.css'
import 'react-pro-sidebar/dist/css/styles.css';

export default function SideBar() {
    //Hooks
    const [IsOpen, setIsOpen] = useState(false);
    const [IsAboutOpen, setIsAboutOpen] = useState(false);
    const [IsConnectUsOpen, setIsConnectUsOpen] = useState(false);
    const [AboutSyle, setAboutSyle] = useState({display:'none'});
    const [ConnectUsSyle, setConnectUsSyle] = useState({display:'none'});
    const [SideMenuSyle, setSideMenuSyle] = useState({display:'none'});

    //Function
    function openSlideMenu(){
        if (IsOpen == false){
            setSideMenuSyle({display:'block'});
        } else {
            setSideMenuSyle({display:'none'});
        }
        setIsOpen(!IsOpen);
    }

    function ToggleAbout(){
        if (IsAboutOpen == false){
            setAboutSyle({display:'block'});
        } else {
            setAboutSyle({display:'none'});
        }
        setIsAboutOpen(!IsAboutOpen);
    }

    function ToggleConnectUs(){
        if (IsConnectUsOpen == false){
            setConnectUsSyle({display:'block'});
        } else {
            setConnectUsSyle({display:'none'});
        }
        setIsConnectUsOpen(!IsConnectUsOpen);
    }

    /////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <span className = "open-slide">
                <a onClick = {openSlideMenu}>
                <img id = 'SideMenuBtn' src = {require('../Img/menu.png')} />
                </a>
            </span>

            <div id = 'AboutCard' style = {AboutSyle}>
                <h3 style = {{hight:'300px',width:'500px',marginLeft:'150px',marginTop:'40px'}}>
                Hello dear customer, welcome to our website.
                Our site provides a solution for smart home control, adding a new user, rooms and products within the rooms.
                Any product can be turned on and off remotely effortlessly!
                So what are you waiting for? Sign up and enjoy our new technology!
            </h3>
            <button id = 'buttonSideMenuAbout' onClick = {ToggleAbout}>go back</button>
            </div>

            <div id = 'ConnectUsCard'style = {ConnectUsSyle}>
                <table id = 'tableConnectUs'>
                    <tr>
                        <td><img className = 'ConnectUsImg' src={require('../Img/facebook.png')} /></td>
                        <td><img className = 'ConnectUsImg' src = {require('../Img/instegram.jpg')} /></td>
                        <td><img className = 'ConnectUsImg' src = {require('../Img/youtube.png')} /></td>
                    </tr>
                </table>
            <button id = 'buttonSideMenuConnectUs' onClick = {ToggleConnectUs}>go back</button>
            </div>

            <div>
            <ProSidebar id = 'sidebar' style = {SideMenuSyle}>
                <Menu iconShape = "square">
                     <MenuItem ><a href = '/'>Home</a></MenuItem>
                    <MenuItem onClick = {ToggleConnectUs} >Connect Us</MenuItem>
                    <MenuItem onClick = {ToggleAbout} >About</MenuItem>
                </Menu>
                </ProSidebar>
            </div>
        </div>
    )
}