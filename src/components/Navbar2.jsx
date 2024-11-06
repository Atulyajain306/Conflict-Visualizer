import React from 'react'
import { Link } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div>
       <div className='flex bg-blue-400'>
         <ul className='flex gap-x-10 py-2 text-white text-lg font-medium px-9'>
            
         <Link to="/analysis/Europe"> <li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>EUROPE</li></Link>
         <Link to="/analysis/Africa"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>AFRICA</li></Link>
         <Link to="/analysis/North_America"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>NOTH AMERICA</li></Link>
         <Link to="/analysis/South_America"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>SOUTH AMERICA</li></Link> 
         <Link to="/analysis/South_Asia"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>SOUTH ASIA</li></Link>
         <Link to="/analysis/East_Asia"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>EAST ASIA</li></Link>
         <Link to="/analysis/Central_Asia"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>CENTRAL ASIA</li></Link>
         <Link to="/analysis/Middle_East"> <li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>MIDDLE EAST</li></Link> 
         <Link to="/analysis/Oceania"> <li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>OCEANIA</li></Link>
         <Link to="/analysis/South_East_Asia"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>SOUTH EAST ASIA</li></Link>
         <Link to="/analysis/Central_America"><li className='hover:cursor-pointer hover:font-semibold hover:text-[#767578]'>CENTRAL AMERICA</li></Link> 
         </ul>
       </div>
    </div>
  )
}

export default Navbar2
