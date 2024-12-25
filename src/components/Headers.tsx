import React from "react";
import { Link ,useLocation } from "react-router-dom"

interface HeadersProps {
  activeLink: string;
  onSetActiveLink: (link: string) => void;
  
}




const Headers: React.FC<HeadersProps> =({ activeLink, onSetActiveLink }) => {
  const location =useLocation();
  React.useEffect(()=>{
    onSetActiveLink(location.pathname);

  },[location,onSetActiveLink])
  return (
    

      < div className=" border-gray-200 "
      style={{ backgroundColor: "#FFF7E2" }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


          <span className="self-center text-2xl font-bold  whitespace-nowrap text-green-800  fa-fa">AMRUTAM</span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
             
              <button type="button" className=" font-medium shadow-lg  text-green-600 hover:text-white bg-yellow-70 border border-gray-700 px-6 py-2 rounded-lg hover:bg-green-800" 
                  
                 > Login </button>
              <button type="button" className="text-white bg-green-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-2 dark:bg-green-800 dark:hover:bg-green-600 " > Sign Up </button>
            </div>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link to="/" className={`block py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-dark dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"  ${activeLink==="/"  ? "text-green-500" : ""}`}
                  onClick={()=>onSetActiveLink("/")}>Home</Link>
              </li>
              <li>
                <Link to="/find"  className={`block py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-dark dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"   ${activeLink==="/find"  ? "text-green-500" : ""}`}
                      onClick={()=>onSetActiveLink("/find")} >Find Doctor</Link>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
              </li>

            </ul>
          </div>
        </div></div>

    
  )
}

export default Headers
