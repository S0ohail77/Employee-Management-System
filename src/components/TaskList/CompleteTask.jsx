import React from 'react'

const CompleteTask = () => {
  return (
   
     <div>
          <div className='h-full flex-shrink-0 w-[300px] p-5  bg-red-400 rounded-xl '>
                <div className='flex justify-between items-center'>
                    <h3 className=' bg-red-600 text-sm px-3 py-1 rounded'>
                        High
                    </h3>
                    <h4 className='text-sm'>
                        22 Aug 2026
                    </h4>
                </div>

                <h2 className='mt-5 text-2xl font-semibold'> Make a responsive website</h2>
                <p className='text-sm mt-2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt harum ex animi nihil! Atque, eos assumenda. Commodi perferendis suscipit dolorem?</p>

                <div className='mt-2'>
                    <button className='w-full bg-green-400'>Completed</button>
                </div>
            </div>
     </div>
    
  )
}

export default CompleteTask
