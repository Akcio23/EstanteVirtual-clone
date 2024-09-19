import React, { FC, ReactNode } from 'react';

interface Name {
    name: ReactNode;
}

const img = "https://static.netshoes.com.br/vue-components-ev/0.0.13/estantevirtual/images/4ad6658585e37407418cb8516376cea3.png"

function MenuComponent() {

    return (

        <nav className="flex text-black w-screen p-1 justify-center xs:flex-col md:flex-row  xs:gap-2 md:gap-10 ">

            <div className='flex items-center xs:items-center justify-center'>
                <img src={img} alt="logo" width={100} className="max-w-full h-auto" />
            </div>



            <div className='flex sm:w-[40%] xs:w-[97%] whitespace-nowrap ' >
                <div className='p-3 border-2 items-center md:w-[35%] xs:w-[70%] xs:justify-center sm:items-center'>
                    <span className='text-center'>Titulo e Autor </span>
                </div>


                <input type="text" className='p-3 border-2 xs:w-[100%] md:w-80%]' />
                <div className='border-2 transition-transform   flex items-center p-3 hover:bg-custom-blue ' >
                    <img src="vidro.png"
                        alt="lupa"
                        width={25}
                        className="transition-filter filter hover:brightness-0 hover:invert"
                        style={{ transition: 'filter 0.3s ease-in-out' }} />

                </div>


            </div>

            <ul className='flex gap-2 items-center xs:justify-around text-lg sm:w-[20%] sm:justify-evenly whitespace-nowrap'>
                <li><p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill="none" stroke="rgb(0, 123, 124)" stroke-width="2" />
                    </svg>
                    Minhas Listas
                </p>
                </li>
                <li><p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em">
                        <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5z"
                            fill="none" stroke="rgb(0, 123, 124)" strokeWidth="2"
                        />
                    </svg>
                    Entrar
                </p>
                </li>
                <li><p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em">
                        <path
                            d="M7 18c-.83 0-1.5.67-1.5 1.5S6.17 21 7 21s1.5-.67 1.5-1.5S7.83 18 7 18zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S17.83 18 17 18zM6.16 14l1.68-6H20V5H7.82L6.16 1H4v2h1.18l3.4 12H18v-2H6.16z"
                            fill="none" stroke="rgb(0, 123, 124)" strokeWidth="2"
                        />
                    </svg>

                </p>
                </li>
            </ul>




        </nav>


    )
}

export default MenuComponent;
