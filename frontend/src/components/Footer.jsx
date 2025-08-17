import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
          Prescripto is a smart hospital appointment booking platform that makes healthcare simple and accessible. Patients can easily book consultations, manage schedules, and track medical appointments anytime, anywhere — ensuring seamless connection between doctors and patients.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-123-456-7890</li>
            <li>support@prescripto.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright {currentYear} @ Prescripto.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
