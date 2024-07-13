import React, { useEffect, useState } from 'react'
import ProductCarousel from '../components/productCarousel'
import { productData } from '../api/productData'
import { Link, useLocation } from 'react-router-dom'
import { Rating } from '../components/Rating'
import { Like } from '../components/Like'
import { price } from '../components/price'
import { ReactComponent as Honour } from "../assets/honour-star.svg"
import { ReactComponent as Truck } from "../assets/truck.svg"
import { ReactComponent as Refresh } from "../assets/refresh.svg"
import { ReactComponent as Delete } from "../assets/delete.svg"

import { useContext } from 'react'
import { Context } from '../api/Context'
import QuantityCounter from '../components/QuantityCounter'
import CheckoutCard from '../components/CheckoutCard'

export default function Cart(props) {

  const location = useLocation()

  const [newprice, setNewPrice] = useState()

  const data = useContext(Context)

  const { removeFromCart } = useContext(Context)

  const [cartItems, setcartItems] = useState(data.cart)

  const deliveryFee = 50000

  useEffect(() => {
    setcartItems(data.cart)
  }, [data])



  function total(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  function flatten(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
  }

  const prices = flatten(cartItems.map(item => item.current_price.map(price => price.NGN[0]) * item?.quantity));



  return (
    <div className='pt-[80px] px-[30px] mb-[70px] sm:px-[90px] bg-white'>
      <div className="py-[50px]">
        {cartItems.length === 0 ? <>
          <div className="flex justify-center items-center w-full h-[40vh] gap-[20px]">

            <div className="flex flex-col gap-[20px] items-center">
              <p className="">Your cart is empty. Start shopping for furniture!</p>
              <Link to="/">
                <button onClick={() => addToCart(product)} className="py-[12px] px-[40px] rounded-[6px] bg-primary text-white flex justify-center items-center text-[12px] cursor-pointer hover:bg-black duration-150">Start Shopping</button>
              </Link>

            </div>

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
                          style={{ backgroundImage: `url(${`https://api.timbu.cloud/images/`}${product.photos[0].url})` }}
                        >
                        </div>
                      </Link>

                      <div className="flex flex-row items-center gap-[5px] cursor-pointer"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Delete className=" scale-[.90]" />
                        <p className='text-[12px]'>Remove</p>
                      </div>

                    </div>

                    <div className="flex justify-end w-full">
                      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                        <div className="w-[80%]">
                          <p className="text-[15px]">{product.name}</p>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                          <p className='text-[14px]'>{price(product?.current_price?.map(price => price?.NGN[0]))}</p>
                          <div className="flex flex-row gap-[5px]">
                            <p className="text-grey line-through text-[14px]">{price(product.discounted_price)}</p>
                            <div className="p-[3px] bg-primaryLight text-[11px]">-{product.percentage_off}%</div>
                          </div>
                          <div className="flex flex-row items-center">
                            <QuantityCounter item={product} />
                          </div>

                        </div>
                      </div>






                    </div>



                  </div>
                ))}
              </div>
            </div>



            <CheckoutCard />

          </div>}
      </div>

    </div>
  )
}
