import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = (e) => {

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setcategory] = useState('')

    const [newtask, setNewtask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
     
        setNewtask({taskTitle,taskDate,taskDescription,category,active:false, newTask:true,failed:false, complete:false})
        
      const data = userData
      
      
      data.forEach(function (elem){
        if(asignTo == elem.firstName){
            elem.tasks.push(newtask)
            elem.taskCounts.newTask =  elem.taskCounts.newTask+1
            
        }
      })

      setUserData(data)
      console.log(data);
      

      setTaskTitle('')
      setAsignTo('')
    setTaskDate('')
      setcategory('')
      setTaskDescription('')
      
      
        
    }
  return (
    <div>
       <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-wrap items-start w-full justify-between'>
                    <div className='w-1/2'>
                        <div>


                            <h3 className='text-sm text-gray-300 mb-0.5 '>Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e)=>{
                                    setTaskTitle(e.target.value)
                                }}
                            className='text-sm px-2 w-4/5 rounded outline-none bg border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI Design' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                               value={taskDate}
                                onChange={(e)=>{
                                    setTaskDate(e.target.value)
                                }}
                            className='text-sm px-2 w-4/5 rounded outline-none bg border-[1px] border-gray-400 mb-4' type='date' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Asign to </h3>
                            <input
                                 value={asignTo}
                                onChange={(e)=>{
                                    setAsignTo(e.target.value)
                                }}
                            className='text-sm px-2 w-4/5 rounded outline-none bg border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Categroy</h3>
                            <input
                                value={category}
                                onChange={(e)=>{
                                    setcategory(e.target.value)
                                }}
                              
                            className='text-sm px-2 w-4/5 rounded outline-none bg border-[1px] border-gray-400 mb-4' type='text' placeholder='design, dev, etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start' >
                        <h3 className=' text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea 
                          value={taskDescription}
                                onChange={(e)=>{
                                    setTaskDescription(e.target.value)
                                }}
                        className='w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'  name='' id='' cols='30' rows='10' placeholder='Write a description' />
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full" >Create Task</button>
                    </div>
    

                </form>
            </div>

    </div>
  )
}

export default CreateTask
