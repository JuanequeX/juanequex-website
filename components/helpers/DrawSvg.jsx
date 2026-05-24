"use client"

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Vector from './Vector'

gsap.registerPlugin(ScrollTrigger)

const DrawSvg = () => {
  const ref = useRef(null)
  const ballRef = useRef(null)

  useLayoutEffect(() => {
    const element = ref.current
    const svg = document.getElementsByClassName('svg-path')[0]
    const length = svg.getTotalLength()

    svg.style.strokeDasharray = length
    svg.style.strokeDashoffset = length

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: (self) => {
          svg.style.strokeDashoffset = length - length * self.progress
        },
        onToggle: (self) => {
          ballRef.current.style.display = self.isActive ? 'none' : 'inline-block'
        },
      },
    })

    return () => {
      if (t1) t1.kill()
    }
  }, [])

  return (
    <>
      <div className="draw-svg__ball" ref={ballRef} />
      <div className="draw-svg__container" ref={ref}>
        <Vector />
      </div>
    </>
  )
}

export default DrawSvg
