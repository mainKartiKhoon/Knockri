import React, { useEffect, useState } from 'react'
import "./ApplyJobModal.css";
import { IoMdClose } from "react-icons/io";

const ApplyJobModal = () => {


    const [navStatus, setNavStatus] = useState(false);

    useEffect(() => {
        let applyButton = document.querySelector(".applyButton");
        applyButton.addEventListener("mouseover", () => {
            applyButton.style.backgroundColor = "#0146a6";
        })
        applyButton.addEventListener("mouseout", () => {
            applyButton.style.backgroundColor = "#1967d2";
        })


        // let cross = document.querySelector(".crossIcon");
        // cross.addEventListener("mouseover", () => {
        //     let crossIcon = document.querySelector(".crossIconApplyJob");
        //     cross.style.backgroundColor = "#1967d2";
        //     crossIcon.style.color = "white";
        // })
        // cross.addEventListener("mouseout", () => {
        //     let crossIcon = document.querySelector(".crossIconApplyJob");
        //     cross.style.backgroundColor = "#f0f5f7";
        //     crossIcon.style.color = "#020202";
        // })
    }, [])

    

    return (
        <div className='h-[100vh] flex flex-col items-center fullPageApplyJob'>
            {/* modal */}
            <div className='modalApplyJob rounded-lg flex flex-col items-center text-left w-[500px] h-[573px] p-[30px] px-[40px] relative'>

                {/* close modal */}
                <div className='crossIconApply absolute top-[0px] right-[0px] mt-[10px] mr-[10px] rounded-lg w-fit p-[10px]'>
                    <IoMdClose className='crossIconApplyJob' fontSize={25} />
                </div>

                {/* heading */}
                <h2 className='text-[22px] font-semibold mb-[25px]'>Apply for this job</h2>

                {/* Upload */}
                <div className='text-[14px] border-dashed border-[2px] w-[100%] text-center py-[30px] border-[#e4edf9] rounded-lg mb-[30px] text-[#77838f]'>
                    Upload CV (doc, docx, pdf)
                </div>

                {/* Textarea */}
                <textarea rows={5} cols={40} required placeholder='Message' className='textarea mb-[30px] text-[15px] text-[#696969] w-[100%] rounded-lg p-[20px]'></textarea>

                {/* Terms and Condition */}
                <div className='text-[14px] mb-[30px]'>

                    <label><input type='checkbox' name='checkboxApplyJob' className='checkbox mr-[10px]' />You accept our <span className='font-semibold hover:text-[#1451a4] transition-all duration-300 hover:cursor-pointer'>Terms and Conditions and Privacy Policy</span></label>
                </div>

                {/* Apply Job */}
                <button className='text-[15px] applyButton rounded-lg font-semibold py-[15px] w-[100%]'>Apply Job</button>
            </div>
        </div>
    )
}

export default ApplyJobModal
