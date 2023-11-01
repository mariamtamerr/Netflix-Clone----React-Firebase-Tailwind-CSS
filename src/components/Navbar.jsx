import React from 'react'

const Navbar = () => {
  return (
    <div>
      

 <div className='Navbar flex items-center justify-between p-4 px-6 z-[100] w-full absolute'>
    <h1 className='text-red-600 text-4xl font-bold '  >NETFLIX</h1>
    <div>
        <button className='text-white pr-4' >Sign in</button>
        <button className='bg-red-600 rounded px-6 py-2 text-white cursor-pointer'>Login</button>
    </div>
</div>



    </div>
  )
}

export default Navbar
