"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperSlidesData } from '@/components/Data'
import { EffectCards, Autoplay } from 'swiper'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ type: 'fraction' }}
        scrollbar={{ draggable: true }}
        modules={[EffectCards, Autoplay]}
        navigation={true}
        effect="cards"
        grabCursor={true}
        className="mySwiper"
      >
        {SwiperSlidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image}
              alt={slide.altText}
              fill
              style={{ objectFit: 'contain', padding: '0 1.5rem' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
