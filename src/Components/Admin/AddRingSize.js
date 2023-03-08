import React from 'react'
import { useState } from 'react';
import AddAttributeValue from './AddAttributeValue';
import Pagination from './Pagination';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const RingSize = ({ isOpen, setIsOpen }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" className="md:w-[600px] w-[300]">
                <div className="w-full relative p-6 border-b border-gray-400 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <div >
                        <h4 className="text-xl font-medium">Add Ring Size</h4>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent>
                <div>
                    <div className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                        <div>
                            <form className="block">
                                <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-4">
                                    <div className='flex items-center gap-[10px]'>
                                        <div className="mb-6 w-[400px]">
                                            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                                Sort Order No.
                                            </label>
                                            <div className="col-span-8 sm:col-span-4">
                                                <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="text" name="sku" placeholder="User Role" />
                                            </div>
                                        </div>
                                        <div className="mb-6 w-[600px]">
                                            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                                Sort Name
                                            </label>
                                            <div className="col-span-8 sm:col-span-4">
                                                <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="text" name="sku" placeholder="User Role" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 w-[600px]">
                                        <label className="block mb-2 text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                                            Category
                                        </label>
                                        <div className="col-span-8 sm:col-span-4">
                                            <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="text" name="sku" placeholder="User Role" />
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="link-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is Active.</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button onClick={() => setIsOpen(false)} className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 bg-gray-200 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700" type="button">Cancel</button>
                    </div>
                    <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12" type="submit"> <span>Save</span></button>
                    </div>
                </div>
            </DialogActions>
        </Dialog>
    )
}

export default RingSize