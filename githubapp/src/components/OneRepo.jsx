import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";




const OneRepo=(props)=>{


    return<>
    <ul className="lists">
    <li>
        <span>
            <h3>{props.projectname}</h3>
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
export default OneRepo;