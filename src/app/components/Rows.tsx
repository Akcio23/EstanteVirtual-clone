import React from 'react';

interface Infos {
  id: number;
  name: string;
  image_url: string;
}

interface Data {
  data: Infos[];
}

const Rows = (props:Data) => {
  const array = props.data
  return (
    <div className='grid grid-cols-2  md:grid-cols-8 gap-1'>
      {array.map(item => {
        return (
          <div key={item.id} className='flex flex-col justify-center items-center cursor-pointer'>
            <img src={item.image_url} alt="logo-editora" className="w-24 h-24" />
            <p className='font-light text-gray-500 text-center mt-2 text-sm'>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Rows;
