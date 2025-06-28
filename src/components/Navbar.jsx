import React from 'react'

const Navbar = () => {
  return (
    <nav className=' container flex justify-center mt-6 py-5 px-4 bg-slate-500 mx-auto'>
        <div className="logo">
            <span className='font-bold text-xl'>Task Manager</span>
        </div>
      <ul className="flex gap-8 font-bold">
        {/* <li>Home</li> */}
        {/* <li>Your Tasks</li> */}
      </ul>
    </nav>
  )
}

export default Navbar
