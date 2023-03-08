import React from 'react'
import logo from "../../assets/images/logo.svg"
import search from "../../assets/images/search.svg"
import login from "../../assets/images/login.svg"
import wichlist from "../../assets/images/wichlist.svg"
import cart from "../../assets/images/cart.svg"
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from '@material-tailwind/react'
import { MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const menus = [
        { name: "Engagement", link: "/dashboard" },
        { name: "Diamonds", link: "/order" },
        { name: "Wedding", link: "/product" },
        { name: "Jewelry", link: "/invoice" },
        { name: "Gifts", link: "/setting" },
        { name: "About", link: "/setting" },
    ];

    const handleOpenMenu = () => {
        const ele = document.querySelector('#smMenu');
        ele.classList.add('left-0')
        ele.classList.remove('-left-[100%]')
    }

    const handleCloseMenu = () => {
        const ele = document.querySelector('#smMenu');
        ele.classList.remove('left-0')
        ele.classList.add('-left-[100%]')
    }
    return (
        <div className='headerBg'>
            <div className='xl:max-w-[1224px] max-w-none mx-auto w-full xl:px-0 px-[20px]'>
                <div className='flex items-center justify-between relative py-[20px]'>
                    <div className='flex justify-center'><img src={logo} alt="logo" /></div>
                    <ul className='lg:flex hidden items-center justify-center gap-[45px]'>
                        <li><a href="js:" className='border-b-2 font-Josefin text-[14px] leading-[24px] uppercase text-[#000] transition-all duration-500 ease-in-out border-transparent hover:border-[#000]'>Engagement</a></li>
                        <li><a href="js:" className='border-b-2 font-Josefin text-[14px] leading-[24px] uppercase text-[#000] transition-all duration-500 ease-in-out border-transparent hover:border-[#000]'>Diamonds</a></li>
                        <li><a href="js:" className='border-b-2 font-Josefin text-[14px] leading-[24px] uppercase text-[#000] transition-all duration-500 ease-in-out border-transparent hover:border-[#000]'>Wedding</a></li>
                        <li><a href="js:" className='border-b-2 font-Josefin text-[14px] leading-[24px] uppercase text-[#000] transition-all duration-500 ease-in-out border-transparent hover:border-[#000]'>Jewelry</a></li>
                        <li><a href="js:" className='border-b-2 font-Josefin text-[14px] leading-[24px] uppercase text-[#000] transition-all duration-500 ease-in-out border-transparent hover:border-[#000]'>Gifts</a></li>
                        <li><a href="js:" className='border-b-2 font-Josefin text-[14px] leading-[24px] uppercase text-[#000] transition-all duration-500 ease-in-out border-transparent hover:border-[#000]'>About</a></li>
                    </ul>
                    {/* <div className='lg:block hidden'> */}
                    <div className='flex items-center gap-[20px]'>
                        <button type='button' onClick={handleOpenMenu} className='p-1 -ml-1 rounded-md lg:hidden focus:outline-none'><AiOutlineMenu /></button>
                        <a href="js:"><img src={search} alt="search" /> </a>
                        <a href="js:"><img src={login} alt="login" /> </a>
                        <a href="js:"><img src={wichlist} alt="wichlist" /> </a>
                        <a href="js:"><img src={cart} alt="cart" /> </a>
                    </div>
                    {/* </div> */}
                </div>
                <div
                    id='smMenu'
                    className={`bg-[#94a3b8] absolute top-0 -left-[100%] min-h-screen z-50 w-[300px] duration-500 text-gray-100 px-4`}
                >
                    <div className="py-3 flex justify-end">
                        <IoMdClose
                            size={26}
                            className="cursor-pointer"
                            onClick={handleCloseMenu}
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                onClick={handleCloseMenu}
                                key={i}
                                className={` ${menu?.margin && "mt-5"
                                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header