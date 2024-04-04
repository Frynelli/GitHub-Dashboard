import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({onSearch}) => {
    const [searchText, setSearchText] = useState("");

    const searchHandler = () => {
        if (searchText.trim() === "") {
            alert("Please enter a username");
            return;
        }
        onSearch(searchText);
       console.log("searched", searchText);
        
    };
    

    return (
        <>
            <input
                className="search-input"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                name="search"
                id="search"
            />
            <span>
                <button onClick={searchHandler}><CiSearch /></button>
            </span>
        </>
    );
};

export default Search;
