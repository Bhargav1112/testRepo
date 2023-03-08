import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Pagination from './Pagination'
import { RiZoomInLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Drawer from './AddProductDialoag'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import AddProductDialoag from './AddProductDialoag';

const Product = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [isOpen, setIsOpen] = useState(false);

    const tableData = [
        {
            id: 1,
            SKU: "9AF4BF",
            PRODUCTNAME: "Ling Cod Steak",
            CATEGORY: "Fish & Meat",
            PRICE: "$11",
            STOCK: "60",
            STATUS: "Selling",
            DISCOUNT: ""
        },
        {
            id: 2,
            SKU: "9AF4BE",
            PRODUCTNAME: "Peeled Deveined Shrimp",
            CATEGORY: "Fruits & Vegetable",
            PRICE: "$8",
            STOCK: "170",
            STATUS: "Selling",
            DISCOUNT: "20% Off"
        },
        {
            id: 3,
            SKU: "9AF4E2",
            PRODUCTNAME: "Organic Bell Pepper",
            CATEGORY: "Fish & Meat",
            PRICE: "$18",
            STOCK: "90",
            STATUS: "Selling",
            DISCOUNT: "",
            DETAILS: ""
        },
        {
            id: 4,
            SKU: "9AF8BF",
            PRODUCTNAME: "Potatoes",
            CATEGORY: "Fish & Meat",
            PRICE: "$13",
            STOCK: "160",
            STATUS: "Selling",
            DISCOUNT: "8% Off"
        },
        {
            id: 5,
            SKU: "9AF4BA",
            PRODUCTNAME: "Rainbow Chard",
            CATEGORY: "Fish & Meat",
            PRICE: "$12",
            STOCK: "5",
            STATUS: "Selling",
            DISCOUNT: "2% Off"
        },
    ]

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className='flex flex-col flex-1 w-full'>
            <main class="h-full overflow-y-auto">
                <div class="container grid px-6 mx-auto bg-gray-100">
                    <h1 class="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Products</h1>
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
                                    <button onClick={() => setIsOpen(true)} className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full rounded-md h-12" type="button">
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
                    <div class="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-5">
                        <div class="p-4">
                            <div class="grid gap-4 md:grid-cols-3 xl:grid-cols-3">
                                <div class="w-full col-span-2">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-14 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-4 pb-4">
                                            <p class="mb-0 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div>
                                <div class="flex items-center">
                                    <button class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 bg-gray-200" type="button">Upload</button>
                                    <div class="w-full">
                                        <a>
                                            <button class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12" type="button">Download</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        SKU
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        PRODUCT NAME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        CATEGORY
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        PRICE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        STOCK
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        STATUS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DISCOUNT
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DETAILS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        PUBLISHED
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ACTIONS
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((item, i) => {
                                        return (
                                            <tr class="bg-white border-b odd:bg-white-900 even:bg-gray-100 dark:border-gray-700 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.SKU}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {item.PRODUCTNAME}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.CATEGORY}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.PRICE}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.STOCK}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <span className={`w-[50px] px-[10px] py-[3px] text-[13px] rounded-[15px] "text-[#0e9f6e] bg-green-200"
                                                        }`}>{item.STATUS}</span>
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.DISCOUNT}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <RiZoomInLine className='mx-auto' />
                                                </td>
                                                <td class="px-6 py-4 text-center">
                                                    <label htmlFor={`${i}toggle`} className="flex cursor-pointer select-none items-center scale-[0.6]">
                                                        <div className="relative">
                                                            <input type="checkbox" id={`${i}toggle`} className="sr-only" />
                                                            <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]" />
                                                            <div className="dot absolute right-1 top-1 h-6 w-6 rounded-full bg-[#48bb78] transition" />
                                                        </div>
                                                    </label>


                                                </td>
                                                <td class="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-[10px]">
                                                        <BiEdit style={{ fontSize: "20px" }} />
                                                        <MdDeleteOutline style={{ fontSize: "20px" }} />
                                                    </div>
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

export default Product