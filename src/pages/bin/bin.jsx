import React from 'react'
import { useSelector } from 'react-redux'
import { BinCard } from '../../components/bin_card/bin-card'

export const Bin = () => {
  const { products } = useSelector((state) => state.card)
  return (
    <div className='container'>
      <h1 className='text-4xl font-semibold text-blue-900 text-center py-[30px]'>Purchased Products</h1>
      {products.map((item) => <BinCard key={item.id} {...item}/>)}
    </div>
  )
}
