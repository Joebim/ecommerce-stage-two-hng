import React, { useState } from 'react'

export default function QuantityCounter({quantity}) {
    const [quantityCount, setQuantityCount] = useState(1)


    return (
        <>
            <button
                onClick={() => { setQuantityCount(quantityCount - 1) }} disabled={quantityCount <= 0}
                className={`flex justify-center ${quantityCount <= 0 ? "bg-primaryLight text-black" : "bg-primary text-white"} items-center h-[20px] w-[20px] text-[15px]`}>-</button>
            <div className="flex justify-center items-center text-black text-[12px] h-[20px] w-[20px]">{quantityCount}</div>
            <button
                onClick={() => { setQuantityCount(quantityCount + 1) }}
                className={`flex justify-center bg-primary text-white items-center h-[20px] w-[20px] text-[15px]`}>+</button>
        </>

    )
}
