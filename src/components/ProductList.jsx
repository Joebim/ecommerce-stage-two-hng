import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { productData } from '../api/productData'
import useFetch from '../api/useFetch'
import PaginateBar from './PaginateBar'

export default function ProductList({parentRef}) {
  const [barToggle, setBarToggle] = useState(1)

  const [currentPage, setCurrentPage] = useState(1)
  const { data, loading, error } = useFetch(`/?organization_id=${import.meta.env.VITE_ORGANIZATION_ID}&reverse_sort=false&page=${currentPage}&size=12&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${import.meta.env.VITE_API_KEY}`)


  const [products, setProducts] = useState(data?.data?.items)


  useEffect(() => {
    setProducts(data?.data?.items)
  }, [loading])


  function shuffle(array) {
    let arrayData = array
    let currentIndex = array.length;


    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;


      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return arrayData
  }


  const shuffledData = shuffle(productData);

  return (
    <div className="w-full flex flex-col gap-[40px] items-center pb-[40px]">
      <div className='w-full px-[30px] sm:px-[90px] '>
        <div className="w-full flex flex-row gap-[20px]" >
          <div className={`py-[20px] font-[700] cursor-pointer ${barToggle == 1 ? "text-black text-[16.5px]" : "text-primary"}`}
            onClick={() => { setBarToggle(1) }}
          >Exclusive</div>
          <div className={`py-[20px] font-[700] cursor-pointer ${barToggle == 2 ? "text-black text-[16.5px]" : "text-primary"}`}
            onClick={() => { setBarToggle(2) }}
          >All Products</div>
        </div>

        <div ref={parentRef} className={`w-full ${barToggle == 1 ? "block" : "hidden"} grid grid-cols-3 max-[1127px]:grid-cols-2 max-[972px]:grid-cols-2 max-[640px]:grid-cols-1 gap-[40px]`}>
          <ProductCard data={productData} products={products} loading={loading} />
        </div>
        <div className={`w-full ${barToggle == 2 ? "block" : "hidden"} grid grid-cols-3 max-[1127px]:grid-cols-2 max-[972px]:grid-cols-2 max-[640px]:grid-cols-1 gap-[40px]`}>
          <ProductCard data={shuffledData} products={products} loading={loading} />
        </div>
      </div>

      <PaginateBar data={data?.data} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>

  )
}
