import React, { useEffect, useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./Modal.css"
import { IoMdClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";

const Modal = () => {
    const [navStatus, setNavStatus] = useState(false);
    const [navStatusRegister, setNavRegisterStatus] = useState(false);
    const [selectedRole, setSelectedRole] = useState("candidate");
    const [usernameInputInRegister, setUsernameInputInRegister] = useState("");
    const [passwordInputInRegister, setPasswordInputInRegister] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingRegister, setLoadingRegister] = useState(false);
    const [successMessageRegister, setSuccessMessageRegister] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    const selectRole = (role) => {
        setSelectedRole(role);
    }    

    useEffect(() => {
        let loginButton = document.querySelector(".loggin");
        loginButton.addEventListener(("mouseover"), () => {
            loginButton.style.backgroundColor = "#0146a6";
        })

        loginButton.addEventListener(("mouseout"), () => {
            loginButton.style.backgroundColor = "#1967d2";
        })

        let registerButton = document.querySelector(".register");
        registerButton.addEventListener(("mouseover"), () => {
            registerButton.style.backgroundColor = "#0146a6";
        })

        registerButton.addEventListener(("mouseout"), () => {
            registerButton.style.backgroundColor = "#1967d2";
        })


        let cross = document.querySelector(".cross");
        let crossIcon = document.querySelector(".crossIcon");
        cross.addEventListener("mouseover", () => {
            cross.style.backgroundColor = "#1967d2";
            crossIcon.style.fill = "white";
        })
        cross.addEventListener("mouseout", () => {
            cross.style.backgroundColor = "#f0f5f7";
            crossIcon.style.fill = "#020202";
        })
        let crossRegister = document.querySelector(".crossRegister");
        let crossIconRegister = document.querySelector(".crossIconRegister");
        crossRegister.addEventListener("mouseover", () => {
            crossRegister.style.backgroundColor = "#1967d2";
            crossIconRegister.style.fill = "white";
        })
        crossRegister.addEventListener("mouseout", () => {
            crossRegister.style.backgroundColor = "#f0f5f7";
            crossIconRegister.style.fill = "#020202";
        })

    }, [])

    useEffect(() => {
        let button = document.querySelector(".loginBtn");
        button.addEventListener("click", () => {
            setNavStatus(true);
            document.querySelector(".exceptModal").style.filter = "brightness(50%)";
            document.querySelector(".navbar").style.filter = "brightness(50%)";
            document.querySelector(".fullpage").style.display = "flex";
        })

        let closeButton = document.querySelector(".close-btn")
        closeButton.addEventListener("click", () => {
            setNavStatus(false);
            document.querySelector(".exceptModal").style.filter = "brightness(100%)";
            document.querySelector(".navbar").style.filter = "brightness(100%)";
            document.querySelector(".fullpage").style.display = "none";
            document.getElementById('usernameInput').value = ''
            document.getElementById('passwordInput').value = ''
        })
    }, [navStatus])

    useEffect(() => {
        let button = document.querySelector(".loginBtn");
        button.addEventListener("click", () => {
            setNavStatus(true);
            document.querySelector(".exceptModal").style.filter = "brightness(50%)";
            document.querySelector(".navbar").style.filter = "brightness(50%)";
            document.querySelector(".fullpage").style.display = "flex";
        })
        let closeButtonRegister = document.querySelector(".close-btnRegister")
        closeButtonRegister.addEventListener("click", () => {
            setNavRegisterStatus(false);
            document.querySelector(".exceptModal").style.filter = "brightness(100%)";
            document.querySelector(".navbar").style.filter = "brightness(100%)";
            document.querySelector(".fullpage").style.display = "none";
        })
    }, [navStatusRegister])

    function alreadyHandler() {
        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".modalRegister").style.display = "none";

    }

    function dontHaveAccountHandler() {
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".modalRegister").style.display = "flex";
    }

    function registerHandler() {
        setLoadingRegister(true);
        setTimeout(() => {
            setLoadingRegister(false);
            setSuccessMessageRegister("Registered Successfully!");
            document.querySelector(".register").style.backgroundColor = "#6fda44";
        }, 3000);

    }

    function loginHandler() {
        let username = document.getElementById("usernameInputLogin").value;
        let password = document.getElementById("passwordInputLogin").value;
        
        let confirmation = (username === usernameInputInRegister) && (password === passwordInputInRegister);
        if (confirmation) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSuccessMessage("Logged In Successfully!");
                document.querySelector(".loggin").style.backgroundColor = "#6fda44";
                document.querySelector(".loginRegisterButton").style.display = "none";
                document.querySelector(".altOfLoginRegisterButton").style.display = "flex";
            }, 3000);
        }
        else {
            alert('Invalid Username or Password');
        }
    }

    return (
        <div className='h-[100vh] flex flex-col items-center fullpage'>

            {/* Login Page */}
            <div className='modal rounded-lg flex flex-col text-left w-[500px] p-[30px] px-[40px] relative'>

                {/* close modal */}
                <div className='bg-[#f0f5f7] cross absolute top-[0px] right-[0px] mt-[10px] mr-[10px] rounded-lg w-fit p-[10px] close-btn'>
                    <IoMdClose className='crossIcon ' color='#020202' fontSize={25} />
                </div>

                {/* heading */}
                <h2 className='text-[24px] font-semibold text-[#202124] mb-[32px] text-center'>Login to Knockri</h2>

                {/* entering username and password */}
                <div className='username mb-[10px] text-[15px] text-[#202124] font-semibold hover:cursor-default'>Username</div>
                <input type='text' id='usernameInputLogin' placeholder='Username' className='bg-[#f0f5f7] pl-[20px] mb-[20px] p-4 rounded-md'></input>
                <div className='password mb-[10px] text-[15px] text-[#202124] font-semibold hover:cursor-default'>Password</div>
                <input type='password' id='passwordInputLogin' placeholder='Password' className='bg-[#f0f5f7] pl-[20px] mb-[30px] p-4 rounded-md'></input>

                {/* confirmation */}
                <div className='flex items-center justify-between mt-[10px]'>
                    {/* remember me? */}
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' id='checkBox'></input>
                        <div className='text-[#6d6d6d] text-[14px] font-semibold '>
                            <label htmlFor="checkBox" className='hover:cursor-pointer'>Remember me</label></div>
                    </div>

                    {/* forgot password */}
                    <div className='text-black text-[14px] hover:underline hover:cursor-pointer' >Forgot password?</div>
                </div>

                <button
                onClick={loading ? null : loginHandler}
                    className={`py-4 mb-[20px] px-5 mt-[35px] bg-[#1967d2] text-white text-[15px] rounded-lg loggin`}
                >
                    {loading ? "Loading..." : successMessage || "Log In" }
                </button>

                {/* signup request */}
                <div className='text-center mb-[10px] text-[14px] text-[#747474]'>Don't have an account? <span onClick={dontHaveAccountHandler} className='font-semibold hover:cursor-pointer hover:text-[#1e6ad3] transition-all duration-150 ease-in-out'>Signup</span></div>

                {/* or block */}
                <div className='flex items-center gap-[25px] justify-center'>
                    <div className='w-[175px] h-[1px] bg-[#eeeff3]'></div>
                    <div className='text-[#717171]'>or</div>
                    <div className='w-[175px] h-[1px] bg-[#eeeff3]'></div>
                </div>

                {/* social buttons */}
                <div className='flex items-center justify-between mt-[30px] mb-[10px]'>
                    <div className='flex items-center gap-[10px] border border-[#3b5998] rounded-lg py-3 px-5 facebook'>
                        {/* logo */}
                        <FaFacebookF fontSize={16} className='face' />
                        {/* name */}
                        <p className='text-[#3b5998] text-[14px] mr-[5px] font-semibold'>Log In via Facebook</p>
                    </div>
                    <div className='flex items-center gap-[10px] border border-[#dc4d28] rounded-lg py-3 px-5 pl-[34px] google'>
                        {/* logo */}
                        <FaGoogle fontSize={16} className='goog' />
                        {/* name */}
                        <p className='text-[#dc4d28] text-[14px] mr-[15px] font-semibold'>Log In via Gmail</p>
                    </div>
                </div>

                {/* overlay */}
                <div className='overlay'></div>


            </div>











            {/* Register Page */}
            <div className='modalRegister rounded-lg flex flex-col text-left w-[500px] p-[30px] px-[40px] relative'>

                {/* close modal */}

                <div className='bg-[#f0f5f7] crossRegister absolute top-[0px] right-[0px] mt-[10px] mr-[10px] rounded-lg w-fit p-[10px] close-btnRegister'>
                    <IoMdClose className='crossIconRegister ' color='#020202' fontSize={25} />
                </div>

                {/* heading */}
                <h2 className='text-[24px] font-semibold text-[#202124] mb-[32px] text-center'>Create a Free Knockri Account</h2>

                {/* buttons */}
                <div className='buttonInRegister text-[16px] leading-[20px]  flex items-center justify-between mb-[25px]'>
                    <button
                        className={` flex candidateButton items-center gap-[10px] rounded-lg py-[15px] px-[50px] ${selectedRole === 'candidate' ? 'bg-[#34a853] text-white' : 'bg-[#e2eaf8] text-[#1e6ad3] hover:bg-[#1e6ad3] hover:text-[#e2eaf8]'} `}
                        onClick={() => selectRole("candidate")}
                    >
                        <FaRegUser />
                        <div>Candidate</div>
                    </button>
                    <button
                        className={` flex employerButton items-center gap-[10px]  rounded-lg py-[15px] px-[50px] ${selectedRole === 'employer' ? 'bg-[#34a853] text-white' : 'bg-[#e2eaf8] text-[#1e6ad3] hover:bg-[#1e6ad3] hover:text-[#e2eaf8]'}`}
                        onClick={() => selectRole("employer")}
                    >
                        <FaBuildingUser />
                        <div>Employer</div>
                    </button>
                </div>

                {/* entering username and password */}
                <div id='usernameRegister' className='username text-[15px] text-[#202124] font-semibold hover:cursor-default'>Username</div>
                <input
                    type='text'
                    id='usernameInput'
                    placeholder='Username'
                    className='bg-[#f0f5f7] pl-[20px] mb-[20px] p-4 rounded-md'
                    value={usernameInputInRegister}
                    onChange={(e) => setUsernameInputInRegister(e.target.value)}
                />
                <div className='password mb-[10px] text-[15px] text-[#202124] font-semibold hover:cursor-default'>Password</div>
                <input
                    type='password'
                    id='passwordInput'
                    placeholder='Password'
                    className='bg-[#f0f5f7] pl-[20px] mb-[30px] p-4 rounded-md'
                    value={passwordInputInRegister}
                    onChange={(e) => setPasswordInputInRegister(e.target.value)}
                />

                {/* login button */}
                <button
                onClick={loadingRegister ? null : registerHandler}
                    className={`py-4 mb-[20px] px-5 mt-[0px] bg-[#1967d2] text-white text-[15px] rounded-lg register`}
                >
                    {loadingRegister ? "Loading..." : successMessageRegister || "Register" }
                </button>

                {/* signup request */}
                <div className='text-center mb-[10px] text-[14px] text-[#747474]'>Already have an account? <span onClick={alreadyHandler} className='font-semibold hover:cursor-pointer hover:text-[#1e6ad3] transition-all duration-150 ease-in-out'>LogIn</span></div>

                {/* or block */}
                <div className='flex items-center gap-[25px] justify-center'>
                    <div className='w-[175px] h-[1px] bg-[#eeeff3]'></div>
                    <div className='text-[#717171]'>or</div>
                    <div className='w-[175px] h-[1px] bg-[#eeeff3]'></div>
                </div>

                {/* social buttons */}
                <div className='flex items-center justify-between mt-[30px] mb-[10px]'>
                    <div className='flex items-center gap-[10px] border border-[#3b5998] rounded-lg py-3 px-5 facebook'>
                        {/* logo */}
                        <FaFacebookF fontSize={16} className='face' />
                        {/* name */}
                        <p className='text-[#3b5998] text-[14px] mr-[5px] font-semibold'>Log In via Facebook</p>
                    </div>
                    <div className='flex items-center gap-[10px] border border-[#dc4d28] rounded-lg py-3 px-5 pl-[34px] google'>
                        {/* logo */}
                        <FaGoogle fontSize={16} className='goog' />
                        {/* name */}
                        <p className='text-[#dc4d28] text-[14px] mr-[15px] font-semibold'>Log In via Gmail</p>
                    </div>
                </div>

                {/* overlay */}
                <div className='overlay'></div>

            </div>
        </div>

    )
}

export default Modal
