import React,{useState} from 'react'
import Client from '../Components/Client'
import Editor from '../Components/Editor'

const EditorPage = () => {

  const [clients,setClients] = useState([
    {socketId:1, username:'Divyansh Jain'},
    {socketId:2, username:'Dakshay Sachdeva'},
    {socketId:3, username:'Shitiz Agg'}
  ]);

  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'></div>
          <h3>Connected</h3>
          <div className='clientsList'>
            {
              clients.map((client)=>(
                <Client 
                  key={client.socketId} 
                  username={client.username}
                />
              ))
            }
          </div>
        </div>
        <button>Copy Room ID</button>
        <button>Leave</button>
      </div>
      <div>
        <Editor/>
      </div>


    </div>
  )
}

export default EditorPage