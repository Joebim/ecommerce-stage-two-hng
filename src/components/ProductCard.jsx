import React from 'react'
import { Rating } from './Rating'
import { Like } from './Like'
import { price } from './price'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../data/Context'

export default function ProductCard(props) {

    const { addToCart } = useContext(Context);

    return (
        <>
            {props.data.map((product, index) => (
                <div key={index} className="relative bg-white p-[5px] flex flex-col gap-[60px] justify-between">
                    <div className="flex flex-col gap-[10px]">
                        <Link to={`/product-view/${index}` } state={product}>
                            <div className="bg-cover bg-center bg-no-repeat h-[300px] w-full"
                                style={{ backgroundImage: `url(${product.img})` }}
                            >
                            </div>
                        </Link>

                        <p className="text-[13px]">{product.product_name}</p>
                        <div className="">
                            <p className='text-[14px]'>{price(product.price)}</p>
                            <div className="flex flex-row gap-[10px] items-center">
                                <p className="text-grey line-through text-[14px]">{price(product.discounted_price)}</p>
                                <div className="p-[3px] bg-primaryLight text-[11px]">-{product.percentage_off}%</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[10px]"><Rating rating={product.rating} /><p className='text-[13px]'>({product.number_rated})</p></div>
                    </div>

                    <button onClick={() => addToCart(product)} className="py-[12px] rounded-[6px] bg-primary text-white flex justify-center items-center text-[12px] cursor-pointer hover:bg-black duration-150">Add to Cart</button>


                    <Like isLiked={product.is_liked} />
                </div>
            ))}

        </>
    )
}
