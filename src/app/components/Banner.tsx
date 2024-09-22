import React from 'react'


interface Infos{
    id: number;
    name: string;
    img:string;
}

interface Data{
    data: Infos[];
}

const Banner = (props:Data) => {
    const backgroud = props.data
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 cursor-pointer'>
        {backgroud.map(itens =>{
            return(
                <div key={itens.id} className=' '>
                    <img src={itens.img} alt={itens.name} className='' />
                  
 
                </div>
            )
        })}
    </div>
  )
}

export default Banner
