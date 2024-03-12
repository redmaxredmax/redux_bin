import React from 'react'
import { add } from '../../redux/card'
import { useDispatch } from 'react-redux'



export const Card = ({ title, price, description, id, image }) => {
    const dispatch = useDispatch()
    const addStore = () => {
        dispatch(add({ title, price, description, id, image }))
    }

    return (
        <div className='p-5 flex flex-col justify-between'>
            <div className='w-[200px] h-[300px]'>
                <img className='w-full h-full object-contain' src={image} alt=" img" />
            </div>
            <h2>{title}</h2>
            <p>{description.length > 30 ? description.slice(0, 30) + "..." : description}</p>
            <p>{price}</p>
            <button onClick={addStore} className='w-full bg-green-500 py-2'>Send</button>
        </div>

    )
}
