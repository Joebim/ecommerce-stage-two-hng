import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between h-[80px] bg-white items-center'>
        <div className="flex flex-row gap-[10px]">

            <p>Furniflex</p>
        </div>
        <div className="flex flex-row gap-[30px] items-center ">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Services</a>
        </div>
        <div className=""></div>
    </div>
  )
}
