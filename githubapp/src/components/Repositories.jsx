import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const Repositories=()=>{


    return<>
    <ul className="lists">
        <li>
            <span>
                <h2>Project1</h2>
            <p>Description of the project here</p>
            </span>
            <div className="star">
            <span >
             <FaRegStar/>
            </span>
            <span className="arrows">
             <IoIosArrowUp/>
             <IoIosArrowDown/>
            </span>
            </div>
        </li>
        <li>
            <span>
                <h2>Project2
                </h2>
            <p>Description of the project here</p>
            </span>
            <div className="star">
            <span >
             <FaRegStar/>
            </span>
            <span className="arrows">
             <IoIosArrowUp/>
             <IoIosArrowDown/>
            </span>
            </div>
        </li>
        <li>
            <span>
                <h2>Project3</h2>
            <p>Description of the project here</p>
            </span>
            <div className="star">
            <span >
             <FaRegStar/>
            </span>
            <span className="arrows">
             <IoIosArrowUp/>
             <IoIosArrowDown/>
            </span>
            </div>
        </li>
        <li>
            <span>
                <h2>Project4</h2>
            <p>Description of the project here</p>
            </span>
            <div className="star">
            <span >
             <FaRegStar/>
            </span>
            <span className="arrows">
             <IoIosArrowUp/>
             <IoIosArrowDown/>
            </span>
            </div>
        </li>
    </ul>
    </>
}

export default  Repositories;