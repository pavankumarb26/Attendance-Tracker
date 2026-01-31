import React from 'react'

const Maintainance = ({message, close}) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex items-center justify-center'>
        <div className='bg-black h-30 w-70 rounded-3xl text-slate-100 border-2 border-red-600/30 text-center font-bold text-sm flex flex-col items-center gap-5'>
            <button className='flex justify-end text-red-500 w-full p-2 mr-5 font-extrabold' onClick={close} >X</button>
            {message}
        </div>
      
    </div>
  )
}

export default Maintainance
