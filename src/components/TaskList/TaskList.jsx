import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
   
    
    return (
        <div id='taskList' className=' h-[55%] w-full overflow-x-auto py-5 mt-10  flex-nowrap flex items-center justify-start gap-10'>
            {data.tasks.map((elem ,idx)=>{
             
             if(elem.active){
                return <AcceptTask key={idx} />
             }

             if(elem.newTask){
                return <NewTask key={idx} />
             }
             if(elem.completed){
                return <CompleteTask key={idx} />
             }
             if(elem.failed){
                return <FailedTask key={idx} />
             }
             
            })}

        </div>
    )
}

export default TaskList
