import React, { useContext, useState } from 'react'
import './Sidebar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HistoryIcon from '@mui/icons-material/History';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { Context } from '../Context/Context';


const Sidebar = () => {

const [extended,setExtended]= useState(false);
const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);

const loadPrompt = async (prompt) => {
  setRecentPrompt(prompt)
  await onSent(prompt)
}

  return (
    <div className='sidebar'>
      <div className="top">
        <MenuIcon onClick={()=>setExtended(prev =>!prev)} fontSize='large' className='menu img'/>
        <div onClick={()=>newChat()} className="new-chat">
            <AddIcon fontSize='large' className='img'/>
            {extended?<p>new chat</p>:null}
        </div>
        {extended
        ?
        <div className="recent">
            <p className='recent-title'>recent</p>
            {prevPrompts.map((item,index)=>{
              return(
            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <ChatBubbleIcon fontSize='large' className='img'/>
                <p>{item.slice(0,18)} ...</p>
            </div>
              )
            })}
        </div>
        
        : null
        }
      </div>

      <div className="bottom">
            <div className="bottom-iteam recent-entry">
                <HelpOutlineIcon fontSize='large' className='img'/>
                {extended?<p>help</p>:null}
            </div>
            <div className="bottom-iteam recent-entry">
                <HistoryIcon fontSize='large' className='img'/>
                {extended?<p>activity</p>:null}
            </div>
            <div className="bottom-iteam recent-entry">
                <SettingsIcon fontSize='large' className='img'/>
                {extended?<p>setting</p>:null}
            </div>
            
      </div>
    </div>
  )
}

export default Sidebar
