"use client";

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} className='z-0' >
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-09-16/7086_Home%2520Desk.png" alt="Banner 1" /></div>
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-09-02/8421_full-banner-desk%2520%25284%2529.png" alt="Banner 2" /></div>
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-04-04/9508_homedesk.psicologia.png" alt="Banner 3" /></div>
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-08-14/6721_Hotsite-Desk.png" alt="Banner 4" /></div>
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-09-07/8706_EV2024_Concept_CampanhaLiteraturaAsiatica2.png" alt="Banner 5" /></div>
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-08-28/2715_Home%2520Desk.png" alt="Banner 6" /></div>
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-08-06/4357_descubrahomedesk.png" alt="Banner 7" /></div>
                <div><img src="https://static.estantevirtual.com.br/bnn/l_estantevirtual/2024-08-26/2210_EV2024-Romances-ArrebatadoresFull-Banner-Desk-1310x300.png" alt="Banner 8" /></div>
        
            </Carousel>
        );
    }
};

export default DemoCarousel;
