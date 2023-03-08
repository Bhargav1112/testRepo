import React from 'react'
import { useState } from 'react'
import Banner from '../Components/LandingComponent/Banner'
import Category from '../Components/LandingComponent/Category'
import Modal from '../Components/LandingComponent/Common/Modal'
import Footer from '../Components/LandingComponent/Footer'
import Header from '../Components/LandingComponent/Header'
import HomeProduct from '../Components/LandingComponent/HomeProduct'
import NewBanner from '../Components/LandingComponent/NewBanner'
import Testimonial from '../Components/LandingComponent/Testimonial'
import VideoBanner from '../Components/LandingComponent/VideoBanner'

const Main = () => {
  // const [open, setOpen] = useState(false)
  // const handleOpenModal = () => {
  //   setOpen(true)
  // }
  return (
    <div>
      {/* <button onClick={handleOpenModal}>click</button>
      <Modal open={open} onClose={() => setOpen(false)} >this is test</Modal> */}
      <Header />
      <Banner />
      <HomeProduct />
      <Category />
      <VideoBanner />
      <Testimonial />
      <NewBanner />
      <Footer />
    </div>
  )
}

export default Main