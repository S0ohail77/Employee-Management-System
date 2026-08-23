import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData0, setUserData0] = useState(null)

    const data = getLocalStorage()
    console.log(data);
    

  return (
    <div>
      <AuthContext.Provider value={'Sohail'}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
