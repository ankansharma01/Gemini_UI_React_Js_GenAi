import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
   const [extended,setExtended]=useState(false)
   const {onSent,previousPrompt,setRecentPrompt,newChat} = useContext(Context)
   const loadPrompt = async (prompt) =>
   {
    setRecentPrompt(prompt)
    await onSent(prompt)
   }
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(!extended)}className="menu" src={assets.menu_icon} alt="menu.icon" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus.icon" />
          {extended?<p>New Chat</p>:null}
        </div>
        {extended?<div className="recent">
          <p className="recent-title">Recent</p>
          {previousPrompt.map((item,index)=>{
            return (
              <div onClick={()=>loadPrompt(item)} className="recent-entry">
            <img src={assets.message_icon} alt="message_icon" />
            <p style={{color:"#aaa8a8"}}>{item.slice(0,18)}...</p>
          </div>
            )
          })}
        
        </div>:null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt=""/>
            {extended?<p style={{color:"#aaa8a8"}}>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.timer_icon} alt=""/>
            {extended?<p style={{color:"#aaa8a8"}}>Activites</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt=""/>
            {extended?<p style={{color:"#aaa8a8"}}>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
