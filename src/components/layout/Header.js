import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "../sections/Search";

const Header = () => {
 const [darktheme,setDarkTheme] = useState(false)
 const [search,setSearch] = useState(true)

 useEffect(()=>{
  if(darktheme){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")
  }
 },[darktheme])
  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl p-4">
        <Link
          to="/"
         className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="CodeBook" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CodeBook
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <span onClick={()=>setDarkTheme(!darktheme)} className=" cursor-pointer text-xl dark:text-white bi bi-gear-wide-connected"></span>

          <span onClick={()=>setSearch(!search)} className=" cursor-pointer text-xl dark:text-white bi bi-search "></span>
          <Link className=" text-xl dark:text-white mr-5">
            <span className="bi bi-cart-fill relative">
              <span
                className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2
                 dark:border-gray-900"
              >
                0
              </span>
            </span>
          </Link>
          <span className="cursor-pointer bi bi-person-circle text-xl dark:text-white"></span>
        </div>
      </div> 
    {search && <Search/>}

    </nav>

    
  );
};

export default Header;
