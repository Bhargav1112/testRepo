import React from 'react'
import { useState } from 'react';
import AddCategory from './AddCategory';
import AddUserRole from './AddUserRole';
import Pagination from './Pagination'

const CategoryList = () => {
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
        <div className='flex flex-col flex-1 w-full z-0 h-[90vh] bg-gray-100'>
            <main className="h-full overflow-y-auto">
                <div className="container grid px-6 mx-auto">
                    <div className='flex items-center justify-between border-b-2 border-gray-400'>
                        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Category List</h1>
                        <button onClick={() => setIsOpen(true)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            + Add
                        </button>
                        <AddCategory isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div className="relative z-10 overflow-x-auto shadow-md sm:rounded-lg mt-8">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 z-0 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Sort No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Sort Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Design Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Y | N
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((item, i) => {
                                        return (
                                            <tr className="bg-white border-b odd:bg-white-900 even:bg-gray-100 dark:border-gray-700 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.UserRole}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {item.YN}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.YN}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.YN}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.Action}
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

export default CategoryList