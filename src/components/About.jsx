import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
         <Navbar/>
           <div className='m-6 text-4xl font-semibold flex items-center justify-center '> 
              Meet the Team Members</div>
               <div className='flex gap-x-24 my-12'>
              <div className='card rounded-2xl  items-center min-w-36 bg-slate-200 hover:bg-gray-300 p-14 mx-9 flex flex-col hover:cursor-pointer '><img src="src\assets\Atulya.jpg" className=' rounded-full w-36 flex justify-center items-center'  alt="" /><div className=' py-2 text-center text-xl font-bold'>Atulya Jain</div>
              <div className=' text-center text-xl'>IIIT DHARWAD</div>
                <div className='text-center text-xl'>(Team Lead)</div></div>

              <div className='card rounded-2xl items-center min-w-36 bg-slate-200 hover:bg-gray-300 p-14 mx-9 flex flex-col hover:cursor-pointer '><img src="src\assets\varang.jpg" className=' rounded-full w-36'  alt="" /><div className=' py-2 text-center text-xl font-bold'>Varang Pratap Singh</div>
              <div className=' text-center text-xl'>IIIT DHARWAD</div></div>              

              <div className='card rounded-2xl bg-slate-200 items-center min-w-36 hover:bg-gray-300 p-14 mx-9 flex flex-col hover:cursor-pointer '><img src=".\src\assets\Aman.jpg" className=' rounded-full w-40'  alt="" /><div className=' py-2 text-center text-xl font-bold'>Aman Gaikward</div>
              <div className=' text-center text-xl'>IIIT DHARWAD</div></div>

              <div className='card rounded-2xl bg-slate-200 items-center min-w-36 hover:bg-gray-300 p-14 mx-9 flex flex-col hover:cursor-pointer '><img src="src\assets\Ashutosh.png" className=' rounded-full w-36'  alt="" /><div className=' py-2 text-center text-xl font-bold'>Ashutosh Wani</div>
              <div className=' text-center text-xl'>IIIT DHARWAD</div></div>
          </div>
           <div className=' relative top-[22.8vh]'>
         <Footer/></div>
    </div>
  )
}

export default About
