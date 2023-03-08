import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product1 from "../../assets/images/Product1.svg"

const Category = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    return (
        <div className='max-w-[1224px] mx-auto xl:mb-[100px] lg:mb-[80px] md:mb-[60] mb-[40px]'>
            <h3 className='lg:text-[40px] md:text-[30px] text-[26px] lg:leading-[52px] md:leading-[40px] leading-[30px] font-[600] font-Josefin text-[#000] text-center xl:mb-[37px] lg:mb-[30px] md:mb-[24px] mb-[14px]'>Category Of Fine Jewelry</h3>
            <Slider {...settings}>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <h3 className='text-[16px] border-t border-[#e3e3e3] leading-[28px] font-[600] font-Josefin text-[#000] text-center py-[10px]'>Bezel</h3>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <h3 className='text-[16px] border-t border-[#e3e3e3] leading-[28px] font-[600] font-Josefin text-[#000] text-center py-[10px]'>Bezel</h3>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <h3 className='text-[16px] border-t border-[#e3e3e3] leading-[28px] font-[600] font-Josefin text-[#000] text-center py-[10px]'>Bezel</h3>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <h3 className='text-[16px] border-t border-[#e3e3e3] leading-[28px] font-[600] font-Josefin text-[#000] text-center py-[10px]'>Bezel</h3>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <h3 className='text-[16px] border-t border-[#e3e3e3] leading-[28px] font-[600] font-Josefin text-[#000] text-center py-[10px]'>Bezel</h3>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <h3 className='text-[16px] border-t border-[#e3e3e3] leading-[28px] font-[600] font-Josefin text-[#000] text-center py-[10px]'>Bezel</h3>
                </div>
                <div className='bg-[#F6F7F9] mr-[19px] rounded-[10px]'>
                    <div className='sm:h-[244px] h-[200px] flex items-center justify-center'>
                        <img src={Product1} alt="Product1" className='m-auto' />
                    </div>
                    <h3 className='text-[16px] border-t border-[#e3e3e3] leading-[28px] font-[600] font-Josefin text-[#000] text-center py-[10px]'>Bezel</h3>
                </div>
            </Slider>
        </div>
    )
}

export default Category