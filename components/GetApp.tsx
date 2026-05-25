"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import FramerMotion from "../common/FramerMotion"

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <FramerMotion>
        <div className='get-app'>
          <div className='flex flex-col flex-1 w-full items-start justify-center gap-12 z-20'>
            <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for free now!</h2>
            <p className='regular-24 text-gray-10'>Availabel in iOS and Android</p>
            <div className='flex flex-col gap-3 w-full whitespace-nowrap xl:flex-row'>
              <Button
                title='App Store'
                type='button'
                icon='/apple.svg'
                variant='btn_white'
                full
              />
              <Button
                title='Play Store'
                type='button'
                icon='/android.svg'
                variant='btn_dark_green_outline'
                full
              />
            </div>
          </div>
          <div className='flex flex-1 items-center justify-end'>
            <Image
              src='/phones.png'
              alt='phones'
              width={550}
              height={870}
            />
          </div>
        </div>
      </FramerMotion>
    </section>
  )
}

export default GetApp
