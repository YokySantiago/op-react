'use client';
import { FC } from 'react';

import Card, { ICard } from './Card'

interface IProps {
  records: ICard[];
}

const Cards: FC<IProps> = ({ records = []}) => {
  const renderCard = (record: any, index: number) => {
    return <Card {...record} key={index}/>
  }

  return (
    <div className='m-10 grid grid-cols-6 gap-3'>
      {records.map(renderCard)}
    </div>
  )
}

export default Cards
