import React from 'react'
import "./CategoryItem.scss"
export default function CategoryItem({ item }) {
  return (
    <div className='itemContainer'>
      <img src={item.img} alt={item.title} />
      <div className="itemInfo">
        <h1>{item.title}</h1>
        <button>SHOW NOW</button>
      </div>
    </div>
  )
}
