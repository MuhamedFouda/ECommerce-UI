import React from 'react'
import "./ProductList.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Products from '../../Components/Products/Products'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
export default function ProductList() {
    return (
        <div className='productList'>
            <Navbar />
            <Announcement />
            <h1>Dresses</h1>
            <div className="productFilter">
                <div className="filter"><span>Filter Products :</span>
                <select>
                    <option disabled selected>Color</option>
                    <option >White</option>
                    <option >Black</option>
                    <option >Red</option>
                    <option >Blue</option>
                    <option >Yellow</option>
                    <option >Green</option>
                </select>
                <select>
                    <option disabled selected>Size</option>
                    <option >XS</option>
                    <option >S</option>
                    <option >M</option>
                    <option >L</option>
                    <option >XL</option>
                </select>
                </div>

                <div className="filter"><span>Sort Products :</span>
                <select>
                    <option selected> Newest</option>
                    <option > Price (asc)</option>
                    <option > Black (desc)</option>
                </select>
                </div>
            </div>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
