import React, { useState } from 'react'
import Pagination from './Pagination';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import { border } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

    const salesData = {
        labels,
        datasets: [
            {
                label: 'Sales',
                data: [330, 53, 850, 410, 440, 650, 250, 560, 880, 320],
                borderColor: '#10b981',
                backgroundColor: '#10b981',
            }
        ],
    };
    const orderData = {
        labels,
        datasets: [
            {
                label: 'Order',
                data: [0.30, 0.53, 0.850, 0.410, 0.440, 0.650, 0.250, 0.560, 0.880, 0.320],
                borderColor: '#f87316',
                backgroundColor: '#f87316',
            }
        ],
    };

    const data = [
        {
            label: "Sales",
            value: "Sales",
            desc: <Line options={options} data={salesData} />,
        },
        {
            label: "Order",
            value: "Order",
            desc: <Line options={options} data={orderData} />,
        }
    ];

    const tableData = [
        {
            OrderTime: "Jan 15, 2023",
            DeliveryAddress: "pakki shah mardan",
            Phone: "+87675765",
            PaymentMethod: "COD",
            Amount: "$45.21",
            Status: "Pending"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "hhhhjhh",
            Phone: "+85698563255",
            PaymentMethod: "COD",
            Amount: "$52.78",
            Status: "Processing"
        },
        {
            OrderTime: "Jan 13, 2023",
            DeliveryAddress: "dsjcjJHASIxjnj",
            Phone: "+92186215356",
            PaymentMethod: "COD",
            Amount: "$95.87",
            Status: "Cancel"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 15, 2023",
            DeliveryAddress: "pakki shah mardan",
            Phone: "+87675765",
            PaymentMethod: "COD",
            Amount: "$45.21",
            Status: "Pending"
        },
        {
            OrderTime: "Jan 15, 2023",
            DeliveryAddress: "pakki shah mardan",
            Phone: "+87675765",
            PaymentMethod: "COD",
            Amount: "$45.21",
            Status: "Pending"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },
        {
            OrderTime: "Jan 14, 2023",
            DeliveryAddress: "Tejomay-Bunglow, House-14, Plot-7, Santnagar, Sector-4,",
            Phone: "+7666674367",
            PaymentMethod: "COD",
            Amount: "$72.00",
            Status: "Delivered"
        },

    ]

    const pieData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
                label: '# of Votes',
                data: [8, 19, 15, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='flex flex-col flex-1 w-full'>
            <main class="h-full overflow-y-auto">
                <div class="container grid px-6 mx-auto bg-gray-100">
                    <h1 class="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Dashboard Overview</h1>
                    {/* <div class="grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3">
                        <div class="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                            <div class="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-teal-500">
                                <div class="text-center inline-block text-3xl text-white dark:text-green-100 bg-teal-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">Today Order</p>
                                    <p class="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">$0</p>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                            <div class="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-blue-500">
                                <div class="text-center inline-block text-3xl text-white dark:text-green-100 bg-blue-500">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                </div>
                                <div>
                                    <p class="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">This Month</p>
                                    <p class="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">$1413.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
                            <div class="p-4 w-full p-6 rounded-lg text-white dark:text-green-100 bg-green-500">
                                <div class="text-center inline-block text-3xl text-white dark:text-green-100 bg-green-500">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z"></path></svg>
                                </div>
                                <div>
                                    <p class="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">Total Order</p>
                                    <p class="text-3xl font-bold leading-none text-gray-50 dark:text-gray-50">$27562.30</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <div class="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                            <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                                <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                </div>
                                <div>
                                    <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        <span>Total Order</span>
                                    </p>
                                    <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">201</p>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                            <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                                <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                </div>
                                <div>
                                    <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        <span>Order Pending</span>
                                        <span class="text-red-400 text-sm font-semibold">(5891.50)</span>
                                    </p>
                                    <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">36</p>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                            <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                                <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        <span>Order Processing</span>
                                    </p>
                                    <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">21</p>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                            <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                                <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div>
                                    <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        <span>Order Delivered</span>
                                    </p>
                                    <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">144</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='grid gap-4 md:grid-cols-2 my-8'>
                        <div className='min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                            <p className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Weekly Sales</p>
                            <div className='text-sm font-medium text-center text-gray-500 dark:text-gray-400     mb-4'>

                                <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
                                    <div className="flex space-x-3 border-b">
                                        {data.map((tab, idx) => {
                                            return (
                                                <button
                                                    key={idx}
                                                    className={`py-2 border-b-4 transition-colors w-[60px] duration-300 ${idx === activeTabIndex
                                                        ? tab.label === "Order" ? "border-[#f87316] text-[#f87316]" : "border-teal-500 text-teal-500"
                                                        : "border-transparent hover:border-gray-200"
                                                        }`}
                                                    onClick={() => setActiveTabIndex(idx)}>
                                                    {tab.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div className="py-4">
                                        <p>{data[activeTabIndex].desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                            <p className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Best Selling Products</p>
                            <div className='text-sm font-medium text-center text-gray-500 dark:text-gray-400     mb-4'>
                                <Pie data={pieData} style={{ width: "400px", height: "400px", margin: "0 auto" }} width={300} height={300} />
                            </div>
                        </div>
                    </div> */}

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ORDER TIME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DELIVERY ADDRESS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        PHONE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        PAYMENT METHOD
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ORDER AMOUNT
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        STATUS
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((item, i) => {
                                        return (
                                            <tr class="bg-white border-b odd:bg-white-900 even:bg-gray-100 dark:border-gray-700 dark:odd:bg-gray-900 dark:even:bg-gray-800">
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

export default Dashboard