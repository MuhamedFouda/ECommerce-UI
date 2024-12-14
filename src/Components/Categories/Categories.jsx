import React from 'react'
import "./Categories.scss"
import {categories} from "../../data"
import CategoryItem from '../CategoryItem/CategoryItem'

export default function Categories() {
  return (
    <div className='categories'>
      {categories.map((item=>{
        return (
            <CategoryItem item={item} key={item.id}/>
        )
      }))}
    </div>
  )
}
