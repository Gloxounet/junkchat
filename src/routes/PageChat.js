import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import InputBar from "../components/InputBar";
import styles from "../routes/PageChat.module.css";
import PagePseudo from "./PagePseudo";

//Component

export default function PageChat() {
  const [user,setUser] = useState();
  const [chat,setChat] = useState('');
  const [messages,setMessages] = useState([]);

  //API Functions
  const api_url = 'http://api.chillpaper.fr/messages'

  const getMessages = async function(){
    const res = await fetch(api_url,{method:'GET'})
    const fetchedMessages = await res.json();
    setMessages(fetchedMessages);
  }

  const sendMessage = async function (){
    const params = {
        "color": user['color'],
        "username": user['username'],
        "text" : chat
      };
    fetch(
      api_url + '?' + new URLSearchParams(params),
      {method:'POST'}
    ).then(
      getMessages()
    ).then(
      setChat('')
    )
  }

  //Fetch messages when first loaded
  useEffect(()=>{
    setInterval(
      ()=>{getMessages()},
      5000
      )
  },[])


  //Returns

  //If the user isn't logged in then render the login page
  if (!user){
    return <PagePseudo setUser={setUser}/>
  }

  return (
    <div className="flex-column" style={{gap:'16px',marginTop:'2vh'}}>
      <h1>JunkChat <span className="aqua">v1.0</span></h1>

      <Chat messages={messages}/>

      <div className={styles.wrapperBar}>
        <InputBar
          small={false}
          maxlength={null}
          handleEnterKeyDown={(e)=>{chat&&sendMessage()}}
          inputHandler={setChat}
          value={chat}
        />
        <button onClick={()=>{chat&&sendMessage()}}>
          <img src='img/send-arrow.svg' alt=''/>
        </button>
      </div>

    </div>
  );
}
