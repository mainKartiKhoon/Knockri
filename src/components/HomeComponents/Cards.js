import React from 'react'
import Card from './Card';

const Cards = (props) => {

    let cardsInPage4 = props.cardsInPage4;
    let category = props.category;
    // console.log(cardsInPage4);

    function getJobCards() {
        if (!cardsInPage4) {

            return [];

        }
        // let allCards = [];
        // Object.values(cardsInPage4).forEach(array => {
        //     array.forEach(cardData => {
        //         allCards.push(cardData);
        //     })
        // })
        return cardsInPage4[category];
    }
    
  return (
    <div className='flex flex-wrap gap-[25px] justify-center'>
      {
        getJobCards().map((card) => (
            <Card key={card.id} card={card}/>
        ))
      }
    </div>
  )
}

export default Cards
