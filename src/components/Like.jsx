import React, { useState } from 'react'
import { ReactComponent as Heart } from '../assets/heart.svg'


export const Like = ({isLiked}) => {


    const [liked, setLiked] = useState(isLiked)
  return (
    <div className="absolute right-[10px] top-[10px] p-[8px] rounded-[6px] bg-[#ffffff96] cursor-pointer"
    onClick={()=>{setLiked(!liked)}}
    ><Heart style={{fill:`${liked ? "#000000" : "transparent"}`, stroke:"#000000"}} className="scale-[.80]" /></div>

  )
}
