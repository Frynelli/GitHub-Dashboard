//Repositories 

import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Repositories = ({ info  }) => {
  
  const { name, description, language, stargazers_count } = info;
 

  return (
    <>
    <ul className="lists">
      <li>
        <span>
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <br />
          <p className="language">
            <GoDotFill />
            {language}
          </p>
        </span>
        <div className="btn-repo">
        <div className="star">
          <span>{stargazers_count}</span>
          <span>
            <FaRegStar />
          </span>
        </div>
          </div>
      </li>
    </ul>
    </>
  );
 
};

export default Repositories;
