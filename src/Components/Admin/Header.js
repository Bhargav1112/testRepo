import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Button, Menu, MenuItem } from '@mui/material';

const Header = () => {
    const [sideMenu, setSidemenu] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate()

    const menus = [
        { name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard },
        { name: "Order", link: "/order", icon: AiOutlineHeart },
        { name: "Product", link: "/product", icon: FiShoppingCart },
        { name: "Invoice", link: "/invoice", icon: TbReportAnalytics },
        { name: "Setting", link: "/setting", icon: RiSettings4Line },
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
        <header className='z-40 relative py-4 bg-white shadow-sm dark:bg-gray-800 fixed right-0 left-0'>
            <div className='container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500'>
                <button onClick={handleOpenMenu} type='button' className='p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none'>
                    <MdMenu />
                </button>
                <div
                    id='smMenu'
                    className={`bg-[#0e0e0e] absolute top-0 -left-[100%] min-h-screen z-50 w-[300px] duration-500 text-gray-100 px-4`}
                >
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3
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
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
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
                <span></span>
                <ul className='flex justify-end items-center flex-shrink-0 space-x-6'>
                    <li class="relative inline-block text-left">
                        <button class="relative align-middle rounded-md focus:outline-none">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z"></path>
                            </svg>
                            <span class="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">6</span>
                        </button>
                    </li>

                    <li class="relative inline-block text-left">
                        <button >

                        </button>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none"
                        >
                            <div class="relative rounded-full inline-block w-8 h-8 align-middle" aria-hidden="true">
                                <img class="object-cover w-full h-full rounded-full" src="https://i.ibb.co/WpM5yZZ/9.png" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                                </div>
                            </div>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={() => navigate("/login")}>Logout</MenuItem>
                        </Menu>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header