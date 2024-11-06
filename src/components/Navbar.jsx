import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-500 flex justify-between ">
       <div className="flex"> 
        <img src="https://media.tenor.com/WTrCRx4RwgcAAAAM/animated-gun-drawn-gun.gif" width={60} height={20} alt="" />
     <Link to="/"><div className="text-2xl font-bold mx-9 py-3 text-white">Conflict Visualizer</div></Link>

      </div> 
        <div className="mx-6">
          <ul className="flex gap-6 justify-center">
            <Link to="/home"><li className="text-2xl text-white py-3 ">Home</li></Link>
            <Link to="/about"><li className="text-2xl text-white py-3">About</li></Link>
           <Link to="/analysis"> <li className="text-2xl text-white py-3">Visualize</li></Link>
          </ul>
        </div>
     </div>
    </div>
  )
}

export default Navbar
