import React from 'react'
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";
import "../components/Navbar.css"
import { useState, useEffect } from 'react';
import whiteLogo from "./harryPorter.png"
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import profilePicture from "./profilePicture.webp";
import { FaCircleInfo } from "react-icons/fa6";


const Navbar = () => {

    const navigate = useNavigate();


    function scrollToTop() {
        window.scroll(0, 0);
    }

    return (

        //! Navbar
        <nav className={`navbar z-40 absolute top-0 w-[100%] transition-colors duration-500 flex items-center justify-between py-[0px] px-[55px] font-semibold sticky-navbar border-red-500  text-white `}>

            {/* //? Logo In Navbar   */}
            <div onClick={scrollToTop}>
                <Link to="/">
                    <img src={whiteLogo} width={154} height={50} className='imageInNavbar'></img>
                </Link>
            </div>

            {/* //? List In Navbar */}
            <ul className='flex text-[14px] gap-8'>
                <li onClick={() => {
                }}>
                    <NavLink to="/" className='flex  gap-[5px] items-center hover:scale-[1.1] transition-all duration-200'><IoMdHome fontSize={20} className='' />Home</NavLink>
                </li>
                <li onClick={() => {
                }}>
                    <NavLink to="/findjobs" className='flex gap-[5px] items-center  hover:scale-[1.1] transition-all duration-200'><FaSearch fontSize={20} className='' />Find Jobs</NavLink>
                </li>
                <li onClick={() => {
                }}>
                    <NavLink to="/employers" className='flex gap-[5px] items-center  hover:scale-[1.1] transition-all duration-200'><FaBuilding fontSize={20}  />Employers</NavLink>
                </li>
                <li onClick={() => {
                }}>
                    <NavLink to="/candidates" className='flex gap-[5px] items-center  hover:scale-[1.1] transition-all duration-200'><FaUsers fontSize={22} />Candidates</NavLink>
                </li>

                <li onClick={() => {
                }}>
                    <NavLink to="/about" className='flex gap-[5px] items-center  hover:scale-[1.1] transition-all duration-200'><FaCircleInfo fontSize={20} />About Us</NavLink>
                </li>
            </ul>

            {/* //? Buttons In Navbar */}
            <div className='text-[14px]'>
                {/* #e2eaf8 */}
                <button className={`loginRegisterButton p-2 px-6 rounded-lg font-semibold loginBtn bg-[#e2eaf8] text-[#2a72d5] hover:text-white  hover:bg-[#0146a6] `}>
                    <div className=''>Login / Register</div>
                </button>
                <button className='altOfLoginRegisterButton'>
                    <div className=' flex items-center gap-[10px] mr-[5px]'><img src={profilePicture} width={50} height={50} />Welcome</div>
                </button>

                {/* #4686df */}
            </div>


        </nav>
    )
}

export default Navbar
