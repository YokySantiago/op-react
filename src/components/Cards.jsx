'use client';

import Card from './Card.jsx'

export default function Cards({ cards = []}) {
  const renderCard = (card, index) => {
    return <Card {...card} key={index}/>
  }

  return (
    <div className='m-10 grid grid-cols-6 gap-3'>
      {cards.map(renderCard)}
    </div>
  )
}