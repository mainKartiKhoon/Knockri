import React from 'react'
import CardInEmployers from './CardInEmployers';

const FilterInEmployers = (props) => {

  let arrayInEmployers = props.arrayInEmployers;
  let showMoreInEmployers = props.showMoreInEmployers;

  function getEmployersCards() {
    if (!arrayInEmployers) {
      return [];
    }
    if (showMoreInEmployers) {
      return arrayInEmployers;
    }
    else {
      return arrayInEmployers.slice(0, 6);
    }
  }

  return (
    <div className='flex flex-wrap justify-center items-center gap-[25px]'>
      {
        getEmployersCards().map((dataEmployers) => (
          <CardInEmployers key={dataEmployers.id} dataEmployers={dataEmployers} />
        ))
      }
    </div>
  )
}

export default FilterInEmployers
