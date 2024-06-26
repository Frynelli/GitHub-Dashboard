// This is the Home component, our main component 
//Here I am fetching data from the API about the user so I can ectract the
//inforamtion about the user we can search in the search component 

import { Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from "./NavbarPage";
import { useEffect, useState } from "react";
import OverviewPage from "./OverviewPage";
import LayoutPage from "./LayoutPage";
import WelcomePage from './WelcomePage';


const Home =()=>{
    const[error,setError]=useState(null);
    const [userItems, setUserItems] = useState([]);
    const [user, setUser] = useState("");// sets the user after search
    const navigate = useNavigate();
    
      //Here I am passing through the result information from the search input
      //and I am storing it to the User 
    function handleSearch(results){
        setUser(results);
    };

    //Here  I make a request to the Github API for the user data
    useEffect(() => {
        const fetchUser = async () => {
            let timeoutId;
          try {

            if (user.trim() !== '') {
                timeoutId = setTimeout(() => {
                    // Handle the timeout
                    console.log('Request timed out');
                    throw new Error('Request timed out');
                }, 10000); // 10 seconds timeout
                const res = await fetch(`https://api.github.com/users/${user}`);
                clearTimeout(timeoutId);
                if (!res.ok) {
                    if (res.status === 404) {
                        alert("The user does not exist.")
                        throw new Error('User not found');
                        
                    } else if (res.status === 403) {
                        alert("Try again later")
                        throw new Error('Access forbidden');
                    } else {
                        throw new Error(`Failed to fetch user data: ${res.status}`);
                    }
                }
                const data = await res.json();
                setUserItems(data);
                setError(null);
                // Use the navigate function to redirect to the '/overview' route
                navigate('/overview');
            }
        } catch (error) {
            console.error('Error fetching user data:', error.message);
            setError(error.message);
        }
        };
        fetchUser();
      }, [user]);
    
    
    return <>
    <Navbar 
    onSearch={handleSearch} 
    username={userItems.login} 
    followers={userItems.followers} 
    repos={userItems.public_repos} 
    />
    <Routes>
                
                <Route path="/" element={<WelcomePage onSearch={handleSearch}/>}/>
                <Route path="/overview" element={<OverviewPage items={userItems} />} />

                <Route
                    path="/repositories"
                    element={(<div>
                        
                    <LayoutPage 
                    section= 'repositories'
                    userItems={userItems} 
                    
                    />
                       
                    </div>)}
                />
                <Route
                    path="/followers"
                    element={(<div>
                        
                    <LayoutPage 
                    section="followers" 
                    userItems={userItems}
                    />
                       
                    </div>)}
                />
            </Routes>
    
    
    </>
}
export default Home;