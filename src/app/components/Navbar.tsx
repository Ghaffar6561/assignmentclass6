import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    
    <div>
      
      <nav className='bg-gray-900 text-white px-12 w-full flex justify-between'><div>Download App Via SMS</div> <div><span className='m-4'>Sign In</span> Sign Up</div></nav>
      <nav className=" text-1xl font-semibold flex bg-black h-12 py-2 px-3 justify-around items-center text-white  ">
        <div className='flex items-center'> <Link href="/"><img src="/download.png" alt="logo" className="h-8 cursor-pointer"/></Link></div>
        <div ><li className='flex space-x-8'>
            <ul><Link href="#!" className="hover:text-orange-800">Used Cars</Link></ul>
            <ul><Link href="#!" className="hover:text-orange-800">New Cars</Link></ul>
            <ul><Link href="#!" className="hover:text-orange-800">Bikes</Link></ul>
            <ul><Link href="#!" className="hover:text-orange-800">Auto Store</Link></ul>
            <ul><Link href="#!" className="hover:text-orange-800">Videos</Link></ul>
            <ul><Link href="#!" className="hover:text-orange-800">Forums</Link></ul>
            <ul><Link href="#!" className="hover:text-orange-800">Blog</Link></ul>
            <ul><Link href="#!" className="hover:text-orange-800">Mores</Link></ul>
            </li></div>
        <div><button className="bg-red-600 py-2 font-bold px-7 rounded-md">Post an Ad</button></div>
        
      </nav>
    </div>
  )
}

export default Navbar
