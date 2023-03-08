import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from "../../assets/images/testimonial.png"
import testimonial1 from "../../assets/images/testimonial1.png"

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                }
            }
        ]
    };
    return (
        <div className='max-w-[1224px] mx-auto xl:mb-[100px] lg:mb-[80px] md:mb-[60] mb-[40px]'>
            <h3 className='lg:text-[40px] md:text-[30px] text-[26px] leading-[52px] font-[600] font-Josefin text-[#000] text-center xl:mb-[37px] lg:mb-[30px] md:mb-[24px] mb-[14px]'>Our Customer Story</h3>
            <Slider {...settings}>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[280px] h-full flex items-center justify-center sm:flex-row flex-col p-[24px]'>
                        <img src={testimonial} alt="Product1" className='m-auto sm:mr-[32px]' />
                        <div className='h-[238px] w-[1px] bg-[#000] sm:block hidden'></div>
                        <div className='sm:pl-[26px] pl-0'>
                            <h3 className='text-[20px] leading-[28px] font-[700] font-Josefin text-[#000] py-[10px]'>Wade Warren</h3>
                            <p className='text-[14px] leading-[22px] font-[400] font-Poppins text-[#000]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[280px] h-full flex items-center justify-center sm:flex-row flex-col p-[24px]'>
                        <img src={testimonial1} alt="Product1" className='m-auto sm:mr-[32px]' />
                        <div className='h-[238px] w-[1px] bg-[#000] sm:block hidden'></div>
                        <div className='sm:pl-[26px] pl-0'>
                            <h3 className='text-[20px] leading-[28px] font-[700] font-Josefin text-[#000] py-[10px]'>Wade Warren</h3>
                            <p className='text-[14px] leading-[22px] font-[400] font-Poppins text-[#000]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[280px] h-full flex items-center justify-center sm:flex-row flex-col p-[24px]'>
                        <img src={testimonial} alt="Product1" className='m-auto sm:mr-[32px]' />
                        <div className='h-[238px] w-[1px] bg-[#000] sm:block hidden'></div>
                        <div className='sm:pl-[26px] pl-0'>
                            <h3 className='text-[20px] leading-[28px] font-[700] font-Josefin text-[#000] py-[10px]'>Wade Warren</h3>
                            <p className='text-[14px] leading-[22px] font-[400] font-Poppins text-[#000]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Testimonial
