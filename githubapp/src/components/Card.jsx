import { HiOutlineUsers } from "react-icons/hi2";
import React from "react";
const Card =()=>{

    return<>
    <div className="card">
    <h2>name</h2>
    <span >
    <h4>username</h4>
    <h4>location</h4>
    <p> 
        <HiOutlineUsers/>  <span className="bold">followers</span>
        <a href="#Followers">Followers</a> </p> 
        </span>
    
    </div>
    </>
}
export default Card;