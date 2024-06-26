//This is the Layout Page
//It's the main layout for the followers and the repositories page, 
//Here we are changing the component to repositories or followers based on the url.



import React, { useEffect, useState } from "react";
import Repositories from "./Repositories";
import User from "./User";
import Followers from "./Followers";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

//shorting repositories according to stars starts here

const sortRepositoriesByStars = (repositories, order) => {
    const sortedRepositories = [...repositories];
    
    sortedRepositories.sort((a, b) => {
      if (order === 'asc') {
        return a.stargazers_count - b.stargazers_count;
      } else {
        return b.stargazers_count - a.stargazers_count;
      }
    });
    
    return sortedRepositories;
  };

  


const LayoutPage = (props) => {
    const [followersInfo, setFollowersInfo]=useState([]);//Here we store the follower info
    const [repoItems, setRepoItems] = useState([]); //the information for the repository
    const [dataUser, setDataUser] = useState("?."); //I am passing down the username from Home component 
    const user = dataUser.login; //I have to create another user before I request anything from the API

//We pass the User info here from the Home component 

    useEffect(() => {
        setDataUser(props.userItems);
    }, [props.userItems]);

//Here we fetch the data for the repositories and the followers
//handling errors
useEffect(() => {
    const fetchRepos = async () => {
        if (dataUser) {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${user}/repos?per_page=16&sort=updated&type=public`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch repositories");
                }
                const data = await res.json();
                setRepoItems(data);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        }
    };

    const fetchFollowers = async () => {
        if (dataUser) {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${user}/followers`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch followers");
                }
                const data = await res.json();
                setFollowersInfo(data);
            } catch (error) {
                console.error("Error fetching followers:", error);
            }
        }
    };

    fetchFollowers();
    fetchRepos();
}, [user, dataUser]);

  //START HERE repository stars 
  const handleSortRepositories = (order) => {
    const sortedItems = sortRepositoriesByStars(repoItems, order);
    setRepoItems(sortedItems);
  };
    const { login, name, followers, avatar_url, location } = dataUser  || {};

    // Conditionally render different components based on the section parameter
    let sectionComponent;
    if (props.section === "followers") {
        sectionComponent = <span className="w-100">
        {followersInfo.map((data) => (
                    
                    <Followers 
                    key={data.id} 
                    info={data} />
                ))}
    </span>
    } else if(props.section === "repositories") {
        sectionComponent = (
        <span className="w-100">
             <span className="arrows shorting">
    <button onClick={() => handleSortRepositories("asc")} > 
        <IoIosArrowUp />
        </button>
    <button onClick={() => handleSortRepositories("desc")} >
         <IoIosArrowDown />
         </button>
    </span>
                {repoItems.map((repo,index) => (
                    
                    <Repositories 
                    key={repo.id} 
                    info={repo}
                    index={index}
                    totalItems={repoItems.length}
                    sortRepositories={handleSortRepositories}
                     />
                ))}
            </span>
        );
    }else{
        console.log("Its not working")
    }

    return (
        <div className="container">
            <div className="box-left">
                <User
                    location={location || ""}
                    username={login || ""}
                    name={name || ""}
                    image={avatar_url || ""}
                    followers={followers || ""}
                />
            </div>
            <div className="box-right">
                {sectionComponent}
            </div>
        </div>
    );
};

export default LayoutPage;
