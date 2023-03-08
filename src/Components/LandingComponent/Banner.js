import React from 'react'
import banner from "../../assets/images/banner.svg"

const Banner = () => {
    return (
        <div className='relative xl:mb-[100px] lg:mb-[80px] md:mb-[60] mb-[40px]'>
            <div>
                <img src={banner} alt="banner" className='w-full' />
            </div>
            <div className='md:absolute static md:top-[50%] top-0 md:right-[80px] right-0 md:-translate-y-1/2 translate-y-0 md:max-w-[44%] max-w-fit w-full md:mx-0 mx-[15px] md:mt-0 mt-[20px]'>
                <h1 className='xl:text-[40px] lg:text-[30px] text-[22px] xl:leading-[52px] lg:leading-[40px] md:leading-[32px] leading-[28px] font-[600] md:text-[#fff] text-[#000] lg:mb-4 mb-1 font-Josefin'>Lorem Ipsum is simply dummy text of the printing and typesetting</h1>
                <p className='md:text-[16px] text-[14px] xl:leading-[52px] lg:leading-[40px] leading-[26px] font-[400] md:text-[#fff] text-[#000] mb-4 font-Poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                <button className='md:w-auto w-full md:text-[16px] text-[14px] leading-[32px] lg:py-[6px] py-[4px] lg:px-[23px] px-[16px] border md:border-[#fff] 
                border-[#000] font-[400] md:text-[#fff] text-[#000] hover:bg-white hover:text-[#4f4a42] font-Josefin'>Start with a created diamond</button>
            </div>
        </div>
    )
}

export default Banner