import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleProduct } from '../../redux/card'
import { deleteProduct } from '../../redux/card'
import bin from "/public/bin.svg"

export const BinCard = ({ title, price, description, id, image, userCount, userPrice }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex items-center justify-center w-[900px] gap-[20px] mb-[30px] p-[20px] mx-auto rounded-2xl bg-white'>
            <div className='w-[300px] h-[300px]'>
                <img className=' w-full h-full object-contain' src={image} alt=" img" />
            </div>
            <div className='w-[600px]'>
                <div className='mb-[20px]'>
                    <h2 className='text-2xl font-medium mb-2'>{title}</h2>
                    <p className='text-base mb-2'>{description}</p>
                    <p className=' text-blue-800 text-xl font-semibold'>${userPrice}</p>
                </div>
                <div className='flex items-center'>
                    <button onClick={() => dispatch(toggleProduct({ type: "increment", id }))} className='font-bold  border-2 border-black px-2 py-1 rounded-lg'>+</button>

                    <strong className='px-2'>{userCount}</strong>
                    {userCount == 1 ? (
                        <button
                        className=''
                            onClick={() => dispatch(deleteProduct({ id }))}
                        >
                         <div className=''>
                            <img  className='h-[30px] w-[30px] ' src={bin} alt="" />
                         </div>
                        </button>
                    ) : (
                        <button
                            onClick={() => dispatch(toggleProduct({ type: "decrement", id }))}
                            className='font-bold  border-2 border-black px-2 py-1 rounded-lg'
                        >
                            -
                        </button>
                    )}

                </div>
            </div>
        </div>
    )
}
