import React from 'react'
import Banner from '../Components/LandingComponent/Banner'
import Footer from '../Components/LandingComponent/Footer'
import Header from '../Components/LandingComponent/Header'
import NewBanner from '../Components/LandingComponent/NewBanner'
import PopulareProduct from '../Components/LandingComponent/PopulareProduct'
import ProductList from '../Components/LandingComponent/ProductList'
import ViewedProduct from '../Components/LandingComponent/ViewedProduct'

const Product = () => {
	return (
		<div>
			<Header />
			<Banner />
			<div className="products max-w-[1224px] mx-auto p-4 xl:p-0 xl:mb-[100px] lg:mb-[80px] md:mb-[60] mb-[40px]">
				<div className='filters flex items-center justify-start gap-5 mb-[36px]'>
					<span>Filter: </span>
					<span>Style</span>
					<span>Shape</span>
					<span>Metal</span>
				</div>
				<h3 className='lg:text-[30px] md:text-[24px] text-[18px] lg:leading-[52px] md:leading-[40px] leading-[30px] font-[600] text-[#000000] mb-[28px] '>
					Three-Stone
				</h3>
				<ProductList />
			</div>
			<ViewedProduct title={"Previously Viewed"} />
			<NewBanner />
			<PopulareProduct />
			<Footer />
		</div>
	)
}

export default Product