import React, { useRef, useState } from 'react'
import Product from "../../assets/images/Product.svg"
import wichlist from "../../assets/images/wichlist.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shap1 from '../../assets/images/shap1.png'
import shap2 from '../../assets/images/shap2.png'
import shap3 from '../../assets/images/shap3.png'
import shap4 from '../../assets/images/shap4.png'
import shap5 from '../../assets/images/shap5.png'
import shap6 from '../../assets/images/shap6.png'
import shap7 from '../../assets/images/shap7.png'
import shap8 from '../../assets/images/shap8.png'
import diamond from '../../assets/images/diamond.png'
import Calendar from '../../assets/images/Calendar.png'
import truck from '../../assets/images/truck.png'
import warranty from '../../assets/images/warranty.png'

const ProductDetails = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
    ]
  };
  return (
    <div className='xl:max-w-[1224px] max-w-auto xl:px-0 px-3 mx-auto mt-10'>
      <div className='flex items-start gap-[42px] lg:flex-row flex-col mb-[21px]'>
        <div className='lg:w-[50%] w-full'><img src={Product} alt="Product" className='m-auto' /></div>
        <div className='lg:w-[50%] w-full'>
          <div className='flex items-start justify-between mb-[13px]'>
            <h2 className='lg:text-[35px] md:text-[30px] text-[26px] lg:leading-[43px] md:leading-[38px] leading-[32px] font-[400] font-Josefin text-[#000]'>The Twisted Classic Oval Engagement Ring</h2>
            <button type='button' className='p-3'><img src={wichlist} alt="wichlist" /></button>
          </div>
          <p className='lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] text-[#000] font-[300] lg:mb-6 mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <h3 className='lg:text-[25px] text-[20px] lg:leading-[36px] leading-[30px] text-[#000] font-[400] mb-[6px]'>Starting at $1,200</h3>
          <div className='mb-4'>
            <h3 className='text-[18px] leading-[36px] font-[500] font-Josefin text-[#000] mb-[4px]'>Shape : <span className='font-[300]'>Oval</span></h3>
            <Slider {...settings}>
              <div className="p-4 h-[60px]">
                <img src={shap1} alt="shap1" className='m-auto' />
              </div>
              <div className="p-4 h-[60px]">
                <img src={shap2} alt="shap2" className='m-auto' />
              </div>
              <div className="p-4 h-[60px]">
                <img src={shap3} alt="shap3" className='m-auto' />
              </div>
              <div className="p-4 h-[60px]">
                <img src={shap4} alt="shap4" className='m-auto' />
              </div>
              <div className="p-4 h-[60px]">
                <img src={shap5} alt="shap5" className='m-auto' />
              </div>
              <div className="p-4 h-[60px]">
                <img src={shap6} alt="shap6" className='m-auto' />
              </div>
              <div className="p-4 h-[60px]">
                <img src={shap7} alt="shap7" className='m-auto' />
              </div>
              <div className="p-4 h-[60px]">
                <img src={shap8} alt="shap8" className='m-auto' />
              </div>
            </Slider>
          </div>
          <div className='mb-4'>
            <h3 className='text-[18px] leading-[36px] font-[500] font-Josefin text-[#000] mb-[4px]'>Side Stone Shape : <span className='font-[300]'>Round Brilliant</span></h3>
            <div className='flex items-center gap-[30px]'>
              <div className="text-left">
                <img src={shap1} alt="shap1" />
              </div>
              <div className="text-left">
                <img src={shap6} alt="shap1" />
              </div>
              <div className="text-left">
                <img src={shap8} alt="shap1" />
              </div>
            </div>
          </div>
          <div className='mb-9'>
            <h3 className='text-[18px] leading-[36px] font-[500] font-Josefin text-[#000] mb-[4px]'>Metal :  <span className='font-[300]'>18k White Gold</span></h3>
            <div className='flex items-center gap-[20px]'>
              <button type='button' className="border border-[#e3e3e3] rounded-full p-1">
                <div className='w-[27px] h-[27px] rounded-full bg-[#C8C8C8]'></div>
              </button>
              <button type='button' className="border border-[#e3e3e3] rounded-full p-1">
                <div className='w-[27px] h-[27px] rounded-full bg-[#C8AB6E]'></div>
              </button>
              <button type='button' className="border border-[#e3e3e3] rounded-full p-1">
                <div className='w-[27px] h-[27px] rounded-full bg-[#E0E0E0]'></div>
              </button>
              <button type='button' className="border border-[#e3e3e3] rounded-full p-1">
                <div className='w-[27px] h-[27px] rounded-full bg-[#CEAC8B]'></div>
              </button>
            </div>
          </div>
          <button type='button' className='w-full bg-[#000] text-[#fff] text-[16px] leading-[32px] py-[6px] font-Josefin'>Select your Diamond</button>
        </div>
      </div>
      <div className='flex items-start mb-[21px] md:flex-row flex-col'>
        <div className='px-10 lg:w-[50%] w-full lg:text-left text-center'>
          <p className='text-[16px] leading-[26px]'>Brand width : 1.8-2.5mm </p>
          <p className='text-[16px] leading-[26px]'>Brand depth : 1.8mm</p>
          <p className='text-[16px] leading-[26px]'>Diamond Carat weight : 0.13ctw</p>
          <p className='text-[16px] leading-[26px]'>Diamond Quality : D-G/VS</p>
        </div>
        <div className='lg:w-[50%] w-full lg:text-left text-center'>
          <p className='text-[16px] leading-[26px] flex items-center lg:justify-start justify-center gap-[20px]'><img src={diamond} alt="diamond" /> Jewellers created diamond </p>
          <p className='text-[16px] leading-[26px] flex items-center lg:justify-start justify-center gap-[20px]'><img src={Calendar} alt="diamond" />Made to order. Order now, ships by Thu, Mar 2</p>
          <p className='text-[16px] leading-[26px] flex items-center lg:justify-start justify-center gap-[20px]'><img src={truck} alt="diamond" /> Free shipping </p>
          <p className='text-[16px] leading-[26px] flex items-center lg:justify-start justify-center gap-[20px]'><img src={warranty} alt="diamond" /> Lifetime warranty</p>
        </div>
      </div>
      <div className='border border-[#000] py-4 px-8 h-[248px] text-[20px] leading-[36px] xl:mb-[100px] lg:mb-[80px] md:mb-[60px] mb-[40px]'>
        Agent Calculation Module
      </div>
    </div>
  )
}

export default ProductDetails