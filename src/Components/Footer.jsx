import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-wrap w-full justify-between items-center rounded-t-[50px] sm:rounded-t-[60px] md:rounded-t-[80px] bg-black md:py-[120px] sm:py-[100px] py-[80px] md:px-[75px] sm:px-[50px] px-[40px]'>
      <div>
        <img src="./Logo transparent.png" alt="logo" className='h-[60px] sm:h-[80px] md:h-[100px]' />
        <p className='md:text-4xl sm:text-3xl text-2xl'>Together, We Can,</p>
      </div>
      <div className='flex flex-wrap text-white gap-15'>
        <div>
          <h3 className='text-xl underline mb-4'>Quick View</h3>
          <ul className='font-medium text-lg'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl underline mb-4'>Contact Us</h3>
          <ul className='font-medium text-lg'>
            <li className='flex'><img src="./call.svg" alt="call" /> <p>0450613210</p> </li>
            <li className='flex'><img src="distance.svg" alt="distance" /> <p>Willetton</p> </li>
            <li className='flex'> <img src="./mail.svg" alt="mail" /><p>ali@idealrealtywa.com.au</p></li>
            <li className='flex'><img src="./language.svg" alt="language" /><p>www.idealrealtywa.com.au</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer