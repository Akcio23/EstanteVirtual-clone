"use client";

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { livros } from '../../../public/livros';

class CarroselItens extends Component {
    render() {
        // Define quantos itens você quer exibir por slide
        const itemsPerSlide = 4;

        // Agrupa os itens em slides
        const groupedItems = [];
        for (let i = 0; i < livros.length; i += itemsPerSlide) {
            groupedItems.push(livros.slice(i, i + itemsPerSlide));
        }

        return (
            <Carousel showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop={true}  className='h-[20%]'  renderArrowPrev={(onClickHandler, hasPrev) => 
                hasPrev && (
                  <button onClick={onClickHandler} className="absolute left-1 top-1/4 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 shadow-lg
                   hover:bg-gray-300 border-2 text-black hidden md:flex z-10">
                    &lt;
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) => 
                hasNext && (
                  <button onClick={onClickHandler} className="absolute right-2 top-1/4 transform -translate-y-1/2
                   bg-gray-100 rounded-full p-2 shadow-lg hover:bg-gray-300 border-2 text-black hidden md:flex z-10">
                    &gt;
                  </button>
                )
              }>
                {groupedItems.map((group, index) => (
                    <div key={index} className='flex flex-wrap justify-around mt-2  xz:flex xz:flex-wrap '>
                        {group.map(item => (
                            <div key={item.id} className="w-32  md:w-48 lg:w-32 p-2 cursor-pointer items-center">
                                <img src={item.img_url} alt={item.name} className="w-full h-auto" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-start font-bold text-xs text-gray-500 pt-2'>{item.name}</p>
                                    <p className='text-start font-extralight text-xs'>{item.autor}</p>
                                    <p className='text-start font-extralight text-xs'>{item.editora}</p>
                                    <p className='text-start font-extralight text-xs'>{item.ano}</p>
                                    <div className='pt-1 border-t-2 border-black-500 text-start font-extralight text-xs pb-1 flex gap-1'>
                                        A partir de <p className='font-bold text-xs text-gray-500'>R${item.valor}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default CarroselItens;
