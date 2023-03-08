import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Pagination from './Pagination'
import { RiZoomInLine } from "react-icons/ri";
import { FormControl, MenuItem, Select } from '@mui/material';
import AddProductDialoag from './AddProductDialoag';

const tableData = [
    {
        id: 1,
        OrderTime: "Jan 15, 2023",
        DeliveryAddress: "pakki shah mardan",
        Phone: "+87675765",
        PaymentMethod: "COD",
        Amount: "$45.21",
        Status: "Pending"
    },
    {
        id: 2,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 3,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "hhhhjhh",
        Phone: "+85698563255",
        PaymentMethod: "COD",
        Amount: "$52.78",
        Status: "Processing"
    },
    {
        id: 4,
        OrderTime: "Jan 13, 2023",
        DeliveryAddress: "dsjcjJHASIxjnj",
        Phone: "+92186215356",
        PaymentMethod: "COD",
        Amount: "$95.87",
        Status: "Cancel"
    },
    {
        id: 5,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 6,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 7,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 8,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 9,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 10,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 11,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 1,
        OrderTime: "Jan 15, 2023",
        DeliveryAddress: "pakki shah mardan",
        Phone: "+87675765",
        PaymentMethod: "COD",
        Amount: "$45.21",
        Status: "Pending"
    },
    {
        id: 12,
        OrderTime: "Jan 15, 2023",
        DeliveryAddress: "pakki shah mardan",
        Phone: "+87675765",
        PaymentMethod: "COD",
        Amount: "$45.21",
        Status: "Pending"
    },
    {
        id: 13,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 14,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 15,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 16,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 17,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 18,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 19,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 20,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 21,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 22,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 23,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 24,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 25,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 26,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 27,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 28,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 29,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },
    {
        id: 30,
        OrderTime: "Jan 14, 2023",
        DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
        Phone: "+7666674367",
        PaymentMethod: "COD",
        Amount: "$72.00",
        Status: "Delivered"
    },

]

const Order = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [data, setData] = useState(tableData)
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (id, event) => {
        // setAge(event.target.value);
        setData(prev => {
            return prev.map((item, i) => item.id === id ? { ...item, Status: event.target.value } : item)
        })
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className='flex flex-col flex-1 w-full mb-[10px]'>
            <main class="h-full bg-gray-100">
                <div class="container grid px-6 mx-auto">
                    <h1 class="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Order</h1>
                    <div class="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
                        <div class="p-4">
                            <form class="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
                                <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                    <input class="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white" type="search" name="search" placeholder="Search by product name" />
                                    <button type="submit" class="absolute right-0 top-0 mt-5 mr-1"></button>
                                </div>
                                <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                    <select class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white">
                                        <option value="All" hidden="">Category</option>
                                        <option value="Fish &amp; Meat">Fish &amp; Meat</option>
                                        <option value="Fruits &amp; Vegetable">Fruits &amp; Vegetable</option>
                                        <option value="Fresh Seafood">Fresh Seafood</option>
                                        <option value="Cooking Essentials">Cooking Essentials</option>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Drinks">Drinks</option>
                                        <option value="Milk &amp; Dairy">Milk &amp; Dairy</option>
                                        <option value="Organic Food">Organic Food</option>
                                        <option value="Honey">Honey</option>
                                        <option value="Sauces &amp; Pickles">Sauces &amp; Pickles</option>
                                        <option value="Jam &amp; Jelly">Jam &amp; Jelly</option>
                                        <option value="Snacks &amp; Instant">Snacks &amp; Instant</option>
                                        <option value="Biscuits &amp; Cakes">Biscuits &amp; Cakes</option>
                                        <option value="Household Tools">Household Tools</option>
                                        <option value="Baby Care">Baby Care</option>
                                        <option value="Pet Care">Pet Care</option>
                                        <option value="Beauty &amp; Health">Beauty &amp; Health</option>
                                        <option value="Sports &amp; Fitness">Sports &amp; Fitness</option>
                                    </select>
                                </div>
                                <div class="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                    <select class="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white">
                                        <option value="All" hidden="">Price</option>
                                        <option value="Low">Low to High</option>
                                        <option value="High">High to Low</option>
                                    </select>
                                </div>
                                <div class="w-full md:w-56 lg:w-56 xl:w-56">
                                    <button onClick={() => setIsOpen(true)} className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12" type='button'>
                                        <span className="mr-3">
                                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
                                        </span>
                                        Add Product
                                    </button>
                                    <AddProductDialoag isOpen={isOpen} setIsOpen={setIsOpen} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        SR NO
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        TIME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        SHIPPING ADDRESS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        PHONE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        METHOD
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        AMOUNT
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        STATUS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ACTION
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        INVOICE
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((item, i) => {
                                        return (
                                            <tr class="bg-white border-b odd:bg-white-900 even:bg-gray-100 dark:border-gray-700 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {i + 1}
                                                </th>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.OrderTime}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {item.DeliveryAddress}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.Phone}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.PaymentMethod}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.Amount}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <span className={`w-[50px] px-[10px] py-[3px] text-[13px] rounded-[15px] ${item.Status == "Pending" ?
                                                        "text-[#c27803] bg-yellow-200" :
                                                        item.Status == "Processing" ? "text-[#3f83f8] bg-blue-200" :
                                                            item.Status == "Cancel" ? "text-[#ff0000] bg-red-200" :
                                                                "text-[#0e9f6e] bg-green-200"
                                                        }`}>{item.Status}</span>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                        <Select
                                                            value={item.Status}
                                                            onChange={handleChange.bind(null, item.i)}
                                                            displayEmpty
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            <MenuItem value={"Pending"}>Pending</MenuItem>
                                                            <MenuItem value={"Processing"}>Processing</MenuItem>
                                                            <MenuItem value={"Delivered"}>Delivered</MenuItem>
                                                            <MenuItem value={"Cancel"}>Cancel</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <RiZoomInLine className='ml-auto w-[15px] h-[15px]' />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr className='bg-white w-full border-b dark:bg-gray-900 dark:border-gray-700 odd:bg-gray-900'>
                                </tr>
                            </tbody>
                        </table>
                        <Pagination
                            currentPage={currentPage}
                            postsPerPage={postsPerPage}
                            totalPosts={tableData.length}
                            paginate={paginate}
                            indexOfFirstPost={indexOfFirstPost}
                            indexOfLastPost={indexOfLastPost}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Order