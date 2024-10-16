import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./Footer.css"
import whiteLogo from "./harryPorter.png"

const Footer = () => {


    

    useEffect(() => {
        let var1 = document.querySelectorAll(".java");
        var1.forEach((data,index) => {
            // console.log(data);
            data.addEventListener(("mouseover"), () => {
                document.querySelectorAll(".browse")[index].style.width= "15px";
                document.querySelectorAll(".browse")[index].style.backgroundColor= "#246ccf";
                data.style.color = "#246ccf";
            })
            
        })

        var1.forEach((data, index) => {
            data.addEventListener(("mouseout"), () => {
                document.querySelectorAll(".browse")[index].style.width = "0px";
        document.querySelectorAll(".browse")[index].style.backgroundColor= "#aeb4bc";
                data.style.color = "#aeb4bc";
            })
        })
        
    }, [])


    function toTheTop() {
        window.scroll(0, 0);
    }

    



    

    return (
        <div className='bg-[#0c071b] text-white flex flex-col gap-10 z-10'>
            {/* First Part in Footer */}
            <div className='flex flex-col items-center justify-center p-[5rem] relative'>
                <img className='absolute left-[10px] bottom-[45px]' width={350} height={350} src='https://superio-reactjs.ibthemespro.com/images/index-11/footer/1.png' />
                <h2 className='text-[32px] font-semibold mb-[10px]'>Got a Question?</h2>
                <p className='text-[#efeff0]'>We are here to help. Check out our FAQs, send us an email or call us at 70188 88283</p>
            </div>

            {/* Second Part in Footer */}
            <div className='flex justify-between text-[13px] text-[#b7bdc5] px-[9rem] font-semibold mb-[50px] mt-[50px]'>
                <div className='leading-9 flex flex-col items-start relative bottom-[25px]'>
                    <Link to="/">
                        <img onClick={toTheTop} src={whiteLogo} width={154} height={50}/>
                    </Link>
                    <h2 className='text-[#ffffff] text-[1.1rem] font-bold pt-3'>Call us</h2>
                    <h2 className='text-[#ffffff] text-[1rem] font-bold leading-4 pb-5'>12345 67890</h2>
                    <p>413 4th Floor, Armstrong Hostel, Chitkara University</p>
                    <p>3015, Punjab</p>
                    <p>support@knockri.com</p>
                </div>
                {/* <div className='flex'> */}
                <div className='insideSecondPart leading-9 flex flex-col items-start w-[160px]'>
                    <h2 className='text-[#ffffff] text-[1.3rem] font-bold mb-[27px]'>For Candidates</h2>
                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/findjobs'>
                            <p>Browse Jobs</p>
                        </Link>
                    </div>
                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/candidates'>
                            <p>Browse Categories</p>
                        </Link>
                    </div>

                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/candidates'>
                            <p>Candidate Dashboard</p>
                        </Link>
                    </div>

                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/employers'>
                            <p>Job Alerts</p>
                        </Link>
                    </div>

                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/candidates'>
                            <p>My Bookmarks</p>
                        </Link>
                    </div>

                </div>
                <div className='insideSecondPart leading-9 flex flex-col items-start w-[150px]'>
                    <h2 className='text-[#ffffff] text-[1.3rem] font-bold mb-[27px]'>For Employers</h2>
                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/candidates'>
                            <p>Browse Candidates</p>
                        </Link>
                    </div>
                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/employers'>
                            <p>Employer Dashboard</p>
                        </Link>
                    </div>

                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/findjobs'>
                            <p>Add Job</p>
                        </Link>
                    </div>

                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/findjobs'>
                            <p>Job Packages</p>
                        </Link>
                    </div>      
                </div>
                <div className='insideSecondPart leading-9 flex flex-col items-start w-[150px]'>
                    <h2 className='text-[#ffffff] text-[1.3rem] font-bold mb-[22px]'>About Us</h2>
                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/findjobs'>
                            <p>Job Page</p>
                        </Link>
                    </div>
                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/findjobs'>
                            <p>Job Page Alternative</p>
                        </Link>
                    </div>
                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/about'>
                            <p>Resume Page</p>
                        </Link>
                    </div>

                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to='/candidates'>
                            <p>Blog</p>
                        </Link>
                    </div>

                    <div className='java flex items-center'>
                        <div className='browse w-[0px] mr-[0px] h-[2px] bg-white'></div>
                        <Link to="/about">
                            <p>Contact Us</p>
                        </Link>
                    </div> 
                   
                    
                    
                    
                    
                </div>
                {/* </div> */}
                <div className='leading-9 relative flex flex-col items-start'>
                    <h2 className='text-[#ffffff] text-[1.3rem] font-bold mb-[27px]'>Join Us On</h2>
                    <p className='mb-2'>We don't send spam so don't worry.</p>
                    <input placeholder='Email' className='rounded-md py-2 px-5 pr-[70px]'></input>
                    <div className='bg-[#1967d2] p-2 rounded-lg hover:cursor-pointer absolute bottom-[135px] right-[10px]'>
                        <CiMail fontSize={20} color="white" className='bg-[#1967d2] ' />
                    </div>

                </div>
            </div>

            {/* Disector */}
            {/* <div className='bg-[#221e30] h-[1px]'></div> */}

            {/* Third Part in Footer */}
            <div className='flex justify-between border-t border-[#292638]  py-8 px-[9rem]'>
                <div className='text-[#bbc1c9] text-[13px] font-semibold'>© 2024 Knockri by Kartik. All Right Reserved.</div>
                <div className='flex gap-7'>
                    <FaFacebook className='hover:cursor-pointer' color='#cad1d8' />
                    <FaTwitter className='hover:cursor-pointer' color='#cad1d8' />
                    <FaInstagram className='hover:cursor-pointer' color='#cad1d8' />
                    <FaLinkedin className='hover:cursor-pointer' color='#cad1d8' />

                </div>
            </div>
        </div>
    )
}

export default Footer
