import React from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Products/Products'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from './../../Components/Footer/Footer';
export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
