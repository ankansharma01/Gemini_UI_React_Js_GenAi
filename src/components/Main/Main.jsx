import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
   <>
    <div className='main'>
        <div className='nav'>
            <p style={{cursor:'pointer',color:'#aaa8a8'}}>Suvomita</p>
            <img src={assets.user_icon} alt=''/>
        </div>
        <div className='main-container'>

        {!showResult?<>
          <div className='greet'>
            <p><span>Hello there!</span></p>
            <p>How can i help you today?</p>
          </div>
          <div className='cards'>
            <div className='card'>
              <p>Flights to Tokyo and Seoul, and things to do</p>
              <img src={assets.compass_icon} alt=''/>
            </div>
            <div className='card'>
              <p>Walk me through how to apply for a new role</p>
              <img src={assets.bulb_icon} alt=''/>
            </div>
            <div className='card'>
              <p>Help create a weekly meal plan for two</p>
              <img src={assets.message_icon} alt=''/>
            </div>
            <div className='card'>
              <p>Help explain a concept in a kid-friendly way</p>
              <img src={assets.code_icon} alt=''/>
            </div>
          </div>
          </>:<div className='result'>
                   <div className='result-title'>
                    <img src={assets.user_icon} alt=''/>
                    <p>{recentPrompt}</p>
                   </div>
                   <div className='result-data'>
                    <img src={assets.gemini_icon} alt=''/>
                    {loading?<div className='loader'>
                      <hr/>
                      <hr/>
                      <hr/>
                     </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                   </div>
          </div>
          }
          <div className='main-bottom'>
            <div className='search-box'>
              <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'/>
              <div>
                <img src={assets.gallery_icon} alt=''/>
                <img src={assets.mic_icon} alt=''/>
                {input?<img onClick={()=>onSent()} src={assets.send_icon} alt=''/>:null}
              </div>
            </div>
            <div className='bottom-info'>
              <p style={{color:"#aaa8a8"}}>Gemini may display inaccurate info, including about people, so double-check its responses. <u>Your privacy and Gemini Apps</u></p>
            </div>
          </div>
        </div>
    </div> </>
  )
}

export default Main
