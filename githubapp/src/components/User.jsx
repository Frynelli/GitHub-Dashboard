import mike from "../assets/mike.jpg";
import { HiOutlineUsers } from "react-icons/hi2";

const User =()=>{


    return<>
     <div className="top">
    <img src={mike} alt="" />
    </div>
    <div className="bottom">
    <h2>Name</h2>
    <h4>Username</h4>
    <p>Description</p>
    <p> 
        <HiOutlineUsers/>  <span className="bold">100</span>
        <a href="#Followers">Followers</a> </p> 
        
    
    </div>
    </>
}
export default User;