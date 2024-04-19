import React from 'react'
import footerLogo from "../../assets/Logo.png"
import Banner from '../../assets/shopping.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg ={
    backgroundImage:`url(${Banner})`,
    backgroundPostion:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#"
    },
    {
        title: "Contact",
        link: "/#"
    },
    {
        title: "Blog",
        link: "/#"
    },
]

const Footer = () => {
  return (
    <div style={BannerImg}
    className='text-white mb-0'>
      <div className='container'>
        <div  data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1 
                className='
                sm:text-3xl text-xl font-bold sm:text-left
                text-justify mb-3 flex items-center gap-3
                '> 
                    <img src={footerLogo} alt=''
                    className='max-w-[50px]' />
                    Shopsy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit, sed do eiusmod tempor incididunt ut 
                   labore et dolore magna aliqua</p>
            </div>
            {/* footer links */}
            <div className='grid grid-cols-2 sm:grid-cols-3
            col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl
                            font-bold sm:text-left text-justify mb-3'>
                            Important Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link)=>(
                                <li
                                    className='cursor-pointer 
                                    hover:text-primary
                                    hover:translate-x-1 duration-300
                                    text-gray-200'
                                    key={link.title}
                                > 
                                    <span>{link.title}</span>
                                </li>

                                ))
                            }
                            
                        </ul>
                    </div>

                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl
                            font-bold sm:text-left text-justify mb-3'>
                            Links
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link)=>(
                                <li
                                    className='cursor-pointer 
                                    hover:text-primary
                                    hover:translate-x-1 duration-300
                                    text-gray-200'
                                    key={link.title}
                                > 
                                    <span>{link.title}</span>
                                </li>

                                ))
                            }
                            
                        </ul>
                    </div>

                </div>
                {/* social links */}
                <div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href='#'>
                            <FaFacebook className='text-3xl text-blue-700'/>

                        </a>
                        <a href='#' >
                            <FaInstagram className='text-3xl  text-red-500'/>
                        </a>
                        <a href='#' >
                            <FaLinkedin className='text-3xl  text-blue-700'/>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow/>
                            <p>Noida, Uttar Pradesh</p>

                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt/>
                            <p>+251 975364420</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
