import React from 'react'
import { useState } from 'react';
import Pagination from './Pagination';
import { TiArrowForwardOutline } from "react-icons/ti";
import AddAttribute from './AddAttribute';

const AttributeList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [isOpen, setIsOpen] = useState(false);

    const tableData = [
        {
            UserRole: "Seller",
            YN: "Y",
            Action: "Y"
        },
        {
            UserRole: "Seller",
            YN: "N",
            Action: "N"
        },
        {
            UserRole: "Customer",
            YN: "N",
            Action: "N"
        },
        {
            UserRole: "Customer",
            YN: "N",
            Action: "N"
        },
    ]

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className='flex flex-col flex-1 w-full h-[90vh] bg-gray-100'>
            <main class="h-full overflow-y-auto">
                <div class="container grid px-6 mx-auto">
                    <div className='flex items-center justify-between border-b-2 border-gray-400'>
                        <h1 class="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Attribute List</h1>
                        <button onClick={() => setIsOpen(true)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            + Add
                        </button>
                        <AddAttribute isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th colSpan={2} scope="col" class="px-6 py-3">
                                        Attribute
                                    </th>
                                    <th scope="col" class="px-6 py-3 w-[100px]">
                                        Y | N
                                    </th>
                                    <th scope="col" class="px-6 py-3 w-[100px]">
                                        Action
                                    </th>
                                    <th className='w-[100px]'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((item, i) => {
                                        return (
                                            <tr class="bg-white border-b odd:bg-white-900 even:bg-gray-100 dark:border-gray-700 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                                                <th colSpan={2} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.UserRole}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {item.YN}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.Action}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <button><TiArrowForwardOutline className='text-[20px]' /></button>
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

export default AttributeList