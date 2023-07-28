import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
    // navigate(`/editor/${roomId}`,{
    //     state{
    //         username,
    //     },
    // })
  }


  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <h4 className='mainLabel'>Paste Invitation Room ID</h4>
            <div className='inputGroup'>
                <input type='text' className='inputBox' placeholder='ROOM ID' value={roomId} 
                onChange={(e)=>{
                    setRoomId(e.target.value);
                }}/>
                <input type='text' className='inputBox' placeholder='USERNAME' value={username}
                onChange={(e) =>{
                    setUsername(e.target.value);
                }}
                />
                <button onClick={joinRoom}>Join</button>
                <span>
                    If you don't have an invite then create &nbsp;&nbsp;
                    <a onClick={createNewRoom} href="">new room</a>
                </span>
            </div>

        </div>
        <footer>
            <h4>Built By <a href='https://github.com/Divyanshj'>Divyansh Jain</a></h4>
        </footer>
    </div>
  )
}

export default Home