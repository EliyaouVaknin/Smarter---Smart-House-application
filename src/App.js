import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Room from './Components/Room';
import Home from './Components/Home';
import AddRoom from './Components/AddRoom';
import Login from './Components/Login'
import SideBar from './Components/SideBar'
import Register from './Components/Register'

function App() {
  //Hooks
  const [UsersList, setUsersList] = useState([{Name:'Admin', Password:'1234',Rooms:[]}]);
  const [ThisUser, setThisUser] = useState();
  const [RoomList, setRoomList] = useState([]);
  const [RoomIndex, setRoomIndex] = useState(0);
  const [ThisRoom, setThisRoom] = useState();
  const [RoomName, setRoomName] = useState('');
  const [AppStyle, setAppStyle] = useState({backgroundColor: '#243060',color: 'white'});

  //function
  function DirectToRoom(index,name){
    setRoomIndex(index);
    setRoomName(name);
    setThisRoom(RoomList[RoomIndex]);
  }

  function setHomeScreen(ThisUser){
    setRoomList(ThisUser.Rooms);
    setThisUser(ThisUser);
  }

  function saveUserStateAndLogout(user){
    setThisUser(user);
    for(let i=0; i<UsersList.length;i++){
      if (user.Name == UsersList[i].Name){
        UsersList[i]=user;
        setRoomList([]);
      }
    }
  }

  function saveNewUser(user){
    setUsersList(UsersList => [...UsersList,user]);
  }
  
  function setRoomNamefunc(r){
    setRoomName(r);
  }

  function DarkModFunc(flag){
    if(flag == false){
      setAppStyle({filter:'invert(0%)'})
    } else {
      setAppStyle({filter:'invert(100%)'})
    }
  }


  return (
    <div className="App" style={AppStyle} >
      <SideBar />
      <Header /> 
      <Router>
        <Routes>
          <Route path='/' element={<Login UsersList={UsersList} setHomeScreen={setHomeScreen} />} />
          <Route path='/register' element={<Register UsersList={UsersList} saveNewUser={saveNewUser} />} />
          <Route path='/home' element={<Home setRoomNamefunc={setRoomNamefunc} RoomList={RoomList} DirectToRoom={DirectToRoom} ThisUser={ThisUser} saveUserStateAndLogout={saveUserStateAndLogout} />} />
          <Route path='/addRoom' element={<AddRoom RoomList={RoomList} />} />
          <Route path={`/room/${RoomName}`} element={<Room RoomList={RoomList} ThisRoom={ThisRoom} />} />
        </Routes>
      </Router>
      <Footer DarkModFunc={DarkModFunc} />
    </div>
  );
}

export default App;
