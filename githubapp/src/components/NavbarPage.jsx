import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { MdOutlineBook } from "react-icons/md";



const NavbarPage =()=>{

    return <div className="container-nav">
      <div className="top-nav">
    <p><span><FaGithub/></span>Username</p>
    <section className="search">
        <input className="search-input" type="text" name="search" id="search" />
        <span><CiSearch/></span>
    </section>
    </div>
    <nav className="bottom-nav">
        <ul className="navbar">
            <li><a href="#overview"> <IoMdBook/>Overview</a></li>
            <li><a href="#repositories"><MdOutlineBook/> Repositories <span className="bold">100</span></a></li>
        </ul>
    </nav>
    </div>
   
    
}
export default NavbarPage;