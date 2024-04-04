import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { MdOutlineBook } from "react-icons/md";
import { Link } from "react-router-dom";




const NavbarPage =(props)=>{
    

    return <div className="container-nav">
      <div className="top-nav">
    <p><span><FaGithub/></span>{props.username}</p>
    <section className="search">
        <input className="search-input" type="text" name="search" id="search" />
        <span><CiSearch/></span>
    </section>
    </div>
    <nav className="bottom-nav">
        <ul className="navbar">
            <li><Link to="/"> <IoMdBook/>Overview</Link></li>
            <li><Link to='/repositories'><MdOutlineBook/> Repositories <span className="bold">{props.followers}</span></Link></li>
        </ul>
    </nav>
    </div>
   
    
}
export default NavbarPage;