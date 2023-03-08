import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

export default function AddProductDialoag({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <div>
            <h4 className="text-xl font-medium">Add Product</h4>
            <p className="mb-0 text-sm">Add your product and necessary information from here</p>
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div>
          <div className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
            <div>
              <form className="block">
                <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-4">
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                      Product Image
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                      <div className="w-full text-center">
                        <div className="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer" role="button" tabIndex={0}>
                          <input accept="image/*" type="file" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} />
                          <span className="mx-auto flex justify-center">
                            <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 16 12 12 8 16" /><line x1={12} y1={12} x2={12} y2={21} /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /><polyline points="16 16 12 12 8 16" /></svg>
                          </span>
                          <p className="text-sm mt-2">Drag your image here</p>
                          <em className="text-xs text-gray-400">(Only *.jpeg and *.png images will be accepted)
                          </em>
                        </div>
                        <aside className="flex flex-row flex-wrap mt-4" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                      Product SKU
                    </label>
                    <div className="col-span-8 sm:col-span-4">
                      <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="text" name="sku" placeholder="Product SKU" defaultValue />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Product Title/Name</label>
                    <div className="col-span-8 sm:col-span-4">
                      <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="text" name="title" placeholder="Product title" defaultValue />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Product Slug</label>
                    <div className="col-span-8 sm:col-span-4">
                      <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="text" name="slug" placeholder="Product slug" defaultValue />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Product Description</label>
                    <div className="col-span-8 sm:col-span-4">
                      <textarea className="block w-full text-sm dark:text-gray-300 rounded-md focus:outline-none form-textarea focus:border-purple-400 border-gray-300 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-purple-300 border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white" name="description" placeholder="Product details" rows={4} spellCheck="false" defaultValue={""} />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Parent Category</label>
                    <div className="col-span-8 sm:col-span-4">
                      <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" name="parent">
                        <option value hidden>Select parent category</option>
                        <option value="Fish & Meat">Fish &amp; Meat</option>
                        <option value="Fruits & Vegetable">Fruits &amp; Vegetable</option>
                        <option value="Fresh Seafood">Fresh Seafood</option>
                        <option value="Cooking Essentials">Cooking Essentials</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Pet Care">Pet Care</option>
                        <option value="Beauty & Health">Beauty &amp; Health</option>
                        <option value="Sports & Fitness">Sports &amp; Fitness</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Child Category</label>
                    <div className="col-span-8 sm:col-span-4">
                      <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" name="children">
                        <option value hidden>Select child category</option>
                        <option value="Fish">Fish</option>
                        <option value="Meat">Meat</option>
                        <option value="Dry Fruits">Dry Fruits</option>
                        <option value="Fresh Fruits">Fresh Fruits</option>
                        <option value="Fresh Vegetable">Fresh Vegetable</option>
                        <option value="Fresh Seafood">Fresh Seafood</option>
                        <option value="Oil">Oil</option>
                        <option value="Rice">Rice</option>
                        <option value="Flour">Flour</option>
                        <option value="Dry Vegetable">Dry Vegetable</option>
                        <option value="Spices & Mixes">Spices &amp; Mixes</option>
                        <option value="Laundry">Laundry</option>
                        <option value="Air Freshener">Air Freshener</option>
                        <option value="Water Filter">Water Filter</option>
                        <option value="Pest Control">Pest Control</option>
                        <option value="Cleaning Tools">Cleaning Tools</option>
                        <option value="Fitness">Fitness</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Product Type</label>
                    <div className="col-span-8 sm:col-span-4">
                      <select className="block w-full px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 leading-5 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" name="type">
                        <option value hidden>Select type</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Foods">Foods</option>
                        <option value="Cloths">Cloths</option>
                        <option value="Health Care">Health Care </option>
                        <option value="Medicine">Medicine </option>
                        <option value="Books">Books </option>
                        <option value="Bags">Bags</option>
                        <option value="Sports & Fitness">Sports &amp; Fitness </option>
                        <option value="Home Accessories">Home Accessories</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Electronics">Electronics </option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Unit (kg/pc/lb/ml/g...etc)</label>
                    <div className="col-span-8 sm:col-span-4">
                      <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="text" name="unit" placeholder="Unit" defaultValue />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Product Quantity</label>
                    <div className="col-span-8 sm:col-span-4">
                      <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="number" name="quantity" placeholder="Quantity" defaultValue />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Product Price</label>
                    <div className="col-span-8 sm:col-span-4">
                      <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="number" name="originalPrice" placeholder="Price" defaultValue />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Sale Price</label>
                    <div className="col-span-8 sm:col-span-4">
                      <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" type="number" name="salePrice" placeholder="Sale price" defaultValue={0} />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <label className="block text-sm text-gray-700 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Product Tag</label>
                    <div className="col-span-8 sm:col-span-4">
                      <div className="react-tag-input">
                        <input className="block w-full px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:ring focus:ring-green-300 dark:focus:border-gray-500 dark:focus:ring-gray-300 dark:bg-gray-700 border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" placeholder="Product Tag (Write then press enter to add new tag )" defaultValue />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div style={{ position: 'absolute', height: 6, right: 2, bottom: 2, left: 2, borderRadius: 3 }}>
              <div style={{ position: 'relative', display: 'block', height: '100%', cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 0 }} />
            </div>
            <div style={{ position: 'absolute', width: 6, right: 2, bottom: 2, top: 2, borderRadius: 3 }}>
              <div style={{ position: 'relative', display: 'block', width: '100%', cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 126, transform: 'translateY(0px)' }} />
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
            <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-full h-12" type="submit"> <span>Add Product</span></button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}
