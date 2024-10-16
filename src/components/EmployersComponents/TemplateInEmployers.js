import React, { useEffect, useState } from 'react'
import { UNSAFE_FetchersContext, useLocation } from 'react-router-dom'
import "./TemplateInEmployers.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiBriefcase } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdDashboardCustomize } from 'react-icons/md';

const TemplateInEmployers = () => {

    const { state } = useLocation();
    const dataEmployers = state?.dataEmployers;
    const [navStatus, setNavStatus] = useState(false);



    useEffect(() => {
        let privateBtn = document.querySelector(".privateBtn");
        privateBtn.addEventListener("click", () => {
            setNavStatus(true);
            document.querySelector(".exceptModal").style.filter = "brightness(50%)";
            document.querySelector(".navbar").style.filter = "brightness(50%)";
            document.querySelector(".privateMessageModal").style.display = "flex";
        })

        let closeBtn = document.querySelector(".crossInPrivate");
        closeBtn.addEventListener("click", () => {
            document.querySelector(".exceptModal").style.filter = "brightness(100%)";
            document.querySelector(".navbar").style.filter = "brightness(100%)";
            document.querySelector(".privateMessageModal").style.display = "none";
        })

    }, [navStatus])


    function toTheTop() {
        window.scroll(0, 0);
    }

    return (

        <div className=' w-[100vw] mt-[90px]'>
            {/* upper box */}
            <div className='upperBox flex items-center justify-between text-left'>
                {/* left part */}
                <div className='flex items-center'>
                    {/* pic part */}
                    <div><img src={dataEmployers.image} height={100} width={100}></img></div>

                    {/* content */}
                    <div className='flex flex-col justify-center ml-[20px]'>
                        {/* name */}
                        <div className='text-[26px] font-semibold mb-[10px]'>{dataEmployers.companyName}</div>

                        {/* location npart */}
                        <div className='flex items-center gap-[15px] text-[#696969] mb-[10px] text-[14px]'>
                            <div className='flex items-center gap-[4px]'>
                                <CiLocationOn fontSize={22} />
                                <div>London, UK</div>
                            </div>
                            <div className='flex items-center gap-[4px]'>
                                <PiBriefcase fontSize={22} />
                                <div>Accounting / Finance</div>
                            </div>
                            <div className='flex items-center gap-[4px]'>
                                <IoCallOutline fontSize={22} />
                                <div>12345 67890</div>
                            </div>
                            <div className='flex items-center gap-[4px] lowercase'>
                                <CiMail fontSize={22} />
                                <div>info@{dataEmployers.companyName}.com</div>
                            </div>
                        </div>

                        {/* open jobvs */}
                        <div>
                            <div className='text-[14px] mr-[15px] py-[3px] px-[20px] w-fit rounded-full mb-[10px] bg-[#dce8f8] text-[#3177d6] font-semibold'>Open Jobs - {dataEmployers.jobsAvailable}</div>
                        </div>

                    </div>
                </div>

                {/* right part */}
                <div className='flex items-center gap-[15px]'>
                    {/* private button */}
                    <div><button className='text-[15px] privateBtn rounded-lg px-[55px] pt-[18px] pb-[15px] bg-[#1967d2] hover:bg-[#0146a6] text-white'>Private Message</button></div>
                    {/* bookmark */}
                    <div className='bookmarkInEmployers h-[50px] w-[50px] flex justify-center items-center rounded-lg'><FiBookmark fontSize={22} /></div>
                </div>
            </div>

            {/* Lower section */}
            <div className='px-[125px] text-left flex items-start pt-[50px] bg-white'>
                {/* left  */}
                <div className='w-[830px] mr-[30px]'>
                    <h2 className='text-[18px] mb-[20px] font-semibold'>About Company</h2>
                    <div className='text-[#696969] text-[15px] leading-[26px] mb-[26px]'>Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. It is the holding company for Moody’s Investors Service (MIS), an American credit rating agency, and Moody’s Analytics (MA), an American provider of financial analysis software and services.</div>
                    <div className='text-[#696969] text-[15px] leading-[26px] mb-[26px]'>
                        Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings. Moody’s was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate company that was listed on the NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, Moody’s Investors Service, the rating agency, and Moody’s Analytics, with all of its other products.
                    </div>


                    <div className='flex items-center justify-between wholeBox'>
                        <div className='singleBox overflow-hidden'><img src='https://superio-reactjs.ibthemespro.com/images/resource/employers-single-1.png'></img></div>
                        <div className='singleBox overflow-hidden'><img src='https://superio-reactjs.ibthemespro.com/images/resource/employers-single-2.png'></img></div>
                        <div className='singleBox overflow-hidden'><img src='https://superio-reactjs.ibthemespro.com/images/resource/employers-single-3.png'></img></div>
                        <div className='singleBox overflow-hidden'><img src='https://superio-reactjs.ibthemespro.com/images/resource/employers-single-4.png'></img></div>

                    </div>

                    <div className='text-[#696969] text-[15px] leading-[26px] mt-[26px] mb-[26px]'>Moody’s Corporation, often referred to as Moody’s, is an American business and financial services company. It is the holding company for Moody’s Investors Service (MIS), an American credit rating agency, and Moody’s Analytics (MA), an American provider of financial analysis software and services.
                    </div>
                    <div className='text-[#696969] text-[15px] leading-[26px] mb-[26px]'>Moody’s was founded by John Moody in 1909 to produce manuals of statistics related to stocks and bonds and bond ratings. Moody’s was acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off Moody’s Corporation as a separate company that was listed on the NYSE under MCO. In 2007, Moody’s Corporation was split into two operating divisions, Moody’s Investors Service, the rating agency, and Moody’s Analytics, with all of its other products.
                    </div>
                    <h2 className='text-[26px] mb-[10px] font-semibold'>3 Others jobs available</h2>
                    <p className='text-[15px] font-semibold text-[#696969] mb-[100px]'>2020 jobs live - 293 added today.</p>
                </div>

                {/* right */}
                <div className='p-[30px] w-[33%] bg-[#f5f7fc] rounded-lg font-semibold'>
                    <div className='flex justify-between'>
                        <div className='text-[16px] font-semibold mb-[16px] leading-[26px]'>Primary industry:</div>
                        <div className='text-[15px] text-[#696969]'>Software</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[16px] font-semibold mb-[16px] leading-[26px]'>Company size:</div>
                        <div className='text-[15px] text-[#696969] flex items-center gap-[15px]'>501-1,000</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[16px] font-semibold mb-[16px] leading-[26px]'>Founded in:</div>
                        <div className='text-[15px] text-[#696969] flex items-center gap-[15px]'>2011</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[16px] font-semibold mb-[16px] leading-[26px]'>Phone:</div>
                        <div className='text-[15px] text-[#696969] flex items-center gap-[15px]'>123 456 7890</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[16px] font-semibold mb-[16px] leading-[26px]'>Email:</div>
                        <div className='text-[15px] text-[#696969] flex items-center gap-[15px] lowercase'>info@{dataEmployers.companyName}.com</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[16px] font-semibold mb-[16px] leading-[26px]'>Location:</div>
                        <div className='text-[15px] text-[#696969] flex items-center gap-[15px]'>London, UK</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[16px] font-semibold mb-[16px] leading-[26px]'>Social media:</div>
                        <div className='text-[15px] text-[#696969] flex items-center gap-[15px]'>
                            <div><FaFacebookF /></div>
                            <div><FaTwitter /></div>
                            <div><FaInstagram /></div>
                            <div><FaLinkedinIn /></div>
                        </div>
                    </div>
                    <button onClick={toTheTop} className='lowercase domainBox w-[100%] bg-[#d4e1f6] text-[#2770d4] hover:bg-[#1967d2] hover:text-white rounded-lg py-[15px]' >www.{dataEmployers.companyName}.com</button>
                </div>
            </div>


        </div>
    )
}

export default TemplateInEmployers
