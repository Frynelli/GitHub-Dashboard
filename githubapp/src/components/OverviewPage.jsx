import UserPage from "./UserPage"; 
import Card from "./Card";
import { useEffect, useState } from "react";

const OverviewPage =(props)=>{
    const [dataUser, setDataUser]=useState([]);
    useEffect( ()=>{
        setDataUser(props.items);
        
    },[props.items])
   
    const userName = dataUser.login;
    const name = dataUser.name;
    const followers = dataUser.followers;
    const avatar = dataUser.avatar_url;
    const location = dataUser.location;
    
    
    return<>
    <div className="container">
    <div className="box-left">
<UserPage image={avatar}/>
</div>
<div className="box-right overview-card"><Card name={name} username={userName} followers={followers} location={location}/></div>

</div> 
    
    </>
}
export default OverviewPage;