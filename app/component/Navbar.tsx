import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 ">
      <div className="flex items-center px-10 ">
        <Link href="/">
          <Image src="/aec-logo.png" alt="AEC Horizon Logo" width={100} height={35} />
        </Link>
      </div>
      
      <div className="flex space-x-10 py-3 px-8 bg-[#FFFFFF78] rounded-full border-1 border-white">
        <Link href="/" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Home
        </Link>
        <Link href="/why-us" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Why Us
        </Link>
        <Link href="/services" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Services
        </Link>
        <Link href="/experts" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Our Experts
        </Link>
        <Link href="/pricing" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Pricing
        </Link>
      </div>
      
      <div>
        <Link href="/contact" className="px-6 mx-8 py-3 bg-[#FFFFFF78] text-[#424770] rounded-full font-medium font-inter text-l hover:underline hover:decoration-[#4B336D] border-1 border-white">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
