import React from 'react'
import Product1 from "../../../../assets/images/Product1.svg"

const ProductCard = () => {
  return (
    <div className={`bg-[#F6F7F9] w-full m-auto h-[385px] max-w-[296px] sm:max-w-full rounded-[10px]`}>
      <div className='h-[80%] flex items-center justify-center'>
        <img src={Product1} alt="Product1" className='m-auto' />
      </div>
      <div className='p-[10px] h-[20%] border-t border-[#e3e3e3]'>
        <h3 className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left mb-1'>The Three Stone Oval</h3>
        <p className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left'>$1300</p>
      </div>
    </div>
  )
}

export default ProductCard