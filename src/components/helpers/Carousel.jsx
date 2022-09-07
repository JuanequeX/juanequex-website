import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectCards, Autoplay } from "swiper";

import img1 from '../../assets/about/playas.png'
import img2 from '../../assets/about/sumus.png'
import img3 from '../../assets/about/magma.png'
import img4 from '../../assets/about/brightcoder.png'

const Container = styled.div`
  margin: 4rem 0 2rem;
  height: 50vh !important;
  width: 60% !important;

  .mySwiper {
    height: 100%;
    width: 100%;
  }

  .swiper-slide {
    align-items: center;
    background-color:  #EEEDDE;
    border-radius: 20px;
    display: flex;
    justify-content: center;
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
          delay: 2000,
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
        <SwiperSlide><img className='img-swiper' src={img1} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img className='img-swiper-sumus' src={img2} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img className='img-swiper' src={img3} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img className='img-swiper' src={img4} alt="The Weirdos" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel
