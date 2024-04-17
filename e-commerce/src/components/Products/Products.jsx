import React from 'react'
import { FaStar } from 'react-icons/fa6'
import Img1 from '../../assets/women/img1.png'
import Img2 from '../../assets/women/img2.png'
import Img3 from '../../assets/women/img3.png'
import Img4 from '../../assets/women/img4.png'
import Img5 from '../../assets/women/img5.png'

const ProductsData =[
    {
        id: 1,
        img: Img1,
        title: "Women Ethinc",
        rating: 5.0,
        author: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.5,
        author: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 5.0,
        author: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Fashin T-Shirt",
        rating: 4.5,
        author: "Pink",
        aosDelay: "800",
    },
    {
        id: 5,
        img: Img5,
        title: "Printed T-Shirt",
        rating: 4.4,
        author: "Yellow",
        aosDelay: "600",
    },
    

]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header Section */}

            <div className='text-center mb-10 max-w[600px]
            mx-auto'>
                <p className='text-sm text-primary '>Products for you</p>
                <h1 className='text-3xl font-bold'>Produts</h1>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit, sed do eiusmod tempor incididunt ut 
                   labore et dolore magna aliqua</p>
            </div>
            {/* Body Section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center
                gap-5'>
                    {/* Card Section */}
                    {ProductsData.map((data)=>(
                        <div key={data.id} className='space-y-3'>
                            <img
                            src={data.img}
                            alt=''
                            className='h-[220px] w-[150px]
                            object-cover rounded-md' 
                            />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600 '>{data.color}</p>
                                <div className='flex items-center'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Products
