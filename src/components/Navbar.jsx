import React, { useEffect, useState } from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as ArrowDown } from '../assets/arrow-down.svg'
import { ReactComponent as Cart } from '../assets/cart.svg'
import { ReactComponent as Heart } from '../assets/heart.svg'
import { ReactComponent as Help } from '../assets/help.svg'
import { ReactComponent as User } from '../assets/user.svg'
import { ReactComponent as Search } from '../assets/search.svg'
import { ReactComponent as Menu } from '../assets/menu.svg'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../api/Context'

export default function Navbar() {

    const data = useContext(Context)

    const [cartItems, setcartItems] = useState()

    useEffect(() => {
        setcartItems(data.cart)
    }, [data])



    const location = useLocation()

    const path = location.pathname.split('/')[1]


    return (
        <div className={`${path == "" ? "sticky" : "absolute"} top-0 w-full bg-white flex flex-row justify-between h-[80px] items-center px-[30px] sm:px-[90px] sm:shadow-md z-[100]`}>

            <Link to="/">
                <div className="flex flex-row gap-[5px] items-center">
                    <Menu className=" md:block lg:hidden cursor-pointer" />
                    <Logo style={{ color: "#000000" }} />

                    <p>Furniflex</p>
                </div>
            </Link>


            <div className="flex-row gap-[30px] items-center md:hidden lg:flex hidden">
                <Link className='cursor-pointer' to="/">
                    <div className={`border-solid ${path === "" ? "border-b-[1px] border-primary" : "hover:border-b-[1px] hover:border-grey"}`}>
                        <p>Home</p>
                    </div>

                </Link>
                <Link className='cursor-pointer' to="">
                    <div className={` hover:border-b-[1px] hover:border-grey`}>
                        <p>About Us</p>
                    </div>
                </Link>

                <Link className='cursor-pointer' to="">
                    <div className={` hover:border-b-[1px] hover:border-grey`}>
                        <p>Services</p>
                    </div>
                </Link>
            </div>

            <div className="flex flex-row items-center gap-[20px]">

                <div className="flex flex-row items-center gap-[10px] cursor-pointer">
                    <User />
                    <p className="md:block hidden">Krishina</p>
                    <ArrowDown className="md:block hidden" />
                </div>


                <div className="flex-row items-center gap-[10px] md:flex hidden cursor-pointer">
                    <Help />
                    <p className="">Help</p>
                    <ArrowDown className="" />
                </div>


                <Link to="" className='md:hidden block'>
                    <div className="py-[5px] hover:border-b-[1px] hover:border-grey">
                        <Search className="" />
                    </div>


                </Link>

                <Link to="" className='md:block hidden'>
                    <div className="flex flex-row items-center gap-[10px] py-[5px] hover:border-b-[1px] hover:border-grey">
                        <Heart />
                        <p className="">Wishlist</p>
                    </div>
                </Link>

                <Link to="/cart">
                    <div className={`relative flex flex-row items-center gap-[10px]  ${path === "cart" ? "border-b-[1px] border-primary" : "hover:border-b-[1px] hover:border-grey"} py-[5px]`}>
                        <Cart />
                        <p className="md:block hidden">Cart</p>

                        <div className={`absolute ${cartItems?.length == 0 ? "hidden" : "flex"} top-0 left-[-10px] h-[15px] w-[15px] justify-center items-center bg-[#b61e1e] text-white text-[8px] rounded-full`}>{cartItems?.length}</div>
                    </div>
                </Link>




            </div>
        </div >
    )
}
