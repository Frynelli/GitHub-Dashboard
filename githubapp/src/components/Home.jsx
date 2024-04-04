import Layout from "./LayoutPage";
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Navbar from "./NavbarPage";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import OverviewPage from "./OverviewPage";

const Home =()=>{
    const [items, setItems] = useState([])
    const [user] = useState("Fabien")
  
    useEffect(() => {
      const fetchRepos = async () => {
        const res = await fetch(
          `https://api.github.com/users/${user}`
        )
        const data = await res.json()
        setItems(data)
        console.log(data)
      }
  
      fetchRepos()
    }, [user])
    return <>
    <Navbar username={items.login} followers={items.followers} />
    <Routes>
                <Route path="/" element={!items ? <Loading /> : <OverviewPage />} />
                <Route
                    path="/repositories"
                    element={!items ? <Loading /> : <Layout items={items} />}
                />
            </Routes>
    
    
    </>
}
export default Home;