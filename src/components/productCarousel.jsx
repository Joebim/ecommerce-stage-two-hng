import React, { useState, useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { price } from './price'
import { Link } from 'react-router-dom'



export default function ProductCarousel(props) {


  return (
    <>

      <div className={` py-[30px]  w-full`}>
        <div className="w-full">
          <h1>Similar Products</h1>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={2}
            grabCursor={false}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 5,
              },
              972: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
              },
              1127: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 15,
              }

            }}
            scrollbar={false}
            navigation={true}
            pagination={false}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >



            {props.data?.map((product, id) => (
              <SwiperSlide key={id}>
                <div key={id} className="relative bg-white p-[5px] flex flex-col gap-[60px] justify-between">
                  <div className="flex flex-col gap-[10px]">
                    <Link to={`/product-view/${id}` } state={product}>
                      <div className="bg-cover bg-center bg-no-repeat h-[200px] w-full"
                        style={{ backgroundImage: `url(${product.img})` }}
                      >
                      </div>
                    </Link>

                    <p className="text-[13px]">{product.product_name}</p>
                    <div className="">
                      <p className='text-[14px]'>{price(product.price)}</p>
                      <div className="flex flex-row gap-[10px] items-center">
                        <p className="text-grey line-through text-[14px]">{price(product.discounted_price)}</p>
                        
                      </div>
                    </div>
                 </div>
                 <div className=" absolute p-[3px] bg-primaryLight text-[11px] right-[10px] top-[10px]">-{product.percentage_off}%</div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper >
        </div>
      </div>
    </>
  )
}