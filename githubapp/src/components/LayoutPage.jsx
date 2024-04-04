import React, { useEffect, useState } from "react";
import Repositories from "./Repositories";
import InfoSection from "./InfoSection";
import User from "./User";
import UserPage from "./UserPage";
import Card from "./Card";


const LayoutPage =(props)=>{
    const [dataUser, setDataUser]=useState([]);
    console.log(dataUser.followers)
    useEffect( ()=>{
        setDataUser(props.items);
    },[])
    const userName = dataUser.login;
    const name = dataUser.name;
    const followers = dataUser.followers;
    const avatar = dataUser.avatar_url;
    const location = dataUser.location;
    
return<div className="container">
<div className="box-left">
   <User location={location} username={userName} name={name} followers={followers} image={avatar}/> 
</div>
<div className="box-right">
<Repositories/>
</div>
</div>
}
export default LayoutPage;