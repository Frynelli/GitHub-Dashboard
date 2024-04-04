import { Fragment, useState } from "react"
import { useParams } from "react-router-dom"
import OneRepo from "./OneRepo"
import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
//import AllLists from "./AllLists";

const Repositories=(props)=>{

const projectName = props.info.name;
const description = props.info.description;
const language = props.info.language;
const numberOfStars = props.info.stargazers_count;




    return<Fragment>
          <ul className="lists">
    <li>
        <span>
            <h3>{projectName}</h3>
        <p className="description">{description}</p><br/>
        <p className="language">{language}</p>
        </span>
        <div className="star">
            <span>{numberOfStars}</span>
        <span >
         <FaRegStar/>
        </span>
        <span className="arrows">
         <button><IoIosArrowUp/></button>
         <button><IoIosArrowDown/></button>
         
        </span>
        </div>
    </li>
</ul>
    </Fragment>
    
    
}

export default  Repositories;