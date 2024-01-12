

import { Link, useNavigate } from "react-router-dom";
import logo from "../images/formease-logo.png"
import { IoIosNotificationsOutline } from "react-icons/io";
const Header=()=>{
    const navigate=useNavigate();
    const handleabout=()=>{
        navigate("/about");
    }
    return (
        
            <header className="flex  my-28 items-center shadow-md w-auto h-1">
                <div className="mx-16">
                    <img className="h-65 w-48"src={logo} alt="logo"/>
                </div>
                <div>
                    <ul className="flex -my-20">
                        <li className="px-4 text-bold cursor-pointer hover:text-blue-600"><Link to="/">Home</Link></li>
                        <li className="px-4 text-bold cursor-pointer hover:text-blue-600">Result</li>
                        <li className="px-4 text-bold cursor-pointer hover:text-blue-600">FAQ</li>
                        <li  className="px-4 text-bold cursor-pointer hover:text-blue-600"onClick={handleabout}>AboutUs</li>
                        <li className="px-4 text-bold cursor-pointer hover:text-blue-600">Contact US</li>
                    </ul>
                    <div className="mt-12 mx-[125%]">
                        <input className="border p-2 w-80 rounded-3xl"type="text" placeholder="Search exams here"/>
                    </div>
                    <div className=" ml-[215%] -m-8">
                        <IoIosNotificationsOutline className="w-9 h-7"/>   
                    </div>
                </div> 
              
        </header>
        
    )
}
export default Header;