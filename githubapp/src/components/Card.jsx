import { HiOutlineUsers } from "react-icons/hi2";
import React from "react";
const Card =(props)=>{
    
    return<>
    <div className="card">
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
export default Card;