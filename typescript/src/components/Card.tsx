'use client'
import { FC } from 'react'

export interface ICard {
  image: string;
  name: string;
  description: string;
}

const Card:FC<ICard> = ({ image, name, description }) => {
  return (
    <div className="bg-gray-900 rounded-md pb-10">
      <img 
        className="rounded-t-md w-full object-fit"
        src={image} 
        alt="Speedometer icon"
        />
      <div className="px-3 pb-2">
        <h3 className="text-xl mt-2">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default Card