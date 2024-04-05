import { useEffect, useState } from "react";


const Followers =(props)=>{
const [userItems, setUserItems] = useState([]);
const name = userItems.name;
console.log(name,"This is the Name You are looking for");

const image = props.info.avatar_url;
const username = props.info.login;

useEffect(() => {
    const fetchUser = async () => {
        try {
            const res = await fetch(
                `https://api.github.com/users/${username}`
            );
            if (!res.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await res.json();
            setUserItems(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            
        }
    };

    fetchUser();
}, [username]);


    return<>
    <ul className="lists followers-list">
        <li className="list-2">
    
            <img src={image} alt="" />
            <div>
            <h4>{name}</h4>   
            <p>{username}</p>
            </div>
        </li>
    </ul>
    </>
}

export default Followers;