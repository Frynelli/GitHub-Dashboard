import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const Repositories=()=>{


    return<>
    <ul className="lists">
        <li>
            <span>
                <h3>Project1</h3>
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
                <h3>Project2
                </h3>
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
                <h3>Project3</h3>
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
                <h3>Project4</h3>
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