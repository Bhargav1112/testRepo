import React from 'react'
import { addEleArr, addElementsInArray } from '../../../Utils'
import ProductCard from '../Common/ProductCard'
import ProductBanner from '../../../assets/images/ProductBanner.png'
import { useState } from 'react'
import { useMemo } from 'react'
import upArrow from "../../../assets/images/upArrow.svg"

const ProductList = () => {
  const [displayProduct, setDisplayProduct] = useState(18)
  const productData = useMemo(() => {
    if (window.screen.availWidth >= 1024) {
      return addElementsInArray(Array(30).fill(10), [{ type: 1 }], [4, 13])
    }
    if (window.screen.availWidth < 1024 && window.screen.availWidth >= 768) {
      return addElementsInArray(Array(30).fill(10), [{ type: 1 }], [3, 9])
    }
    if (window.screen.availWidth < 768 && window.screen.availWidth >= 640) {
      return addElementsInArray(Array(30).fill(10), [{ type: 1 }], [2, 7])
    }
    return Array(30).fill(10)

  }, [])

  const handleViewMore = () => {
    if (displayProduct < productData.length) {
      setDisplayProduct(prev => prev + 18)
    } else {
      setDisplayProduct(18)
    }
  }

  const handleBackToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })

  }
  return (
    <>
      <div className="product_list font-Josefin grid lg:grid-cols-4 md:grid-cols-3	sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
        {productData.slice(0, displayProduct).map((item, index) => {
          return (
            item.type ? (
              <div className='product_banner w-full self-stretch sm:col-span-2 col-auto ' key={index}>
                <div className={`relative h-full w-full rounded-[10px]`}>
                  <img src={ProductBanner} className="w-full h-full" alt={`ProductBanner-${index}`} />
                  <div className='absolute bottom-[18px] left-[50%] -translate-x-[50%] w-[80%] backdrop-blur-lg h-[170px] rounded-[10px] px-[34px] py-[20px] '>
                    <h4 className='font-[700] xl:text-[20px] sm:text-[18px] text-[14px] xl:leading-[28px] sm:leading-[24px] leading-[20px] mb-1'>Lorem Ipsum is simply dummy text of the printing and typesetting</h4>
                    <p className='font-[400] sm:text-[14px] text-[12px] xl:leading-[24px] sm:leading-[20px] leading-[16px] mb-1'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    </p>
                    <a href="#" className='font-[700] sm:text-[16px] text-[13px]'>Book an Appointment</a>
                  </div>
                </div>
              </div>
            ) :
              (
                <ProductCard key={index} />
              )
          )
        })}
      </div>
      {productData.length > 18 && <div className='flex justify-center mt-[80px]'>
        <button onClick={handleViewMore} className={`font-Josefin border-[2px] border-black text-[16px] px-8 py-3`}>{displayProduct < productData.length ? "View more" : "View Less"}</button>
      </div>}
      <div className='flex justify-center mt-[40px]'>
        <button onClick={handleBackToTop} className={`font-Josefin text-[16px] px-8 py-3`}>
          Back to top
          <img src={upArrow} className="ml-2 inline-block" alt="upArrow" />
        </button>
      </div>
    </>
  )
}

export default ProductList