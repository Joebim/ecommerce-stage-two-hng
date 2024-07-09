import React from 'react'
import {ReactComponent as Vector1} from  "../assets/Vector.svg"
import {ReactComponent as Vector2} from  "../assets/Vector-1.svg"
import {ReactComponent as Vector3} from  "../assets/Vector-2.svg"
import {ReactComponent as Vector4} from  "../assets/Vector-3.svg"
import {ReactComponent as Vector5} from  "../assets/Vector-4.svg"

export default function Footer() {
    return (
        <div className=" w-full bg-white px-[30px] sm:px-[90px] py-[40px]">
            <div className="flex flex-col sm:flex-row justify-between pb-[40px] gap-[50px] min-[678px]:gap-[10%]">
                <div className="grid grid-cols-2 gap-[50px] sm:flex sm:flex-row flex-[2] justify-between">
                    <div className="flex flex-col gap-[25px]">
                        <h1 className="font-bold">Legal</h1>
                        <div className="flex flex-col gap-[20px] text-[14px]">
                            <p className="cursor-pointer hover:text-primary">Claims</p>
                            <p className="cursor-pointer hover:text-primary">Privacy</p>
                            <p className="cursor-pointer hover:text-primary">Terms</p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <h1 className="font-bold">Company</h1>
                        <div className="flex flex-col gap-[20px] text-[14px]">
                            <p className="cursor-pointer hover:text-primary">About</p>
                            <p className="cursor-pointer hover:text-primary">Blog</p>
                            <p className="cursor-pointer hover:text-primary">Jobs</p>
                            <p className="cursor-pointer hover:text-primary">Press</p>
                          
                        </div>

                    </div>
                    <div className="flex flex-col gap-[25px]">
                    <h1 className="font-bold">Support</h1>
                        <div className="flex flex-col gap-[20px] text-[14px]">
                            <p className="cursor-pointer hover:text-primary">Price</p>
                            <p className="cursor-pointer hover:text-primary">Guides</p>
                            <p className="cursor-pointer hover:text-primary">Contact us</p>
                            <p className="cursor-pointer hover:text-primary">Chat with us</p>
                          
                        </div>

                    </div>
                    <div className="flex flex-col gap-[25px]">
                    <h1 className="font-bold">Solution</h1>
                        <div className="flex flex-col gap-[20px] text-[14px]">
                            <p className="cursor-pointer hover:text-primary">Marketing</p>
                            <p className="cursor-pointer hover:text-primary">Analytics</p>
                            <p className="cursor-pointer hover:text-primary">Commerce</p>
                            <p className="cursor-pointer hover:text-primary">Insight</p>
                          
                        </div>

                    </div>

                </div>
                <div className="flex-[1] flex flex-col gap-[20px] w-auto sm:w-[500px]">
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="font-bold">Subscribe to our newsletter</h1>
                        <p className="text-[14px]">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center">
                        <input type="text" placeholder='Enter  Your Email' className='w-[70%] px-[7px] py-[10px] border-black border-solid border-[0.5px] rounded-[5px] text-[13px]'/>
                        <button className='w-[30%] flex justify-center items-center text-center px-[30px] py-[11px] rounded-[5px] bg-black text-white text-[13px] font-[300] hover:bg-[#3d3d3d] duration-150'>Subscribe</button>
                    </div>

                </div>

            </div>
            <hr className='border-grey'/>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center pt-[25px] gap-[30px]">
                <p className="text-center sm:text-left">© 2020, your Company, Inc. All Rights Reserved.</p>
                <div className="flex flex-row gap-[20px]">   
                    <Vector1/>
                    <Vector2/>
                    <Vector3/>
                    <Vector4/>
                    <Vector5/>
                </div>

            </div>
        </div>
    )
}
