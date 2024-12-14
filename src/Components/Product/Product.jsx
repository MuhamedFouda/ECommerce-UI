import React from 'react'
import "./Product.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from 'react-router-dom';
export default function Product({item}) {
  const navigate = useNavigate()
  return (
    <div className='productContainer' onClick={()=>{navigate("/Product")}}>
        <div className='circle'/>
      <img src={item.img} alt='ProductImage'/>
      <div className="productInfo">
        <div className="icon">
        <ShoppingCartOutlinedIcon/>
        </div>
        <div className="icon" >
        <SearchOutlinedIcon/>
        </div>
        <div className="icon">
        <FavoriteBorderOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}
