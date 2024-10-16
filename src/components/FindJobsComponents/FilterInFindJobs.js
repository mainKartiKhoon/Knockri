import React, { useState } from 'react'
import CardInFindJobs from './CardInFindJobs'

const FilterInFindJobs = (props) => {

  let arrayInFindJobs = props.arrayInFindJobs;
  let showMore = props.showMore;
  

  function getFindJobCards() {
    if (!arrayInFindJobs) {
      return [];
    }
    if (showMore) {
      return arrayInFindJobs; // Show all jobs
    }
    return arrayInFindJobs.slice(0, 6); // Show only 6 jobs
  }

  


  return (
    <div className='flex flex-wrap justify-center items-center gap-[25px]'>
      {
        getFindJobCards().map((job) => (
          <CardInFindJobs key={job.id} job={job} />
        ))
      }
    </div>
  )
}

export default FilterInFindJobs
