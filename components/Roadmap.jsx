"use client"

import { useLayoutEffect, useRef } from 'react'
import DrawSvg from './helpers/DrawSvg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Data } from './Data'

gsap.registerPlugin(ScrollTrigger)

const RoadMapItem = ({ title, period, subText, addToRef }) => (
  <li className="roadmap__item" ref={addToRef}>
    <div className="roadmap__item-content">
      <div className="roadmap__item-box">
        <span className="roadmap__item-subtitle">{title}</span>
        <span className="roadmap__item-period">{period}</span>
        <span className="roadmap__item-text">{subText}</span>
      </div>
    </div>
  </li>
)

const Roadmap = () => {
  const revealRefs = useRef([])
  revealRefs.current = []

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  useLayoutEffect(() => {
    if (window.innerWidth <= 768) return
    const t1 = gsap.timeline()
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        { y: '0' },
        {
          y: '-30%',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
          },
        }
      )
    })
    return () => {}
  }, [])

  return (
    <section id="roadmap" className="roadmap">
      <h3 className="roadmap__title">Roadmap</h3>
      <div className="roadmap__container">
        <div className="roadmap__svg">
          <DrawSvg />
        </div>
        <ul className="roadmap__items">
          <li>&nbsp;</li>
          {Data.map((item) => (
            <RoadMapItem
              key={item.id}
              addToRef={addToRefs}
              title={item.title}
              period={item.period}
              subText={item.subText}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Roadmap
