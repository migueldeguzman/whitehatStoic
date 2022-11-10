import React from "react";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        whitehatStoic
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hi there! I'm Miguel De Guzman! I'm a futurist and stoic trying to utilize this one life we got through {' '}
        <a
          href="https://forum.effectivealtruism.org/users/miguel-1"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Effective Altruism!
        </a>
          {' '}(Check out my {' '}
        <a
          href="https://www.youtube.com/@whitehatStoic"
          className="underline hover:text-success duration-200 transition-colors"
        >
          YouTube Channel!)
        </a>.
        {' '} Join Me On This Journey!
      </h4>
    </section>
  )
}
