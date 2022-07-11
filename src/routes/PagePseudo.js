import ButtonArrow from "../components/ButtonArrow";
import InputBar from "../components/InputBar";

import { useState } from "react";

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

export default function PagePseudo({setUser}) {
  const [username, setUsername] = useState('Joe Biden');

  const handleClick = function(){
    setUser({
      username:username,
      color:get_random(['var(--pink)','var(--aqua)','var(--lime)','var(--black)'])
    })
  }

  return (
    <div className="flex-column" style={{gap:'96px',marginTop:'14vh'}}>
      <div className="flex-column" style={{gap:'14px'}}>
        <h1>
          enter your <span className='lime'>name</span>
        </h1>
        {
          username?
          (<h2>(you will join as <span className='pink'>{username}</span>)</h2>):
          (<h2>it can be anything you want.</h2>)
        }
      </div>

      <div className="flex-row flex-wrap-wrap align-item-flex-end" style={{gap:'14px'}}>
        <InputBar inputHandler={setUsername} placeholder={username}/>
        <ButtonArrow onClick={handleClick} link_uri={'/chat'} text='Join chat' backgroundColor={'var(--lime)'}/>
      </div>

    </div>
  );
}
