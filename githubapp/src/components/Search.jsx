import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({onSearch}) => {
    const [searchText, setSearchText] = useState("");
//here I am handling the search information so I can pass it on 

    const searchHandler = () => {
        if (searchText.trim() === "") {
            alert("Please enter a username");
            return;
        }
        onSearch(searchText);
        setSearchText("");
       console.log("searched", searchText);
        
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchHandler();
        }
    };
    

    return (
        <>
            <input
                className="search-input"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
                name="search"
                id="search"
            />
            <span>
                <button className="search-btn" onClick={searchHandler}><CiSearch /></button>
            </span>
        </>
    );
};

export default Search;
