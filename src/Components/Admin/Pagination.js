import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate, indexOfFirstPost, indexOfLastPost }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(indexOfLastPost > totalPosts);
    return (
        <div className="flex w-full items-center justify-between border-t border-gray-200 bg-white dark:bg-gray-900 px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indexOfFirstPost + 1}</span> to <span className="font-medium">{indexOfLastPost > totalPosts ? totalPosts : indexOfLastPost}</span> of{' '}
                        <span className="font-medium">{totalPosts}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {/* <a
                                href="#"
                                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                            >
                                <span className="sr-only">Previous</span>Prev
                            </a> */}
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                href="#"
                                aria-current="page"
                                onClick={() => paginate(number)}
                                className={`relative z-10 bg-indigo-50 [&:first-child]:rounded-l-md [&:last-child]:rounded-r-md text-indigo-600 inline-flex items-center border border-indigo-500 px-4 py-2 text-sm font-medium focus:z-20 ${currentPage === number && "bg-grren-800 text-[#000]"}`}
                            >
                                {number}
                            </button>
                        ))}
                        {/* <a
                                href="#"
                                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                            >
                                <span className="sr-only">Next</span>
                                Next
                            </a> */}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
