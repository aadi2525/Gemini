import React, { useContext } from 'react'
import './Main.css'
import ExploreIcon from '@mui/icons-material/Explore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CodeIcon from '@mui/icons-material/Code';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import avtar1 from './avtar3.webp'
import { Context } from '../Context/Context';
import gemini_logo from './gemini_logo.png'


const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={avtar1} alt="" />
        </div>
        
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
            <p><span>Hello , User.</span></p>
            <p>How Can I Help You , Today?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur.</p>
                    <ExploreIcon fontSize="large"className='img'/>         {/* <HomeIcon sx={{ fontSize: 40 }} className='img'/> */}
                   
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur.</p>
                    <LightbulbIcon fontSize="large"className='img'/>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur.</p>
                    <ChatBubbleIcon fontSize="large"className='img'/>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit, amet consectetur.</p>
                    <CodeIcon fontSize="large"className='img'/>
                </div>
            </div>
            
            </>
            :
            <div className="result">
                <div className="result-title">
                    <img src={avtar1} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={gemini_logo} alt="" />
                    {loading ?
                     <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div> 
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>  
                    // <p>{resultData}</p>  dont use this line no 72
                    /*  removing all the tags using dangerouslySetInnerHTML*/
                    }
                </div>
            </div>
            }


            <div className="main-bottom">
                <div className="serach-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='What Are You Lookig For?' />
                    <div >
                        <AddPhotoAlternateIcon fontSize='large'className='img1'/>
                        <MicIcon fontSize='large'className='img1'/>
                       {input ? <SendIcon onClick={()=>onSent()} fontSize='large'className='img1'/> : null} 
                        
                    </div>
                </div>
                <div className="bottom-info">
              <b>  Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps </b>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
