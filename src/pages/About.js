import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

const About = () => {

  
  return (
    <div className='mt-[93px] bg-white'>
      {/* heading about us */}
      <div className='aboutUs py-[50px] bg-[#F5F7FC]'>
        <h2 className='text-[30px] font-semibold leading-[41px] mb-[10px]'>About Us</h2>
        <p className='text-[15px] leading-[20px]'>Home <span className='text-[#696969]'>/ About Us</span></p>
      </div>

      {/* picture */}
      <div className='pt-[50px] flex items-center gap-[10px] justify-center'>
        <div className='flex flex-col justify-center gap-[10px]'>
          <img src='https://superio-reactjs.ibthemespro.com/images/resource/about-img-1.jpg' height={392} width={312}></img>
        </div>
        <div className='flex flex-col justify-center gap-[10px]'>
          <img src='https://superio-reactjs.ibthemespro.com/images/resource/about-img-2.jpg' height={148} width={312}></img>
          <img src='https://superio-reactjs.ibthemespro.com/images/resource/about-img-3.jpg' height={238} width={312}></img>
        </div>
        <div className='flex flex-col justify-center gap-[10px]'>
          <img src='https://superio-reactjs.ibthemespro.com/images/resource/about-img-4.jpg' height={218} width={312}></img>
          <img src='https://superio-reactjs.ibthemespro.com/images/resource/about-img-5.jpg' height={168} width={312}></img>
        </div>
        <div className='flex flex-col justify-center gap-[10px]'>
          <img src='https://superio-reactjs.ibthemespro.com/images/resource/about-img-6.jpg' height={396} width={312}></img>
        </div>
      </div>

      {/* 4M */}
      <div className='flex items-center justify-center gap-[130px] py-[50px]'>
        <div>
          <h2 className='text-[50px] font-semibold mb-[10px] leading-[1em]'>4M</h2>
          <p className='text-[15px] text-[#696969] leading-[30px]'>4 million daily active users</p>
        </div>
        <div>
          <h2 className='text-[50px] font-semibold mb-[10px] leading-[1em]'>12k</h2>
          <p className='text-[15px] text-[#696969] leading-[30px]'>Over 12k open job positions</p>
        </div>
        <div>
          <h2 className='text-[50px] font-semibold mb-[10px] leading-[1em]'>20M</h2>
          <p className='text-[15px] text-[#696969] leading-[30px]'>Over 20 million stories shared</p>
        </div>
      </div>

      {/* About Knockri */}
      <div className='max-w-[900px] m-auto pb-[50px]'>
        <h2 className='text-[30px] font-semibold text-left mb-[31px]'>About Superio</h2>
        <p className='text-[15px] leading-[26px] mb-[26px] text-[#696969] text-left'>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.</p>
        <p className='text-[15px] leading-[26px] mb-[26px] text-[#696969] text-left'>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.</p>
      </div>

      {/* Your Dreams */}
      <div className='dreams'>
        <h2 className='text-[30px] font-semibold leading-[1.2em] text-white'>Your Dream Jobs Are Waiting</h2>
        <p className='mt-[15px] text-[15px] leading-[26px] text-white'>Over 1 million interactions, 50,000 success stories Make yours now.</p>
        <div className='flex items-center justify-center gap-[18px] mt-[30px]'>
          <Link to="/findjobs">
            <button className='text-[15px] leading-[20px] rounded-lg py-[18px] px-[35px] font-semibold searchJob'>Search Job</button>
          </Link>
          <Link to="/employers">
            <button className='text-[15px] leading-[20px] rounded-lg py-[18px] px-[35px] font-semibold applyJobAbout'>Apply Job Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
