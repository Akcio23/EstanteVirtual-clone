import { editoras } from '../../../public/editoras';
import React from 'react';

const Editora = () => {
  return (
    <div className='grid grid-cols-2  md:grid-cols-4 gap-3'>
      {editoras.map(item => {
        return (
          <div key={item.id} className='flex flex-col justify-center items-center cursor-pointer'>
            <img src={item.image_url} alt="logo-editora" className="w-24 h-24" />
            <p className='font-light text-gray-500 text-center mt-2'>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Editora;
