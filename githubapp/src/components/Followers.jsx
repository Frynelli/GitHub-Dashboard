import { useEffect, useState } from "react";
import Elephant from "../assets/elephant.png";

const Followers =(props)=>{
const [userItems, setUserItems] = useState([]);
const name = userItems.name;
console.log(name,"This is the Name You are looking for");
const image = props.info.avatar_url;
const username = props.info.login;
useEffect( ()=>{
    const fetchUser = async ()=>{
        const res = await fetch(
            `https://api.github.com/users/${username}`
        )
        const data = await res.json()
            setUserItems(data)
            //console.log(data, "user");
      }
      fetchUser()
},[])

    return<>
    <ul className="lists followers-list">
        <li className="list-2">
    
            <img src={image} alt="" />
            <div>
            <h4>{name}</h4>   
            <p>{username}</p>
            </div>
        </li>
    </ul>
    </>
}

export default Followers;