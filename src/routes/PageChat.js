import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import InputBar from "../components/InputBar";
import styles from "../routes/PageChat.module.css";




//Component

export default function PageChat() {
  const [chat,setChat] = useState('');
  const [messages,setMessages] = useState([]);

  //API Functions
  const api_url = 'http://localhost:4000/messages'

  const getMessages = async function(){
    const res = await fetch(api_url,{method:'GET'})
    const fetchedMessages = await res.json();
    setMessages(fetchedMessages);
  }

  const sendMessage = async function (){
    const params = {
        "color": "var(--lime)",
        "username": "Test",
        "text" : chat
      };
    fetch(
      api_url + '?' + new URLSearchParams(params),
      {method:'POST'}
    ).then(
      getMessages()
    )
  }

  useEffect(()=>{
    getMessages()
  },[])

  return (
    <div className="flex-column" style={{gap:'16px',marginTop:'2vh'}}>
      <h1>JunkChat <span className="aqua">v1.0</span></h1>

      <Chat messages={messages}/>

      <div className={styles.wrapperBar}>
        <InputBar small={false} maxlength={null} handleEnterKeyDown={(e)=>(chat&&sendMessage())} inputHandler={setChat} customValue={chat}/>
        <button onClick={sendMessage}>
          <img src='img/send-arrow.svg' alt=''/>
        </button>
      </div>

    </div>
  );
}
