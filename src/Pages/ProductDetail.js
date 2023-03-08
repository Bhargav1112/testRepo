import React from 'react'
import Breadcrumb from '../Components/LandingComponent/Breadcrumb'
import Header from '../Components/LandingComponent/Header'
import ProductDetails from '../Components/LandingComponent/ProductDetails'
import Reviews from '../Components/LandingComponent/Reviews'
import ViewedProduct from '../Components/LandingComponent/ViewedProduct'
import Footer from '../Components/LandingComponent/Footer'

const ProductDetail = () => {
  const ProductlistTitle = "Create the perfect pair"
  return (
    <div>
      <Header />
      <Breadcrumb />
      <ProductDetails />
      <ViewedProduct title={ProductlistTitle} />
      <Reviews />
      <Footer />
    </div>
  )
}

export default ProductDetail