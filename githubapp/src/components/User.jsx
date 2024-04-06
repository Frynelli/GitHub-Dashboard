//I use it in the LayoutPage
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi2";


const User =(props)=>{
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
        <Link to={`/followers`} >Followers</Link> </p> 
        </span>
    
    </div>
    </>
}
export default User;