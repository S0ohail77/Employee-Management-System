import React, { useState } from 'react'

const Header = ({data}) => {

  const [userName, setUserName] = useState('')

  // if(!data){
  //   console.log('Admin');
    
  // }else{
  //   setUserName(data.firstName)
  // }
  
   const userLogOut =()=>{
      localStorage.setItem('loggedInUser' ,'')
      window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName</span> </h1>
      <button onClick={userLogOut} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
