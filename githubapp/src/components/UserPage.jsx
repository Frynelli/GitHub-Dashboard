import mike from "../assets/mike.jpg";
import React from "react";

const UserPage = (props)=>{
console.log(props.image)

    return<>
    <div className="overview-container">
    <img src={props.image} alt="user avatar" />
    </div>
    </>
}
export default UserPage;