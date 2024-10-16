import React from 'react'
import CardInCandidates from './CardInCandidates';

const FilterInCandidates = (props) => {

  let arrayInCandidates = props.arrayInCandidates;
  let showMoreInCandidates = props.showMoreInCandidates;
  function getCandidatesCards() {
    if (!arrayInCandidates) {
      return [];
    }
    if (showMoreInCandidates) {
      return arrayInCandidates;
    }
    else {
      return arrayInCandidates.slice(0, 6);
    }
  }


  return (
    <div className='flex flex-wrap justify-center items-center gap-[25px]'>
      {
        getCandidatesCards().map((dataCandidates) => (
          // <CardInEmployers key={dataEmployers.id} dataEmployers={dataEmployers} />
          <CardInCandidates key={dataCandidates.id} dataCandidates={dataCandidates} /> 
        ))
      }
    </div>
  )
}

export default FilterInCandidates