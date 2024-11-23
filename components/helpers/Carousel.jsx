"use client"

import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react"
import { SwiperSlidesData } from "@/components/Data"
import { EffectCards, Autoplay } from "swiper";
import Image from 'next/image'

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 50vh !important;
  justify-content: center;
  width: 90% !important;

  @media (min-width: 768px) {
    height: 50vh !important;
    margin:4rem 0 2rem;
  }

  .mySwiper {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .swiper-slide {
    align-items: center;
    background-color:  #EEEDDE;
    border-radius: 20px;
    display: flex;
    height: 300px;
    justify-content: center;

    @media (min-width: 768px) {
      height: 450px;
    }
  }

  .swiper-button-next{
    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    &:after {
      display: none;
    }
  }
`
const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination = {{
          type: 'fraction',
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        {SwiperSlidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image className='img-swiper' width="auto" height={slide.height} src={slide.image} alt={slide.altText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Carousel
