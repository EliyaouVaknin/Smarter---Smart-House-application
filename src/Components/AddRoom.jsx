import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/AddRoom.css'

export default function AddRoom(props) {
    //Hooks
    const [RoomName, setRoomName] = useState('');
    const [RoomColor, setRoomColor] = useState('#1d736c');
    const [RoomType, setRoomType] = useState('');
    const [BedroomSelected, setBedroomSelected] = useState({boxShadow: '0px 0px 0px 0px white'});
    const [BathroomSelected, setBathroomSelected] = useState({boxShadow: '0px 0px 0px 0px white'});
    const [kitchenSelected, setKitchenSelected] = useState({boxShadow: '0px 0px 0px 0px white'});

    //functions
    function saveRoom(e){
        let NewRoom;
        let RoomEx = false;
        //Check if we have this name allready
        for(let i=0; i<props.RoomList.length; i++){
            if(props.RoomList[i].Name == RoomName){
                RoomEx=true;
            }
        }
        if(RoomName.length <= 15 && RoomName != '' && RoomEx != true && RoomType != ''){
            NewRoom = {
                Name: RoomName,
                Color: RoomColor,
                Type: RoomType,
                Product: []
            };
            props.RoomList.push(NewRoom);
        } else {
            alert('Please enter valid input');
        }
    }
    
    function saveRoomColor(event){
        const color = event.currentTarget.id;
        setRoomColor(color);
    }

    function ChengeStyleToChoisenRoom(e){
        const id = e.currentTarget.id;
        setRoomType(id)
        if (id == 'Bedroom'){
            setBedroomSelected({boxShadow:'0px 0px 5px 3px white'});
            setBathroomSelected({boxShadow:'0px 0px 0px 0px white'});
            setKitchenSelected({boxShadow:'0px 0px 0px 0px white'});  
        } else if(id == 'Bathroom'){
            setBedroomSelected({boxShadow:'0px 0px 0px 0px white'});
            setBathroomSelected({boxShadow:'0px 0px 5px 3px white'});
            setKitchenSelected({boxShadow:'0px 0px 0px 0px white'});  
        }else if(id == 'Kitchen'){
            setBedroomSelected({boxShadow:'0px 0px 0px 0px white'});
            setBathroomSelected({boxShadow:'0px 0px 0px 0px white'});
            setKitchenSelected({boxShadow:'0px 0px 5px 3px white'}); 
        }
    }
    
    /////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <div id='AddRoomCard'>
                <div id='RoomDiv'>
                <button id='Bedroom' className='RoomClass' onClick={ChengeStyleToChoisenRoom} style={BedroomSelected}>
                        <img className='RoomImg' src={require('../Img/bedroomImg.png')} /></button>
                    <button id='Bathroom' className='RoomClass' onClick={ChengeStyleToChoisenRoom} style={BathroomSelected}>
                        <img className='RoomImg' src={require('../Img/bathroomImg.png')} /></button>
                    <button id='Kitchen' className='RoomClass' onClick={ChengeStyleToChoisenRoom} style={kitchenSelected}>
                        <img className='RoomImg' src={require('../Img/kitchenImg.png')} /></button>
                </div>

                <div id='RoomInputs'>
                    <input id='RoomName' type="text" onChange={(e)=>setRoomName(e.target.value)} placeholder='Enter Room name'/>
                    <br/>
                    <div id='ColorDiv'>
                    <table>
                        <tr>
                            <td><h3>Choose Color:</h3></td>
                            <td><button id='#bb9aa6' className='ColorBtn' onClick={saveRoomColor} style={{backgroundColor:'#bb9aa6'}}></button></td>
                            <td><button id='#36d5b4' className='ColorBtn' onClick={saveRoomColor} style={{backgroundColor:'#36d5b4'}}></button></td>
                            <td><button id='#4d658b' className='ColorBtn' onClick={saveRoomColor} style={{backgroundColor:'#4d658b'}}></button></td>
                            <td><button id='#4a56d0' className='ColorBtn' onClick={saveRoomColor} style={{backgroundColor:'#4a56d0'}}></button></td>
                            <td><button id='#1d736c' className='ColorBtn' onClick={saveRoomColor} style={{backgroundColor:'#1d736c'}}></button></td>
                        </tr>
                    </table>
                    </div>
                    <Link id='SaveRoomBtn' onClick={saveRoom} to="/home">Save</Link>
                </div>
            </div>
        </div>
    )
}
