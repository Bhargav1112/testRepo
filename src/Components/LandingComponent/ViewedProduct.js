import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product1 from "../../assets/images/Product1.svg"
import ProductCard from './Common/ProductCard';

const ViewedProduct = ({ title }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
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
            <h3 className='lg:text-[40px] md:text-[30px] text-[26px] lg:leading-[52px] md:leading-[40px] leading-[30px] font-[600] font-Josefin text-[#000] text-center xl:mb-[37px] lg:mb-[30px] md:mb-[24px] mb-[14px]'>{title}</h3>
            <Slider {...settings}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Slider>
        </div>
    )
}

export default ViewedProduct