import Search from "./Search";
import { useState } from "react";


const WelcomePage = (props)=>{
    const [searchResults, setSearchResults] = useState([]);
    function handleSearch(searchText){
        setSearchResults(searchText);
        props.onSearch(searchText);
        
    }

    return<>
    <div className="welcome-page">
    
    <div>
    <h1>Find GitHub Users Easily with Our Search Engine!</h1>
        <span><Search onSearch={handleSearch}/></span>
    </div>
    </div>
    </>
}

export default WelcomePage;