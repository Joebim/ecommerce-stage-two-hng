import React, {useRef} from 'react'
import bgImage from "../assets/blue-armchair.jpg"
import ProductList from '../components/ProductList'

export default function Home() {
  
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <>
            <div className="bg-white sm:bg-[#F2F2F2]">
                <div className="h-[300px] sm:h-[100vh] m-[15px] sm:m-0 pt-0 px-[15px] sm:px-[90px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="hidden sm:flex flex-col gap-[40px]">
                        <div className=" w-[600px]">
                            <h1 className="text-white font-bold text-[40px]">Transform Your Home with Elegance and Comfort</h1>
                        </div>
                        <div className=" w-[500px]">
                            <p className="text-white text-[17px]">Discover our exquisite collection of furniture designed to elevate your living spaces.</p>
                        </div>
                        <button
                        onClick={()=>scrollToTarget()}
                        className="px-[90px] py-[15px] rounded-[5px] bg-primary text-white self-start hover:bg-black duration-150">Order Now</button>
                    </div>
                </div>

                <div className="flex sm:hidden flex-col gap-[20px] p-[15px]">
                    <div className=" w-[100%]">
                        <h1 className="text-black font-bold text-[20px]">Transform Your Home with <span className='text-[#794471]'>Elegance and Comfort</span></h1>
                    </div>
                    <div className=" w-[100%]">
                        <p className="text-black text-[14px]">Discover our exquisite collection of furniture designed to elevate your living spaces.</p>
                    </div>
                    <button
                    onClick={()=>scrollToTarget()}
                    className="px-[90px] py-[15px] rounded-[5px] bg-primary text-white self-start hover:bg-black duration-150">Order Now</button>
                </div>
            </div>




            <div className="">
                <ProductList ref={targetRef}/>
            </div>
        </>
    )
}
