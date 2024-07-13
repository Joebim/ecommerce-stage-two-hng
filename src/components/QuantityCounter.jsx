import React, { useState } from 'react'
import { Context } from '../api/Context'
import { useContext } from 'react';

export default function QuantityCounter({item}) {
    const {increaseQuantity, decreaseQuantity } = useContext(Context);

    return (
        <>
            <button
                onClick={() => { decreaseQuantity(item.id) }} disabled={item?.quantity <= 1}
                className={`flex justify-center ${item?.quantity <= 1 ? "bg-primaryLight text-black" : "bg-primary text-white"} items-center h-[20px] w-[20px] text-[15px]`}>-</button>
            <div className="flex justify-center items-center text-black text-[12px] h-[20px] w-[20px]">{item?.quantity}</div>
            <button
                onClick={() => { increaseQuantity(item.id) }}
                className={`flex justify-center bg-primary text-white items-center h-[20px] w-[20px] text-[15px]`}>+</button>
        </>

    )
}
