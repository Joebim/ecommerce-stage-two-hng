import React, { useState } from 'react'
import { ReactComponent as Mastercard } from "../assets/mastercard.svg"
import { ReactComponent as Tick } from "../assets/tick.svg"
import { price } from '../components/price';
import { ReactComponent as TruckShip } from "../assets/truck-ship.svg"
import { useLocation } from 'react-router-dom';

export default function OrderConfirm() {

    const location = useLocation()
    const [cartItems, setcartItems] = useState(location.state)

    function total(numbers) {
        return numbers?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    const deliveryFee = 50000


    return (
        <div className="pt-[80px] px-[30px] mb-[70px] sm:px-[90px]">

            <div className="flex flex-col gap-[20px] pt-[50px] text-[12px]">
                <div className="flex flex-row gap-[10px] items-center">
                    <div className="h-[40px] w-[40px] bg-[#007200] rounded-full flex justify-center items-center">
                        <Tick />
                    </div>
                    <p className="font-bold">Thank you for placing an order on FurniFlex! Order N 13133872</p>
                </div>

                <div className="flex flex-row gap-[10px] p-[5px] py-[20px] bg-white">
                    <Mastercard />
                    <p className="">Mastercard Payment: Amount of {price(total(cartItems.map((items) => items.price)) + deliveryFee)} was made to our account and it has been confirmed by us </p>
                </div>
                <div className="flex flex-row gap-[10px] p-[5px] py-[20px] bg-white">
                    <TruckShip />
                    <p className="">Door Delivery</p>
                </div>
                <button className="py-[12px] w-[250px] self-start rounded-[6px] bg-primary text-white flex justify-center items-center text-[11px] cursor-pointer hover:bg-black duration-150">Save Order Details</button>


            </div>

        </div>
    )
}
