import { useState, useEffect } from "react";

import { HiOutlineUsers } from "react-icons/hi2";


const User =(props)=>{
    //console.log("UserPage", props.name)
    return<>
     <div className="top">
    <img src={props.image} alt="" />
    </div>
    <div className="bottom">
    <h2>{props.name}</h2>
    <span >
    <h4>{props.username}</h4>
    <h4>{props.location}</h4>
    <p> 
        <HiOutlineUsers/>  <span className="bold">{props.followers}</span>
        <a href="#Followers">Followers</a> </p> 
        </span>
    
    </div>
    </>
}
export default User;