import React from 'react'
import Typewriter from 'typewriter-effect'

const TypeWriterText = () => {
  return (
    <div className='presentation-contaniner'>
      <h1 className="presentation-contaniner__title">Hi, I'm Juanequex c:</h1>
      <div className='presentation-contaniner__type-container'>
        <h2>My current background is focus on: </h2>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(`<span class="text-1">Fintech</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Web Development</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-4">Tech community leading</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
          }}
        />
      </div>
    </div>
  )
}

export default TypeWriterText
