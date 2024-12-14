import React from 'react'
import "./Product.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
import { Add, Remove } from '@mui/icons-material'
export default function Product() {
    return (
        <div className='productCont'>
            <Navbar />
            <Announcement />
            <div className="productWrapper">
                <div className="imagContainer">
                    <img src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='product img' />
                </div>
                <div className="infoContainer">
                    <h1>Denim Jumpsuit</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsa nihil placeat eaque perferendis explicabo id atque enim accusantium, error libero magnam? Nobis voluptatem eaque vitae voluptate quo voluptatum dolorem.</p>
                    <span>$ 20</span>
                    <div className="filterContainerr">

                        <div className="filter">
                            <span>Color:</span>
                            <div className="color" style={{backgroundColor:"darkblue"}}></div>
                            <div className="color" style={{backgroundColor:"black"}}></div>
                            <div className="color" style={{backgroundColor:"gray"}} ></div>
                        </div>

                        <div className="filter">
                            <span>Size:</span>
                            <select className="sizeFilter">
                                <option className="size">XS</option>
                                <option className="size">S</option>
                                <option className="size">M</option>
                                <option className="size">L</option>
                                <option className="size">XL</option>
                            </select>
                        </div>
                    </div>

                    <div className="addContainer">
                        <div className="amountContainer">
                            <Add style={{cursor:'pointer'}}/>
                            <span>1</span>
                            <Remove style={{cursor:'pointer'}}/>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
