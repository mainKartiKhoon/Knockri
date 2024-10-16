import React from 'react'
import Page1 from '../components/HomeComponents/Page1'
import secondBackgroundInPage1 from "../assets/HomeAssets/picInBackgroundInHome.png"
import Page2 from '../components/HomeComponents/Page2'
import Page3 from '../components/HomeComponents/Page3'
import Page4 from '../components/HomeComponents/Page4'
import Page5 from '../components/HomeComponents/Page5'

const Home = () => {
  
  return (
    <div>
      <Page1 secondBackgroundInPage1={secondBackgroundInPage1}/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </div>
  )
}

export default Home
