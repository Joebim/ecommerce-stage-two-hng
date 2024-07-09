import React, { useEffect, useState } from 'react'
import ProductCarousel from '../components/productCarousel'
import { productData } from '../data/productData'
import { Link, useLocation } from 'react-router-dom'
import { Rating } from '../components/Rating'
import { Like } from '../components/Like'
import { price } from '../components/price'
import { ReactComponent as Honour } from "../assets/honour-star.svg"
import { ReactComponent as Truck } from "../assets/truck.svg"
import { ReactComponent as Refresh } from "../assets/refresh.svg"
import { ReactComponent as Delete } from "../assets/delete.svg"
import { useContext } from 'react'
import { Context } from '../data/Context'
import QuantityCounter from '../components/QuantityCounter'

export default function Cart(props) {

  const location = useLocation()

  const [product, setProduct] = useState(location.state)

  const data = useContext(Context)

  const [cartItems, setcartItems] = useState(data.data.cartItems)

  useEffect(() => {
    setcartItems(data.data.cartItems)
  }, [data])

  useEffect(() => {
    setProduct(location.state)
  }, [location])



  return (
    <div className='pt-[80px] px-[30px] mb-[70px] sm:px-[90px] bg-white'>
      <div className="pt-[50px]">
        <div className="relative bg-white p-[5px] flex flex-col md:flex-col lg:flex-row gap-[40px]">

          <div className="flex-[6] flex flex-col gap-[20px]">
            <p className="">Cart ({cartItems.length})</p>
            <hr className='border-grey' />
            <div className="flex flex-col gap-[20px]">
              {cartItems.map((product) => (
                <div key={product.id} className="gap-[15px] flex flex-row w-full">
                  <div className="flex flex-col gap-[10px]">
                    <Link to={`/product-view/${product.id}`} state={product}>
                      <div className="bg-cover bg-center bg-no-repeat h-[100px] w-[100px]"
                        style={{ backgroundImage: `url(${product.img})` }}
                      >
                      </div>
                    </Link>

                    <div className="flex flex-row items-center gap-[5px]">
                      <Delete className=" scale-[.90]" />
                      <p className='text-[12px]'>Remove</p>
                    </div>

                  </div>


                  <div className="w-[80%]">
                    <p className="text-[15px]">{product.product_name}</p>
                  </div>




                  <div className="flex flex-col gap-[10px]">
                    <p className='text-[14px]'>{price(product.price)}</p>
                    <div className="flex flex-row">
                      <p className="text-grey line-through text-[14px]">{price(product.discounted_price)}</p>
                      <div className="p-[3px] bg-primaryLight text-[11px]">-{product.percentage_off}%</div>
                    </div>
                    <div className="flex flex-row items-center">
                      <QuantityCounter />
                    </div>

                  </div>


                </div>
              ))}
            </div>
          </div>


          <div className="flex-[3] gap-[15px] flex flex-col py-[12px] rounded-[6px] bg-white shadow-md w-[100%] sm:w-[400px] p-[20px]">
           
            <div className="flex flex-row justify-between gap-[10px] text-[13px]">
              
                <p className="">Order Summary</p>
                <p className="">3 items</p>
              
            </div>
            <hr className='border-grey' />
            <div className="flex flex-row justify-between gap-[10px] text-[13px]">
              
                <p className="">Delivery Charges</p>
                <p className="">₦50,000.00</p>
              
            </div>
            <hr className='border-grey' />
            <div className="flex flex-row justify-between gap-[10px] text-[13px]">
              
                <p className="">Subtotal</p>
                <p className="">₦1,839,898</p>
              
            </div>
             <hr className='border-grey'/>
            <div className="flex flex-col justify-between gap-[6px] text-[13px]">
              <div className="flex flex-row justify-between gap-[10px]">
              <p className="font-bold">Total</p>
                <p className="">₦1,889,898</p>  
              </div>
                
              <p className='self-end text-[11px]'>Delivery charges included</p>
            </div>

            <button className="py-[12px] rounded-[6px] bg-primary text-white flex justify-center items-center text-[11px] cursor-pointer hover:bg-black duration-150">Continue to Checkout</button>
            <hr className='border-grey' />

            <div className="">
<p className="">We accept</p>
            </div>

            <div className="">
<p className="">Transaction are 100% secure</p>
            </div>
          </div>



        </div>
      </div>

    </div>
  )
}
