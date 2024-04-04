import React, { useEffect, useState } from "react";
import Repositories from "./Repositories";
import User from "./User";

const LayoutPage = (props) => {
    const [repoItems, setRepoItems] = useState([]);
    const [dataUser, setDataUser] = useState("");
    const user = dataUser.login;
    console.log(user)
console.log(repoItems)
    useEffect(() => {
        setDataUser(props.userItems);
    }, [props.userItems]);

    useEffect(() => {
        const fetchRepos = async () => {
            if (user) {
                const res = await fetch(
                    `https://api.github.com/users/${user}/repos?per_page=16&sort=updated`
                );
                const data = await res.json();
                setRepoItems(data);
               
            }
        };
        fetchRepos();
    }, [user]);

    const { login, name, followers, avatar_url, location } = dataUser;

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
                 {repoItems.map((repo) => (
                    <Repositories key={repo.id} info={repo} />
                ))} 
            </div>
        </div>
    );
};

export default LayoutPage;
