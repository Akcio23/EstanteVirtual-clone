import React, { ReactNode } from 'react';

interface item{
    text: ReactNode;
}

const NavItens = (props:item) => {
  return (
    <div>
     <p className='p-2 hover:text-custom-gree '>{props.text}</p> 
    </div>
  )
}

export default NavItens
