import { FaGithub } from "react-icons/fa";

import { IoMdBook } from "react-icons/io";
import { MdOutlineBook } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";




const NavbarPage =(props)=>{
    const [searchResults, setSearchResults] = useState([]);
    function handleSearch(searchText){
        setSearchResults(searchText);
        props.onSearch(searchText);
        
    }
    
   

    return <div className="container-nav">
      <div className="top-nav">
    <p><span><FaGithub/></span>{props.username}</p>
    <section className="search">
        <Search onSearch={handleSearch}/>
    </section>
    </div>
    <nav className="bottom-nav">
        <ul className="navbar">
            <li><Link to="/"> <IoMdBook/>Overview</Link></li>
            <li><Link to='/repositories'><MdOutlineBook/> Repositories <span className="bold p-side">{props.repos}</span></Link></li>
        </ul>
    </nav>
    </div>
   
    
}
export default NavbarPage;