import Elephant from "../assets/elephant.png";

const Followers =()=>{


    return<>
    <ul className="lists followers-list">
        <li className="list-2">
    
            <img src={Elephant} alt="" />
            <div>
            <h3>John Doe</h3>   
            <p>username</p>
            </div>
            
        </li>
        <li className="list-2">
    
            <img src={Elephant} alt="" />
            <div>
            <h3>John Doe</h3>   
            <p>username</p>
            </div>
        </li>
        <li className="list-2">
    
            <img src={Elephant} alt="" />
            <div>
            <h3>John Doe</h3>   
            <p>username</p>
            </div>
        </li>
    </ul>
    </>
}

export default Followers;