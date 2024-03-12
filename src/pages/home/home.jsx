import React from 'react'
import { Card } from '../../components/card'
import { Link } from 'react-router-dom'

export const Home = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
            console.log(data);
            setData(data)
        })
    }, [])
    return (
        <div className="container mx-auto py-[50px]">
            <Link to={"/bin"}>Bin</Link>
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
