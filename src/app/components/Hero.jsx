import React from 'react'
import logo from '../../../public/images/image.webp'
import Image from 'next/image'


export default function Hero() {
  return (
    <div>
        
        <Image alt='web'  src={logo} width={100} height={100}></Image>

        

    </div>
  )
}
