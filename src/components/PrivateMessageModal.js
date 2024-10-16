import React, { useEffect, useState } from 'react'
import "./PrivateMessageModal.css"
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const PrivateMessageModal = () => {


    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center privateMessageModal'>
            {/* modal */}
            <div className='modalPrivateMessage p-[40px] flex flex-col w-[32%] rounded-lg relative'>
                <div className='crossInPrivate absolute top-[0px] right-[0px] mt-[10px] mr-[10px] rounded-lg w-fit p-[10px]'>
                    <IoMdClose className='crossIconInPrivate' fontSize={25} />
                </div>
                <h2 className='mb-[20px] text-[22px] font-semibold'>Send Message</h2>
                <input className='text-[#696969] mb-[16px] bg-[#f0f5f7] rounded-lg text-[15px] py-[15px] px-[20px]' placeholder='Your Name' />
                <textarea className='text-[#696969] mb-[16px] bg-[#f0f5f7] rounded-lg text-[15px] h-[160px] py-[15px] px-[20px]' placeholder='Message' />
                <button className='text-[15px] sendMessage rounded-lg font-semibold py-[15px] w-[100%]'>Send Message</button>
            </div>
        </div>
    )
}

export default PrivateMessageModal
