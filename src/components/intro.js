import React from "react";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        whitehat_stoic
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
         Thoughts on technology and philosophy 
          (check my other websites! {' '}
        <a
          href="https://tech-stoic.github.io"
          className="underline hover:text-success duration-200 transition-colors"
        >
          tech-stoic.github.io
        </a>{' '}
        and{' '}
        <a
          href="https://www.rationalstoic.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          RationalStoic)
        </a>
        .
      </h4>
    </section>
  )
}
