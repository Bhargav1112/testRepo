import React from 'react'

const Footer = () => {
    return (
        <div className='FooterBg'>
            <div className='xl:max-w-[1224px] max-full mx-auto xl:px-0 px-[20px] pt-[63px] pb-[40px] flex lg:items-start items-center lg:justify-between justify-center lg:gap-0 gap-[20px] lg:flex-row flex-col'>
                <div className='lg:text-left text-center'>
                    <h2 className='text-[20px] leading-[28px] uppercase text-[#000] font-[700] font-Josefin mb-[10px]'>Contact</h2>
                    <ul>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Live Chat</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Booking Appointment</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000] font-[600]'>hello@test.com</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000] font-[600]'>1234567890</a></li>
                    </ul>
                </div>
                <div className='lg:text-left text-center'>
                    <h2 className='text-[20px] leading-[28px] uppercase text-[#000] font-[700] font-Josefin mb-[10px]'>Orders</h2>
                    <ul>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Track Your Order</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Free 30 Day Return</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Free Shipping Both Ways</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Free Lifetime Warranty</a></li>
                    </ul>
                </div>
                <div className='lg:text-left text-center lg:block hidden'>
                    <h2 className='text-[20px] leading-[28px] uppercase text-[#000] font-[700] font-Josefin mb-[10px]'>CUSTOMER SERVICE</h2>
                    <ul>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Jewelry Financing</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000]'>Lifetime Diamond Upgrade</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000] font-[600]'>Promo Codes & Offers</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000] font-[600]'>Refer a Friend</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000] font-[600]'>Accessibility</a></li>
                        <li><a href="js:" className='text-[14px] leading-[30px] font-Josefin text-[#000] font-[600]'>Accessibility Info</a></li>
                    </ul>
                </div>
                <div className='lg:w-[35%] w-full lg:text-left text-center'>
                    <h2 className='text-[20px] leading-[28px] uppercase text-[#000] font-[700] font-Josefin mb-[10px]'>STAY UPDATED</h2>
                    <p className='text-[14px] leading-[22px] mb-[21px]'>Join our mailing list and be the first to hear about new designs, guides and more.</p>
                    <div className='flex items-center md:flex-row flex-col md:gap-0 gap-[10px]'>
                        <input type="email" name='email' placeholder='Enter Your Email' className='font-Josefin py-[8px] pl-[30px] w-[296px] border border-[#000]' />
                        <button type='button' className='text-[16px] leading-[32px] text-[#fff] bg-[#000] px-[45px] py-[5px]'>Submit</button>
                    </div>
                </div>
            </div>
            <div className='md:text-[16px] text-[14px] leading-[28px] text-[#000] text-center pb-[20px]'>© 2023 <span className='font-[600]'>Logoipsum</span> BY DIAMOND FOUNDRY</div>
        </div >
    )
}

export default Footer