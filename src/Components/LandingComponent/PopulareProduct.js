import React from 'react'
import Product1 from "../../assets/images/Product1.svg"
import ProductCard from './Common/ProductCard'

const PopulareProduct = () => {
    return (

        <div className='max-w-[1224px] mx-auto xl:mb-[100px] lg:mb-[80px] md:mb-[60] mb-[40px]'>
            <h3 className='lg:text-[40px] md:text-[30px] text-[26px] lg:leading-[52px] md:leading-[40px] leading-[30px] font-[600] font-Josefin text-[#000] text-center xl:mb-[37px] lg:mb-[30px] md:mb-[24px] mb-[14px]'>Most popular solitaire engagement rings</h3>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-[19px] gap-[5px] xl:mx-0 mx-2'>
                <div className='bg-[#F6F7F9] lg:w-[296px] w-full m-auto rounded-[10px]'>
                    <div className='lg:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <div className='p-[10px] border-t border-[#e3e3e3]'>
                        <h3 className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left mb-1'>The Three Stone Oval</h3>
                        <p className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left'>$1300</p>
                    </div>
                </div>
                <div className='bg-[#F6F7F9] lg:w-[296px] w-full m-auto rounded-[10px]'>
                    <div className='lg:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <div className='p-[10px] border-t border-[#e3e3e3]'>
                        <h3 className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left mb-1'>The Three Stone Oval</h3>
                        <p className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left'>$1300</p>
                    </div>
                </div>
                <div className='bg-[#F6F7F9] lg:w-[296px] w-full m-auto rounded-[10px]'>
                    <div className='lg:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <div className='p-[10px] border-t border-[#e3e3e3]'>
                        <h3 className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left mb-1'>The Three Stone Oval</h3>
                        <p className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left'>$1300</p>
                    </div>
                </div>
                <div className='bg-[#F6F7F9] lg:w-[296px] w-full m-auto rounded-[10px]'>
                    <div className='lg:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <div className='p-[10px] border-t border-[#e3e3e3]'>
                        <h3 className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left mb-1'>The Three Stone Oval</h3>
                        <p className='text-[16px] leading-[19px] font-[400] font-Josefin text-[#000] text-left'>$1300</p>
                    </div>
                </div>
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </div>
        </div>
    )
}

export default PopulareProduct