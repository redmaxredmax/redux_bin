import React from 'react'
import { useSelector } from 'react-redux'
import { BinCard } from '../../components/bin_card/bin-card'

export const Bin = () => {
  const { products } = useSelector((state) => state.card)
  return (
    <div className='container'>
      <h1 className='text-red-500'>bin</h1>
      {products.map((item) => <BinCard key={item.id} {...item}/>)}
    </div>
  )
}
