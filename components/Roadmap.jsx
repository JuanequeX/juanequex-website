"use client"

import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from './helpers/DrawSvg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Data } from "./Data"

const Section = styled.section`
  background-color: #EEEDDE;
  min-height: 100vh;
  position: relative;
  width: 100vw;
`

const Title = styled.h3`
  align-items: center;
  border-bottom: 2px solid #181C25;
  color: #181C25;
  display: flex;
  font-family: "sora";
  font-size: 2.5rem;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-top: 2rem;
  text-transform: capitalize;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 2rem;
  }
`

const Container = styled.div`
  align-items: center;
  background-color: #EEEDDE;
  display: flex;
  height: 200vh;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 90%;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 40em) {
    width: 97%;
    margin-left: 1rem;
  }
`

const SvgContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Items = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  list-style: none;
  width: 100%;

  @media (max-width: 40em) {
    width: 90%;
  }

  &>*:nth-of-type(2n +1) {
    justify-content: start;

    @media (max-width: 40em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 40em) {
        border-radius: 50px 0 50px 0;
        text-align: left;
        p {
          border-radius: 40px 0 40px 0;
        }
      }
    }

    p {
      border-radius: 50px 0 50px 0;
    }
  }

  &>*:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 40em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 50px 0 50px;
    }
  }
`

const Item = styled.li`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`

const ItemContainer = styled.div`
  border: 3px solid #181C25;
  height: fit-content;
  padding: 1rem;
  width: 40%;

  @media (max-width: 48em) {
   width: 85%;
  }
`

const Box = styled.p`
  background-color: #181C25;
  box-shadow: 0px 0px 14px 6px rgba(24,28,37,0.42);
  color: #181C25;
  font-family: "sora";
  height: fit-content;
  padding: 1rem;
  position: relative;
`
const Subtitle = styled.span`
  color: #EEEDDE;
  display: block;
  font-size: 1rem;
  text-transform: capitalize;

  @media (max-width: 48em) {
    font-size: 1.25em;
    font-weight: 600;
  }

  @media (max-width: 64em) {
    text-align: left;
  }
`

const Text = styled.span`
  color: #EEEDDE;
  display: block;
  font-size: .75rem;
  text-transform: capitalize;
  font-weight: 400;
  margin: 0.5rem;

  @media (max-width: 64em) {
    font-size: .8em;
    text-align: left;
    margin: .5rem 0;
    display: block;
  }

  @media (max-width: 40em) {
    display: block;
  }
`


const RoadMapItem = ({title, period, subText, addToRef}) => {
   return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <Subtitle>{title}</Subtitle>
            <span className='period'>{period}</span>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>

  )
}

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },{
          y: '-30%',

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end:'bottom center',
            scrub: true
          }
        }
      )
    })
    return() => {};
  },[])

  return (
    <Section id='roadmap'>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          {Data.map((item) => (
            <RoadMapItem
              key={item.id}
              addToRef={addToRefs}
              title={item.title}
              period={item.period}
              subText={item.subText}
            />
          ))}
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap
