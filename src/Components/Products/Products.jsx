import React from 'react'
import "./Products.scss"
import { popularProducts } from './../../data';
import Product from '../Product/Product';
export default function Products() {
  return (
    <div className='productaContainer'>
      {
        popularProducts.map((item) => (
          <Product key={item.id} item={item}>

          </Product>
        ))
      }
    </div>
  )
}
