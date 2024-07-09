import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { productData } from '../data/productData'

export default function ProductList() {

  const [barToggle, setBarToggle] = useState(1)

  function shuffle(array) {
    let arrayData = array
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return arrayData
  }
  

  const shuffledData = shuffle(productData);

  return (
    <div className='w-full px-[30px] sm:px-[90px] pb-[80px]'>
      <div className="w-full flex flex-row gap-[20px]" >
        <div className={`py-[20px] font-[700] cursor-pointer ${barToggle == 1 ? "text-black text-[16.5px]" : "text-primary"}`}
          onClick={() => { setBarToggle(1) }}
        >Exclusive</div>
        <div className={`py-[20px] font-[700] cursor-pointer ${barToggle == 2 ? "text-black text-[16.5px]" : "text-primary"}`}
          onClick={() => { setBarToggle(2) }}
        >All Products</div>
      </div>

      <div className={`w-full ${barToggle == 1 ? "block" : "hidden"} grid grid-cols-3 max-[1127px]:grid-cols-2 max-[972px]:grid-cols-2 max-[640px]:grid-cols-1 gap-[40px]`}>
        <ProductCard data={productData}/>
      </div>
      <div className={`w-full ${barToggle == 2 ? "block" : "hidden"} grid grid-cols-3 max-[1127px]:grid-cols-2 max-[972px]:grid-cols-2 max-[640px]:grid-cols-1 gap-[40px]`}>
        <ProductCard data={shuffledData}/>
      </div>
    </div>
  )
}
