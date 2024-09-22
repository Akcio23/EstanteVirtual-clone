import React from 'react'

interface Data{
    image: string,
    title: string,
    cont: string
}

const Ev = (props:Data) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 border-2 rounded p-3'>
      <div className='flex flex-col justify-center items-center border-b-3 gap-5 '>
      <img src={props.image} alt="" className="filter invert w-[70%]" />
        <h3 className='mt-1 font-semibold text-gray-700 '>{props.title}</h3>
       
      </div>
      <p className='text-start text-sm'>{props.cont}</p>
    </div>
  )
}

export default Ev
