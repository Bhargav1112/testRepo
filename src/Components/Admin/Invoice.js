import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

const Invoice = () => {
    return (
        <main>
            <div className='container grid px-6 mx-auto'>
                <h1 class="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Invoice</h1>
                <div className='bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden'>
                    <div className>
                        <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50 dark:border-gray-700 dark:text-gray-300">
                            <h1 className="font-bold font-serif text-xl uppercase">Invoice
                                <p className="text-xs mt-1 text-gray-500">
                                    Status:
                                    <span className="pl-2 font-medium text-xs capitalize">
                                        <span className="font-serif">
                                            <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-yellow-500 bg-yellow-100 dark:text-white dark:bg-yellow-600">Pending
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </h1>
                            <div className="lg:text-right text-left">
                                <h2 className="lg:flex items-center gap-2 lg:justify-end text-lg font-serif font-semibold mt-4 lg:mt-0 lg:ml-0 md:mt-0">
                                    <FaShoppingBag className='text-[#10b981]' /> Dashtar
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Cecilia Chapman, 561-4535 Nulla LA, <br /> United States 96522 </p>
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">
                            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">Date</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                                    <span>January 20, 2023</span>
                                </span>
                            </div>
                            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">Invoice No</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 block">#10012</span>
                            </div>
                            <div className="flex flex-col lg:text-right text-left">
                                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">Invoice To.</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 block">j d<br />12<br />delhi, india, 110033</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 my-8">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full whitespace-no-wrap">
                                    <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                                        <tr>
                                            <td className="px-4 py-3"> Sr.</td>
                                            <td className="px-4 py-3">Product Name</td>
                                            <td className="px-4 py-3 text-center">Quantity</td>
                                            <td className="px-4 py-3 text-center">Item Price</td>
                                            <td className="px-4 py-3 text-center">Amount</td>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400 bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ">
                                        <tr className="dark:border-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3 px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">1 </td>
                                            <td className="px-4 py-3 px-6 py-1 whitespace-nowrap font-normal text-gray-500">Green Leaf Lettuce</td>
                                            <td className="px-4 py-3 px-6 py-1 whitespace-nowrap font-bold text-center">1 </td>
                                            <td className="px-4 py-3 px-6 py-1 whitespace-nowrap font-bold text-center">$14.00 </td>
                                            <td className="px-4 py-3 px-6 py-1 whitespace-nowrap text-center font-bold text-red-500 dark:text-green-500">$14.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl border-gray-100 p-8 py-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
                        <div className="flex lg:flex-row md:flex-row flex-col justify-between">
                            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">Payment Method</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">COD</span>
                            </div>
                            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">Shipping Cost</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">$60.00</span>
                            </div>
                            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">Discount</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">$0.00</span>
                            </div>
                            <div className="flex flex-col sm:flex-wrap">
                                <span className="mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">Total Amount</span>
                                <span className="text-xl font-serif font-bold text-red-500 dark:text-green-500 block">$74.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 mt-3 flex justify-between">
                    <a download="Invoice" href="blob:https://dashtar-admin.vercel.app/41b01c9e-82bc-4809-952f-7dbc0a1c1507">
                        <button className="flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto cursor-pointer">
                            Download Invoice
                            <span className="ml-2 text-base">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56m0 64.1l64 63.9 64-63.9M256 224v224.03" />
                                </svg>
                            </span>
                        </button>
                    </a>
                    <button className="flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto">Print Invoice
                        <span className="ml-2">
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x={6} y={14} width={12} height={8} />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
        </main>
    )
}

export default Invoice