import React, { useEffect, useState } from 'react'
import { Context } from '../api/Context'
import { useContext } from 'react'
import { price } from './price'
import { Link } from 'react-router-dom'
import { ReactComponent as Mastercard } from "../assets/mastercard.svg"
import { ReactComponent as Visa } from "../assets/visa.svg"
import { ReactComponent as Lock } from "../assets/lock.svg"
import { Loader } from "./Loader.jsx";
import useDelayedNavigation from './useDelayNavigation.js'

export default function CheckoutCard() {

    const data = useContext(Context)

    const [cartItems, setcartItems] = useState(data.cart)
    const [checkoutLoading, setCheckoutLoading] = useState(false)

    const deliveryFee = 50000

    useEffect(() => {
        setcartItems(data.cart)
        setCheckoutLoading(false)
    }, [data])

    function total(numbers) {
        return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    function flatten(arr) {
        return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
    }

    const prices = flatten(cartItems.map(item => item.current_price.map(price => price.NGN[0]) * item?.quantity));

    const delayedNavigate = useDelayedNavigation(3000); // 2 seconds delay



    return (

        <>
            <div className={`${checkoutLoading ? "block" : "hidden"} w-full h-[100vh] fixed top-0 left-0 bg-white opacity-75 z-50`}>
                <Loader />
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
                    <p className="">{price(total(prices))}</p>

                </div>
                <hr className='border-grey' />
                <div className="flex flex-col justify-between gap-[6px] text-[13px]">
                    <div className="flex flex-row justify-between gap-[10px]">
                        <p className="font-bold">Total</p>
                        <p className="">{price(total(prices) + deliveryFee)}</p>
                    </div>

                    <p className='self-end text-[11px]'>Delivery charges included</p>
                </div>
                <button
                    onClick={() => {
                        setCheckoutLoading(true);
                        delayedNavigate('/order-confirm', cartItems);
                    }}
                    className="py-[12px] w-full rounded-[6px] bg-primary text-white flex justify-center items-center text-[11px] cursor-pointer hover:bg-black duration-150">Continue to Checkout</button>
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

        </>

    )
}
