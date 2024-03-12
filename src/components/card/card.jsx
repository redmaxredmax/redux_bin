import React from 'react'
import { add } from '../../redux/card'
import { useDispatch } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'

export const Card = ({ title, price, description, id, image }) => {
    const dispatch = useDispatch()
    const addStore = () => {
        dispatch(add({ title, price, description, id, image }))
        toast.success("Added to Bin")

    }

    return (
        <div className='p-5 flex flex-col justify-between text-center rounded-2xl bg-white'>
            <div className='w-[200px] h-[300px] mx-auto'>
                <img className=' w-full h-full object-contain' src={image} alt=" img" />
            </div>
            <h2 className='text-xl font-medium mb-2 text-blue-900'>{title}</h2>
            <p className='text-base text-gray-700 mb-2'>{description.length > 30 ? description.slice(0, 30) + "..." : description}</p>
            <p className=' text-blue-800 text-xl font-semibold mb-2'>${price}</p>
            <button onClick={addStore} className='w-full text-xl font-semibold text-white rounded-md hover:bg-black bg-green-500 py-2'>Purchase</button>
        </div>

    )
}
