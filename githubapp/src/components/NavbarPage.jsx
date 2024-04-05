//This is the Nav Bar I Have the Links that set the url and connected it 
//with the corresponding components

import { FaGithub } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { MdOutlineBook } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";




const NavbarPage =(props)=>{
    // I want to start showing the search and the links after the initial search result
    const [showSearch, setShowSearch] = useState(false);
    
    //this is to get the result information back to Home component
    const [searchResults, setSearchResults] = useState([]);
    
    function handleSearch(searchText){    
        setSearchResults(searchText);
        props.onSearch(searchText);
        setShowSearch(true);
        console.log("its working")
        
    }
    //console.log(searchResults,"search results next to show")
    //console.log(showSearch,"This is show")
    
   

    return <div className="container-nav">
      <div className="top-nav">
    <p><span><FaGithub/></span>{props.username}</p>
    {!showSearch && (
        <section className="search">
        <Search onSearch={handleSearch}/>
    </section>
    )}
    
    </div>
    <nav className="bottom-nav">
        <ul className="navbar">
            <li><Link to="/overview"> <IoMdBook/>Overview</Link></li>
            <li><Link to='/repositories'><MdOutlineBook/> Repositories </Link><span className="bold p-side">{props.repos}</span></li>
        </ul>
    </nav>
    </div>
   
    
}
export default NavbarPage;