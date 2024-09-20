import React, { FC, ReactNode } from 'react';

interface data{
    categories: ReactNode,

}

const Categories = (props:data) => {
  return (
    <div className='flex bg-custom-gree text-white p-2 pl-10 pr-10 w-[20] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-light cursor-pointer'>
      <p>{props.categories}</p>
    </div>
  )
}

export default Categories
