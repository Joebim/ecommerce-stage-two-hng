import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { price } from '../components/price'
import { ReactComponent as Mastercard } from "../assets/mastercard.svg"
import { ReactComponent as Visa } from "../assets/visa.svg"
import { ReactComponent as Lock } from "../assets/lock.svg"
import { ReactComponent as TruckPick } from "../assets/truck-pick.svg"
import { ReactComponent as TruckShip } from "../assets/truck-ship.svg"
import { ReactComponent as Verified } from "../assets/verified.svg"
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg"
import { ReactComponent as Tick } from "../assets/tick.svg"
import { ReactComponent as Opay } from "../assets/opay.svg"


export default function Cart(props) {

    const location = useLocation()

    const [cartItems, setcartItems] = useState(location.state)
    const [toggleCheckbox, setToggleCheckbox] = useState(false)
    const [toggleCheckbox2, setToggleCheckbox2] = useState(false)

    const deliveryFee = 50000

    useEffect(() => {
        setcartItems(location.state)
    }, [location])


    function total(numbers) {
        return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    return (
        <div className='pt-[80px] px-[30px] mb-[70px] sm:px-[90px] bg-white'>
            <div className="py-[50px]">

                <div className="relative bg-white p-[5px] flex flex-col md:flex-col lg:flex-row gap-[40px]">

                    <div className="flex-[6] flex flex-col gap-[40px]">
                        <div className="flex flex-col gap-[20px]  text-[12px]">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-[10px]">
                                    <Verified />
                                    <p className="">Customer Address</p>
                                </div>
                                <div className="flex flex-row items-center gap-[10px]">
                                    <p className="">Change</p>
                                    <ArrowRight />
                                </div>
                            </div>
                            <hr className='border-primary' />
                            <p className="">KRISHINA LEROY</p>
                            <p className="">St Catherine| Lagos - Ikeja| +234908873099</p>
                        </div>
                        <div className="flex flex-col gap-[20px]  text-[12px]">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-[10px]">
                                    <Verified />
                                    <p className="">Delivery Details</p>
                                </div>
                                <div className="flex flex-row items-center gap-[10px]">
                                    <p className="">Change</p>
                                    <ArrowRight />
                                </div>
                            </div>
                            <hr className='border-primary' />
                            <p className="">KRISHINA LEROY</p>
                            <p className="">St Catherine| Lagos - Ikeja| +234908873099</p>
                        </div>

                        <div className="flex flex-col gap-[20px] text-[12px] border-[1px] border-solid border-primary p-[10px]">
                            <div className="flex flex-row gap-[10px]">
                                <TruckPick />
                                <p className="">Pick-up Station</p>
                            </div>
                            <hr className='border-primary' />
                            <p className="">Pick-up Station</p>

                            <div className="">
                                <p className="text-[11px]">Delivery between 11 July and 13 July</p>
                                <p className="">Head Office Idumota, Lagos</p>
                                <p className="">No 16 Saf City Shop in between slots Market Idumota, Lagos Building 38</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px] text-[12px] border-[1px] border-solid border-primary p-[10px]">
                            <div className="flex flex-row gap-[10px]">
                                <TruckShip />
                                <p className="">Shipment</p>
                            </div>
                            <hr className='border-primary' />
                            <p className="">Delivery</p>
                            <p className="text-[11px]">Delivery between 11 July and 13 July</p>
                            <div className="flex flex-col gap-[10px]">
                                {cartItems.map((product) => (
                                    <div key={product.id} className="flex flex-row gap-[10px] items-center">
                                        <Link to={`/product-view/${product.id}`} state={product}>
                                            <div className="bg-cover bg-center bg-no-repeat h-[100px] w-[100px]"
                                                style={{ backgroundImage: `url(${product.img})` }}
                                            >
                                            </div>
                                        </Link>
                                        <div className="w-[50%]"> <p className="">{product.product_name}</p></div>

                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px] text-[12px]">
                            <div className="flex flex-row items-center gap-[10px]">
                                <Verified />
                                <p className="">Customer Address</p>
                            </div>

                            <hr className='border-primary' />

                            <div className="flex flex-row gap-[10px] text-[12px]">
                                <div className="relative flex justify-center items-center h-[20px] w-[20px]">
                                    <input type="checkbox" name="" id="" className={`absolute opacity-0 cursor-pointer ${toggleCheckbox ? "z-[100]" : ""}`}
                                        onClick={(e) => { setToggleCheckbox(e.target.checked) }}
                                    />
                                    <Tick className={`z-[100] absolute ${toggleCheckbox ? "block" : "hidden"}`} />
                                    <div className={`flex justify-center items-center border-[1px] border-solid border-primary p-[10px] rounded-full h-[20px] w-[20px] cursor-pointer ${toggleCheckbox ? "bg-[#007200]" : "bg-transparent"}`}>

                                    </div>
                                </div>

                                <div className="flex flex-col gap-[20px]">
                                    <p className=''>Pay Now</p>
                                    <div className="flex flex-row gap-[20px]">
                                        <p className=''>Pay instantly and securely from your  credit/debit card</p>
                                        <div className="flex flex-row gap-[10px]">
                                            <Mastercard />
                                            <Visa />
                                            <Opay />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-row gap-[10px] text-[12px]">
                                <div className="relative flex justify-center items-center h-[20px] w-[20px]">
                                    <input type="checkbox" name="" id="" className={`absolute opacity-0 cursor-pointer ${toggleCheckbox2 ? "z-[100]" : ""}`}
                                        onClick={(e) => { setToggleCheckbox2(e.target.checked) }}
                                    />
                                    <Tick className={`z-[100] absolute ${toggleCheckbox2 ? "block" : "hidden"}`} />
                                    <div className={`flex justify-center items-center border-[1px] border-solid border-primary p-[10px] rounded-full h-[20px] w-[20px] cursor-pointer ${toggleCheckbox2 ? "bg-[#007200]" : "bg-transparent"}`}>

                                    </div>
                                </div>

                                <div className="flex flex-col gap-[20px]">
                                    <p className=''>Bank Transfer</p>
                                    <div className="flex flex-row gap-[20px]">
                                        <p className=''>You will be redirected to our secure checkout page</p>
                                    </div>
                                </div>
                            </div>

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
                            <p className="">{price(total(cartItems.map((items) => items.price)) + deliveryFee)}</p>

                        </div>
                        <hr className='border-grey' />
                        <div className="flex flex-col justify-between gap-[6px] text-[13px]">
                            <div className="flex flex-row justify-between gap-[10px]">
                                <p className="font-bold">Total</p>
                                <p className="">{price(total(cartItems.map((items) => items.price)) + deliveryFee)}</p>
                            </div>

                            <p className='self-end text-[11px]'>Delivery charges included</p>
                        </div>
                        <Link to="/order-confirm" state={cartItems} className='w-full'>
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



                </div>
            </div>

        </div>
    )
}
