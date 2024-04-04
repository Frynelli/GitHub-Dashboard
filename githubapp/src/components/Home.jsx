
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Navbar from "./NavbarPage";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import OverviewPage from "./OverviewPage";
import LayoutPage from "./LayoutPage";

const Home =()=>{
  
    const [userItems, setUserItems] = useState([]);
    // const [user] = useState("Matthew");
    const [user, setUser] = useState("Frynelli");

    function handleSearch(results){
        setUser(results);
        
    };
    
    useEffect(() => {
      const fetchUser = async ()=>{
        const res = await fetch(
            `https://api.github.com/users/${user}`
        )
        const data = await res.json()
            setUserItems(data)
            //console.log(data, "user");
      }
      fetchUser()
      
    }, [user])
    
    
    return <>
    <Navbar onSearch={handleSearch} username={userItems.login} followers={userItems.followers} />
    <Routes>
                <Route path="/" element={!userItems ? <Loading /> : <OverviewPage items={userItems} />} />
                <Route
                    path="/repositories"
                    element={!userItems ? <Loading /> : (<div>
                        
                    <LayoutPage 
                    userItems={userItems} 
                    />
                       
                    </div>)}
                />
               
            </Routes>
    
    
    </>
}
export default Home;