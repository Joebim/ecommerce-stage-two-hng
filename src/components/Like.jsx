import React, { useState } from 'react'
import { ReactComponent as Heart } from '../assets/heart.svg'
import { useContext } from 'react'
import { Context } from '../api/Context'


export const Like = ({product}) => {

  const { addToWishlist, removeFromWishlist, like} = useContext(Context)

  const isIdIncluded = like?.some(like => like?.id === product?.id);

  return (
    <div className="absolute right-[18px] top-[18px] p-[8px] rounded-[6px] bg-[#ffffff96] cursor-pointer"
    onClick={()=>{isIdIncluded  ? removeFromWishlist(product.id) : addToWishlist(product)}}
    ><Heart style={{fill:`${isIdIncluded ? "#000000" : "transparent"}`, stroke:"#000000"}} className="scale-[.80]" /></div>

  )
}
