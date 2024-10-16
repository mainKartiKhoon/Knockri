import React, { useEffect, useState } from 'react'
import "./TemplateInFindJobs.css"
import { useLocation } from 'react-router-dom'
import { PiBriefcase } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoHourglassOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoTimerOutline } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";


const TemplateInFindJobs = () => {

  // let job = props.job;
  const { state } = useLocation();
  const job = state?.job;
  const [navStatus, setNavStatus] = useState(false);


  function toTheTop() {
    window.scroll(0, 0);
  }





  useEffect(() => {
    let button1 = document.querySelector(".applyForJob");
    button1.addEventListener("click", () => {
      setNavStatus(true);
      document.querySelector(".exceptModal").style.filter = "brightness(50%)";
      document.querySelector(".navbar").style.filter = "brightness(50%)";
      document.querySelector(".fullPageApplyJob").style.display = "flex";
      // document.querySelector(".navbar").style.position = "fixed";
    })

    let closeButton1 = document.querySelector(".crossIconApply")
    closeButton1.addEventListener("click", () => {
      setNavStatus(false);
      document.querySelector(".exceptModal").style.filter = "brightness(100%)";
      document.querySelector(".navbar").style.filter = "brightness(100%)";
      document.querySelector(".fullPageApplyJob").style.display = "none";
      // document.querySelector(".navbar").style.position = "absolute";


    })
  }, [navStatus])

  return (
    <div className='border-2  bg-white'>
      <div className='mt-[160px] mx-[120px] mb-[120px] flex bg-white'>
        {/* Left Half */}
        <div className='w-[62vw] pr-[15px]'>
          {/* Card */}
          <div className='flex items-center mb-[30px] text-left'>
            {/* image */}
            <div className='mr-[25px]'>
              <img src={job.image} className=''></img>
            </div>

            {/* rest content */}
            <div>
              {/* heading */}
              <h2 className='text-[26px] font-semibold mb-[10px]'>{job.job}</h2>

              {/* job info */}
              <div className='flex items-center text-[13px] text-[#666666] gap-[15px]  mb-[10px]'>
                {/* company name */}
                <div className='flex items-center gap-[6px] '>
                  <div><PiBriefcase fontSize={22} /></div>
                  <div>{job.companyName}</div>
                </div>

                {/* location */}
                <div className='flex items-center gap-[6px]'>
                  <div><CiLocationOn fontSize={22} /></div>
                  <div>London, UK</div>
                </div>

                {/* time uploaded */}
                <div className='flex items-center gap-[6px]'>
                  <div><IoMdTime fontSize={22} /></div>
                  <div>11 hours ago</div>
                </div>

                {/* salary */}
                <div className='flex items-center gap-[6px]'>
                  <div><FaMoneyBillAlt fontSize={22} /></div>
                  <div>$35k - $45k</div>
                </div>
              </div>

              {/* colorful ovals */}
              <div className='flex items-center gap-[19px]'>

                {/* job type */}
                {
                  job.jobType ? (<div className='text-[13px] text-[#3177d6] bg-[#dce8f8] pt-[3px] pb-[3px] px-[15px] pl-[20px] font-semibold rounded-full'>{job.jobType}</div>) : ('')
                }

                {/* job category */}
                {
                  job.category ? (<div className='text-[13px] text-[#34a853] bg-[#e0f2e5] pt-[3px] pb-[3px] px-[15px] pl-[20px] font-semibold rounded-full'>{job.category}</div>) : ('')
                }

                {/* job time */}
                {
                  job.time ? (<div className=' text-[13px] text-[#f9ae0a] bg-[#fef3d9] pt-[3px] pb-[3px] px-[15px] pl-[20px] font-semibold rounded-full'>{job.time}</div>) : ('')
                }

              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className='text-left'>
            {/* heading */}
            <h2 className='text-[18px] font-semibold mb-[20px]'>Job Description</h2>

            {/* para */}
            <p className='text-[14px] text-[#5d5d5d] leading-[26px] font-medium mb-[25px]'>As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
          </div>

          {/* Key Responsibilites */}
          <div className='text-left mb-[45px]'>
            {/* heading */}
            <h2 className='text-[18px] font-semibold mb-[20px]'>Key Responsibilities</h2>

            {/* List */}
            <ul className='text-[14px] text-[#5d5d5d] leading-[26px] font-medium list-disc ml-[10px]'>
              <li className='mb-[25px] pl-[10px]'>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</li>
              <li className='mb-[25px] pl-[10px]'>Work with BAs, product managers and tech teams to lead the Product Design</li>
              <li className='mb-[25px] pl-[10px]'>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li>
              <li className='mb-[25px] pl-[10px]'>Accurately estimate design tickets during planning sessions.</li>
              <li className='mb-[25px] pl-[10px]'>Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.</li>
              <li className='mb-[25px] pl-[10px]'>Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.</li>
              <li className='mb-[25px] pl-[10px]'>Design pixel perfect responsive UIs and understand that adopting common interface patterns is better for UX than reinventing the wheel</li>
              <li className='mb-[25px] pl-[10px]'>Present your work to the wider business at Show & Tell sessions.</li>
            </ul>
          </div>

          {/* Skills & Experience */}
          <div className='text-left'>
            {/* heading */}
            <h2 className='text-[18px] font-semibold mb-[20px]'>Skill & Experience</h2>

            {/* list */}
            <ul className='text-[14px] text-[#5d5d5d] leading-[26px] font-medium list-disc ml-[10px]'>
              <li className='mb-[25px] pl-[10px]'>You have at least 3 years experience working as a Product Designer.</li>
              <li className='mb-[25px] pl-[10px]'>You have experience using Sketch and InVision or Framer X</li>
              <li className='mb-[25px] pl-[10px]'>You have some previous experience working in an agile environment – Think two-week sprints.</li>
              <li className='mb-[50px] pl-[10px]'>You are familiar using Jira and Confluence in your workflow</li>
            </ul>
          </div>

          {/* Share Part */}
          <div className='flex text-[16px] items-center gap-[10px]'>
            <div className='font-semibold mr-[10px]'>Share this job</div>
            <div className='flex items-center bg-[#3b5998] rounded-lg py-[10px] px-[20px] hover:opacity-[0.8] duration-300 hover:cursor-pointer'>
              <div><FaFacebookF color='white' /></div>
              <div className='text-white text-[14px] ml-[5px] '>Facebook</div>
            </div>
            <div className='flex items-center bg-[#55acee] rounded-lg py-[10px] px-[20px] hover:opacity-[0.8] duration-300 hover:cursor-pointer'>
              <div><FaTwitter color='white' /></div>
              <div className='text-white text-[14px] ml-[5px] '>Twitter</div>
            </div>
            <div className='flex items-center bg-[#007bb5] rounded-lg py-[10px] px-[20px] hover:opacity-[0.8] duration-300 hover:cursor-pointer'>
              <div><FaLinkedin color='white' /></div>
              <div className='text-white text-[14px] ml-[5px] '>LinkedIn</div>
            </div>
          </div>

          {/* Related Jobs */}
          <div className='text-left'>
            {/* heading */}
            <h2 className='text-[26px] font-semibold mb-[10px] mt-[55px]'>Related Jobs</h2>

            {/* para */}
            <p className='text-[14px] text-[#5d5d5d]'>2020 jobs live - 293 added today.</p>

          </div>
        </div >

        {/* Right Half */}
        <div className='w-[29vw]'>

          {/* ApplyForJob */}
          <div className='flex items-center justify-center mb-[18px]'>
            <div className='text-[15px] bg-[#1967d2] w-[330px] mr-[20px] text-white py-[16px] rounded-lg font-semibold hover:bg-[#0146a6] transition-all duration-200 hover:cursor-pointer applyForJob'>Apply For Job</div>
            <div className='p-[15px] rounded-lg  bg-[#eef4fc] text-[#1967d2] hover:bg-[#1967d2] hover:cursor-pointer hover:text-white transition-all duration-200'><FiBookmark fontSize={22} /></div>
          </div>

          {/* Big Middle Part */}
          <div className='bg-[#f5f7fc] rounded-lg text-left p-[23px]'>
            {/* Job OVerview */}
            <div>
              {/* heading */}
              <div className='text-[18px] font-semibold'>Job Overview</div>

              {/* rest part */}
              <div className='flex flex-col gap-[38px]'>

                {/* calender */}
                <div className='flex items-center gap-[25px] leading-[22px] mt-[20px]'>
                  {/* icon */}
                  <div><CiCalendar color="#1967d2" fontSize={26} /></div>

                  {/* rest info */}
                  <div>
                    {/* heading */}
                    <div className='text-[16px] font-semibold'>Date Posted:</div>

                    {/* info */}
                    <div className='text-[14px] text-[#282828]'>Posted 1 hour ago</div>
                  </div>
                </div>


                {/* calender */}
                <div className='flex items-center gap-[25px] leading-[22px]'>
                  {/* icon */}
                  <div><IoHourglassOutline color="#1967d2" fontSize={26} /></div>

                  {/* rest info */}
                  <div>
                    {/* heading */}
                    <div className='text-[16px] font-semibold'>Expiration date:</div>

                    {/* info */}
                    <div className='text-[14px] text-[#282828]'>April 06, 2021</div>
                  </div>
                </div>


                {/* calender */}
                <div className='flex items-center gap-[25px] leading-[22px]'>
                  {/* icon */}
                  <div><CiLocationOn color="#1967d2" fontSize={26} /></div>

                  {/* rest info */}
                  <div>
                    {/* heading */}
                    <div className='text-[16px] font-semibold'>Location:</div>

                    {/* info */}
                    <div className='text-[14px] text-[#282828]'>London, UK</div>
                  </div>
                </div>


                {/* calender */}
                <div className='flex items-center gap-[25px] leading-[22px]'>
                  {/* icon */}
                  <div><VscAccount color="#1967d2" fontSize={26} /></div>

                  {/* rest info */}
                  <div>
                    {/* heading */}
                    <div className='text-[16px] font-semibold'>Job Title:</div>

                    {/* info */}
                    <div className='text-[14px] text-[#282828]'>Designer</div>
                  </div>
                </div>


                {/* calender */}
                <div className='flex items-center gap-[25px] leading-[22px]'>
                  {/* icon */}
                  <div><IoTimerOutline color="#1967d2" fontSize={26} /></div>

                  {/* rest info */}
                  <div>
                    {/* heading */}
                    <div className='text-[16px] font-semibold'>Hours:</div>

                    {/* info */}
                    <div className='text-[14px] text-[#282828]'>50h / week</div>
                  </div>
                </div>


                {/* calender */}
                <div className='flex items-center gap-[25px] leading-[22px]'>
                  {/* icon */}
                  <div><GiTwoCoins color="#1967d2" fontSize={26} /></div>

                  {/* rest info */}
                  <div>
                    {/* heading */}
                    <div className='text-[16px] font-semibold'>Rate:</div>

                    {/* info */}
                    <div className='text-[14px] text-[#282828]'>$15 - $25 / hour</div>
                  </div>
                </div>


                {/* calender */}
                <div className='flex items-center gap-[25px] leading-[22px]'>
                  {/* icon */}
                  <div><LiaMoneyBillWaveAltSolid color="#1967d2" fontSize={26} /></div>

                  {/* rest info */}
                  <div>
                    {/* heading */}
                    <div className='text-[16px] font-semibold'>Salary:</div>

                    {/* info */}
                    <div className='text-[14px] text-[#282828]'>$35k - $45k</div>
                  </div>
                </div>



              </div>



            </div>

            {/* Job Skills */}
            <div className='mt-[5px]'>
              {/* heading */}
              <div className='text-[18px] font-semibold'>Job Skills</div>

              {/* rest */}
              <div className='text-[14px] text-[#696969] mt-[30px] font-semibold flex mb-[13px] flex-wrap items-center gap-[10px]'>
                <div className='bg-white py-[5px] px-[20px]'>app</div>
                <div className='bg-white py-[5px] px-[20px]'>administrative</div>
                <div className='bg-white py-[5px] px-[20px]'>android</div>
                <div className='bg-white py-[5px] px-[20px]'>wordpress</div>
                <div className='bg-white py-[5px] px-[20px]'>design</div>
                <div className='bg-white py-[5px] px-[20px]'>react</div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className='mt-[40px] bg-[#f5f7fc] rounded-lg p-[23px] text-left flex items-center gap-[15px]'>
            {/* image */}
            <div><img src={job.image} className='rounded-full w-[60px] h-[60px]'></img></div>
            <div>
              {/* company name */}
              <div className='text-[18px] font-semibold'>{job.companyName}</div>
              {/* view company profile */}
              <div onClick={toTheTop} className='text-[14px] text-[#3679d7] hover:cursor-pointer'>View company profile</div>
            </div>
          </div>

          {/* Contact Box */}
          <div className='bg-[#f5f7fc] rounded-lg p-[23px] mt-[50px] text-left contactBox'>
            {/* heading */}
            <div className='text-[18px] mb-[30px] font-semibold'>Contact Us</div>

            <div className='flex flex-col gap-[30px]'>
              {/* your name input box */}
              <div><input type='text' placeholder='Your Name' className='p-[20px] pl-[25px] w-[100%] rounded-lg'></input></div>

              {/* your name input box */}
              <div><input type='text' placeholder='Your Name' className='p-[20px] pl-[25px] w-[100%] rounded-lg'></input></div>

              {/* your name input box */}
              <div><textarea placeholder='Message' rows="4" cols="50" className='p-[20px] pl-[25px] w-[100%] rounded-lg'></textarea></div>

              {/* button */}
              <div><button className='text-[15px] bg-[#1967d2] w-[100%] text-white py-[16px] rounded-lg font-semibold hover:bg-[#0146a6] transition-all duration-200 hover:cursor-pointer'>Send Message</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateInFindJobs;