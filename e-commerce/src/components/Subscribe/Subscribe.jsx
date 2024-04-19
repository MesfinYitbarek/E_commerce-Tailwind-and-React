import React from 'react'
import Banner from "../../assets/shirts/image3.png"

const BannerImg ={
    backgroundImage:`url(${Banner})`,
    backgroundPostion:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}
const Subscribe = () => {
  return (
    <div
        data-aos="zoom-in"
        className='mb-20 bg-gray-100 dark:bg-gray-800
        dark:text-white'
        style={BannerImg} 
    >
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl !text-center
                sm:text-left sm:text-4xl font-semibold'>
                    Get Notified About New Products
                </h1>
                <input 
                    data-aos="fade-up"
                    type='text'
                    placeholder='Enter your Email'
                    className='w-full p-3 text-black'
                />

            </div>
        </div>

      
    </div>
  )
}

export default Subscribe
