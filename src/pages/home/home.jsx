import React from 'react'
import { Card } from '../../components/card'
import { Link } from 'react-router-dom'
import purchase from "/public/purchase.png"
import { ToastContainer } from 'react-toastify'

export const Home = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
            console.log(data);
            setData(data)
        })
    }, [])
    return (
        
        <div className="container mx-auto py-[20px]">
            <ToastContainer/>
            <h1 className='text-5xl font-semibold text-blue-900 text-center py-[30px]'>Products</h1>
            <Link to={"/bin"}>
                <div className='fixed h-[80px] w-[100px] rounded-xl left-[45%] top-[80%] p-3 bg-white'>
                    <img className=' ' src={purchase} alt="" />
                </div>
            </Link>
            <ul className="grid grid-cols-4 gap-4">
                {data.map((item) =>
                    <li className='flex' key={item.id}>
                        <Card  {...item} />
                    </li>
                )}
            </ul>
        </div>
    )
}
