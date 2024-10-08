import React, {ReactNode } from 'react';

interface data{
    categories: ReactNode,
    image: string,

}

const Categories = (props:data) => {
  return (
    <div className='flex  bg-custom-gree text-white p-2 pl-6 pr-6 xl:w-[24%] xl:h-[5%] xs:w-[70%] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-light cursor-pointer gap-2 whitespace-nowrap overflow-hidden items-center xl:justify-center xs:justify-start'>
        <img src={props.image} alt="" width={'25px'} className=""/>
      <p>{props.categories}</p>
    </div>
  )
}

export default Categories
