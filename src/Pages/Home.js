import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './home.css'
const Home = () => {

  const navigate=useNavigate();
  const [roomId,setRoomId] = useState('');
  const [username,setUsername] = useState('');

  const createNewRoom = (e) =>{
    e.preventDefault();
    const id=uuidv4();
    setRoomId(id);
    toast.success('New Room Created');
  }


  const joinRoom = () =>{
    if(!roomId || !username){
        toast.error('Room ID and Username are required');
        return ;
    }

    // redirect
    navigate(`/editor/${roomId}`,{
        state:{
            username,
        },
    });
  };


  const handleInputEnter=(e)=>{
    if(e.code==="Enter"){
        joinRoom();
    }
  }


  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <div className='mainLabel'>Paste Invitation Room ID</div> 
            <div className='inputGroup'>
                <input type='text' className='inputBox' placeholder='ROOM ID' value={roomId} 
                onChange={(e)=>{
                    setRoomId(e.target.value);
                }}
                onKeyUp={handleInputEnter}/>
                <input type='text' className='inputBox' placeholder='USERNAME' value={username}
                onChange={(e) =>{
                    setUsername(e.target.value);
                }}
                onKeyUp={handleInputEnter}
                />
                <button className='buttonstyle' onClick={joinRoom}>Join</button>
                <div>
                    If you don't have an invite then create &nbsp;&nbsp;
                    <a onClick={createNewRoom} href="">new room</a>
                </div>
            </div>

        </div>
        {/* <footer>
            <h4>Built By <a href='https://github.com/Divyanshj'>Divyansh Jain</a></h4>
        </footer> */}
    </div>
  )
}

export default Home