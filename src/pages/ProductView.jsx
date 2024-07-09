import React, { useEffect, useState } from 'react'
import ProductCarousel from '../components/productCarousel'
import { productData } from '../data/productData'
import { useLocation } from 'react-router-dom'
import { Rating } from '../components/Rating'
import { Like } from '../components/Like'
import { price } from '../components/price'
import { ReactComponent as Honour } from "../assets/honour-star.svg"
import { ReactComponent as Truck } from "../assets/truck.svg"
import { ReactComponent as Refresh } from "../assets/refresh.svg"

export default function ProductView(props) {

  const location = useLocation()

  const [product, setProduct] = useState(location.state)

  useEffect(() => {
    setProduct(location.state)
  }, [location])



  return (
    <div className='pt-[80px] px-[30px] mb-[70px] sm:px-[90px] bg-white'>
      <div className="pt-[50px]">
        <div className="relative bg-white p-[5px] flex flex-col md:flex-col lg:flex-row justify-between">
          <div className="flex-[4] flex flex-col sm:flex-row gap-[10px]">

            <div className="flex-[1.1] flex flex-col gap-[20px]">
              <div className=" bg-cover bg-center bg-no-repeat h-[300px] w-[100%]"
                style={{ backgroundImage: `url(${product.img})` }}
              >
              </div>
              <a href='' aria-disabled="true" className="hover:text-primary cursor-pointer text-[15px] underline">Share this product</a>
            </div>




            <div className="flex-[1] relative flex flex-col gap-[15px] p-[20px]">
              <div className="w-[80%]">
                <p className="text-[13px]">{product.product_name}</p>
              </div>
              <hr className='border-grey' />



              <div className="flex flex-row gap-[10px] items-center">
                <p className='text-[14px]'>{price(product.price)}</p>
                <p className="text-grey line-through text-[14px]">{price(product.discounted_price)}</p>
                <div className="p-[3px] bg-primaryLight text-[11px]">-{product.percentage_off}%</div>
              </div>
              <hr className='border-grey' />


              <div className="flex flex-row items-center gap-[10px]"><Rating rating={product.rating} /><p className='text-[13px] text-[#913752]'>({product.number_rated} verified ratings)</p></div>
              <hr className='border-grey' />

              <button className="py-[12px] rounded-[6px] bg-primary text-white flex justify-center items-center text-[12px] cursor-pointer hover:bg-black duration-150">Add to Cart</button>

              <Like isLiked={product.is_liked} />

            </div>


          </div>

          <div className="flex-[1.3] gap-[15px] flex flex-col py-[12px] rounded-[6px] bg-white shadow-md w-[100%] sm:w-[400px] p-[20px]">
            <h1 className="text-black">Delivery & Returns</h1>
            <hr className='border-grey' />
            <div className="flex flex-row gap-[10px]">
              <Truck />
              <div className="text-[11px] flex flex-col gap-[15px]">
                <p className="font-bold">Delivery</p>
                <p className="">Estimated delivery time 2-10 business days</p>
                <p className="">Express Delivery Available</p>
                <p className="">For Same-Day-Delivery: Orders placed before 12 PM</p>
                <p className="">Next Day-Delivery: Orders placed after 12 PM will be delivered the next day</p>
                <p className="">Next Day-Delivery: Orders placed after 12 PM will be delivered the next day</p>
              </div>
            </div>
            <hr className='border-grey' />
            <div className="flex flex-row gap-[10px]">
              <Refresh />
              <div className="text-[11px] flex flex-col gap-[15px]">
                <p className="font-bold">Return Policy</p>

                <p className="">Guaranteed 7-Day Return Policy</p>
                <p className="">For details about return shopping options, please visit our Return Policy</p>
              </div>
            </div>
            <hr className='border-grey' />
            <div className="flex flex-row gap-[10px]">

              <Honour />
              <div className="text-[11px] flex flex-col gap-[15px]">
                <p className="font-bold">Return Warranty</p>

                <p className="">1 year</p>
              </div>
            </div>
          </div>



        </div>
      </div>
      <ProductCarousel data={productData} />
    </div>
  )
}
