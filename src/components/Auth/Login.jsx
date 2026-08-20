import React from 'react'

const Login = () => {
  return (
    <div className=' h-screen w-screen flex items-center justify-center'>
        <div className=' border-2 rounded-xl border-emerald-600 p-20'>
        <form className=' flex flex-col items-center justify-center'>
            <input className=' outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl  px-5 rounded-full placeholder:text-gray-400' type="email" placeholder="Enter Your Email" />
            <input className=' outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl  px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder="Enter Your Password"  />
            <button className='mt-7  text-white border-none outline-none hover:bg-emerald-700 bg-emerald-600 py-2 text-lg  px-8 w-full rounded-full placeholder:text-gray'>Log in</button>

        </form>
        </div>
    </div>
  )
}

export default Login
