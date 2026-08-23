import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  

  const [email, setEmail] = useState('')
  const [password, setaPssword] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    
    setEmail('')
    setaPssword('')
  }

  return (
    <div className=' h-screen w-screen flex items-center justify-center'>
        <div className=' border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className=' flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
              
            }} 
            required 
            className=' outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl  px-5 rounded-full placeholder:text-gray-400' type="email" placeholder="Enter Your Email" />
            <input
            value={password}
            onChange={(e)=>{
              setaPssword(e.target.value)
              
            }} 
            required
             className=' outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl  px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder="Enter Your Password"  />
            <button className='mt-7  text-white border-none outline-none hover:bg-emerald-700 bg-emerald-600 py-2 text-lg  px-8 w-full rounded-full placeholder:text-gray'>Log in</button>

        </form>
        </div>
    </div>
  )
}

export default Login
