import React from 'react'
import banner2 from '../../assets/images/banner2.png'

const NewBanner = () => {
    return (
        <div className='bg-[#F6F7F9] lg:h-[420px] h-auto flex items-center justify-between lg:flex-row flex-col xl:mb-[170px] lg:mb-[80px] md:mb-[60] mb-[40px] lg:p-0 p-4 lg:gap-0 gap-[20px]'>
            <div className='lg:ml-auto ml-0 mb-auto lg:mt-auto lg:w-[640px] md:w-[65%] w-[90%]  -mt-[60px] lg:bg-transparent bg-white lg:order-0 order-2 p-4 rounded'>
                <h1 className='lg:text-[40px] md:text-[30px] text-[26px] lg:leading-[52px] md:leading-[40px] leading-[30px] font-[600] text-[#000] lg:mb-4 mb-1 font-Josefin'>Lorem Ipsum is simply</h1>
                <p className='lg:text-[16px] text-[14px] lg:leading-[28px] leading-[22px] font-[400] text-[#000] mb-4 font-Poppins'>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                <button className='lg:text-[16px] text-[14px] leading-[32px] lg:py-[6px] py-[4px] lg:px-[23px] px-[16px] border border-[#000] font-[400] text-[#000] hover:bg-white hover:text-[#4f4a42] font-Josefin'>Start with a created diamond</button>
            </div>
            <div className='lg:pt-[100px] pt-0 lg:order-2 order-1'>
                <img src={banner2} alt="banner2" />
            </div>
        </div>
    )
}

export default NewBanner