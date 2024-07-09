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
import { ReactComponent as Mastercard } from "../assets/mastercard.svg"
import { ReactComponent as Visa } from "../assets/visa.svg"
import { ReactComponent as Lock } from "../assets/lock.svg"
import { useContext } from 'react'
import { Context } from '../data/Context'
import QuantityCounter from '../components/QuantityCounter'

export default function Cart(props) {

  const location = useLocation()

  const [product, setProduct] = useState(location.state)

  const data = useContext(Context)

  const {removeFromCart} = useContext(Context)

  const [cartItems, setcartItems] = useState(data.data.cartItems)

  const deliveryFee = 50000

  useEffect(() => {
    setcartItems(data.data.cartItems)
  }, [data])

  useEffect(() => {
    setProduct(location.state)
  }, [location])

  function total(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  return (
    <div className='pt-[80px] px-[30px] mb-[70px] sm:px-[90px] bg-white'>
      <div className="py-[50px]">
        {cartItems.length  === 0 ? <>
        <div className="flex justify-center items-center w-full h-[40vh]">
          <p className="">Your Cart is Empty</p>
        </div>
        </> :
        
        <div className="relative bg-white p-[5px] flex flex-col md:flex-col lg:flex-row gap-[40px]">

          <div className="flex-[6] flex flex-col gap-[20px]">
            <p className="">Cart ({cartItems.length})</p>
            <hr className='border-grey' />
            <div className="flex flex-col gap-[40px] sm:gap-[20px]">
              {cartItems.map((product) => (
                <div key={product.id} className="gap-[30px] sm:gap-[15px] flex flex-row w-full">
                  <div className="flex flex-col gap-[10px]">
                    <Link to={`/product-view/${product.id}`} state={product}>
                      <div className="bg-cover bg-center bg-no-repeat h-[100px] w-[130px] sm:w-[100px]"
                        style={{ backgroundImage: `url(${product.img})` }}
                      >
                      </div>
                    </Link>

                    <div className="flex flex-row items-center gap-[5px] cursor-pointer"
                    onClick={()=> removeFromCart(product.id)}
                    >
                      <Delete className=" scale-[.90]" />
                      <p className='text-[12px]'>Remove</p>
                    </div>

                  </div>

                  <div className="flex justify-end w-full">
                    <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                       <div className="w-[80%]">
                      <p className="text-[15px]">{product.product_name}</p>
                    </div>
                    
                     <div className="flex flex-col gap-[10px]">
                      <p className='text-[14px]'>{price(product.price)}</p>
                      <div className="flex flex-row gap-[5px]">
                        <p className="text-grey line-through text-[14px]">{price(product.discounted_price)}</p>
                        <div className="p-[3px] bg-primaryLight text-[11px]">-{product.percentage_off}%</div>
                      </div>
                      <div className="flex flex-row items-center">
                        <QuantityCounter />
                      </div>

                    </div>
                    </div>
                   




                   
                  </div>



                </div>
              ))}
            </div>
          </div>


          <div className="flex-[3] gap-[15px] self-start flex flex-col py-[12px] rounded-[6px] bg-white shadow-md w-[100%] sm:w-[400px] p-[20px]">

            <div className="flex flex-row justify-between gap-[10px] text-[13px]">

              <p className="">Order Summary</p>
              <p className="">{cartItems.length} items</p>

            </div>
            <hr className='border-grey' />
            <div className="flex flex-row justify-between gap-[10px] text-[13px]">

              <p className="">Delivery Charges</p>
              <p className="">{price(deliveryFee)}</p>

            </div>
            <hr className='border-grey' />
            <div className="flex flex-row justify-between gap-[10px] text-[13px]">

              <p className="">Subtotal</p>
              <p className="">{price(total(cartItems.map((items)=> items.price))+deliveryFee)}</p>

            </div>
            <hr className='border-grey' />
            <div className="flex flex-col justify-between gap-[6px] text-[13px]">
              <div className="flex flex-row justify-between gap-[10px]">
                <p className="font-bold">Total</p>
                <p className="">{price(total(cartItems.map((items)=> items.price))+deliveryFee)}</p>
              </div>

              <p className='self-end text-[11px]'>Delivery charges included</p>
            </div>
            <Link to="/checkout" state={cartItems} className='w-full'>
              <button className="py-[12px] w-full rounded-[6px] bg-primary text-white flex justify-center items-center text-[11px] cursor-pointer hover:bg-black duration-150">Continue to Checkout</button>
            </Link>
            <hr className='border-grey' />

            <div className="flex flex-row gap-[5px]">
              <p className="text-[11px]">We accept</p>
              <Mastercard />
              <Visa />
            </div>

            <div className="flex flex-row gap-[5px]">
              <Lock />
              <p className="text-[11px]">Transaction are 100% secure</p>
            </div>
          </div>



        </div>}
      </div>

    </div>
  )
}
