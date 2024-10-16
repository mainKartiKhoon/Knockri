import React, { useEffect, useState } from 'react'
import { filterData } from './Page4Dataset2'
import { dataOfPage4 } from './Page4Dataset'
import Filter from './Filter'
import Cards from './Cards'


const Page4 = () => {

    const [cardsInPage4, setCardsInPage4] = useState(null);
    const [category, setCategory] = useState(filterData[1].title);
    async function fetchData() {
        try{
            setCardsInPage4(dataOfPage4)
        }
        catch(error) {
            console.log('There must be some error that you need to find');
            
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

  return (
    <div className=' bg-[#f6f4fc] border border-[#f6f4fc] pb-[140px] relative '>
      <img src='https://superio-reactjs.ibthemespro.com/images/index-11/shapes/2.png' className='absolute top-[0px]'></img>
      <div>
        <h2 className='text-[30px] font-semibold mt-[80px]'>Featured Jobs</h2>
        <p className='mt-[15px] text-[15px] text-[#707071] mb-[50px]'>Know your worth and find the job that qualify your life</p>
      </div>
      <div className='mb-[30px]'>
        <Filter
        category = {category}
        setCategory = {setCategory}
        filterData = {filterData} />
      </div>
      <div >
        <Cards cardsInPage4=  {cardsInPage4} category={category}/>
      </div>
    </div>
  )
}

export default Page4