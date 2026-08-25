import React, { useContext, useEffect,  useState } from 'react'
import Login from './components/Auth/Login'
import Header from './components/other/Header'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'




const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUser, setloggedInUser] = useState(null)
  const authData = useContext(AuthContext)


 useEffect(() => {
  const loggedIn = localStorage.getItem('loggedInUser')

  if (loggedIn) {
   const userData = JSON.parse(loggedIn)
    setUser(userData.role)
    setloggedInUser(userData.data)
  }
}, [])

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
     setUser('admin')
     localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(authData ){
      const employee =  authData.employees.find((e)=>email==e.email && e.password==password )
      if(employee){
        setUser('employee')
        setloggedInUser(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))  
      }
      
    } else{
      alert('Invalid Creadentials')
    }
    
  }



  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ""}
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee'?<EmployeeDashboard data={loggedInUser} /> :null)}
    </>
  )
}

export default App
