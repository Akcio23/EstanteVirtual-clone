import NavItens from './NavItens';
import React from 'react';



const img = "https://static.netshoes.com.br/vue-components-ev/0.0.13/estantevirtual/images/4ad6658585e37407418cb8516376cea3.png"

function MenuComponent() {

    return (

        <nav className="bg-white sticky top-0 left-0 w-full z-20  h-full p-2">
            <div className="flex text-black sm:p-5 justify-center flex-col sm:flex-row gap-2 sm:gap-10 pt-3 border-b-2">
                <div className='flex items-center xs:items-center justify-center'>
                    <img src={img} alt="logo" width={100} className="max-w-full h-auto" />
                </div>

                <div className='flex sm:w-[40%] xs:w-[100%] whitespace-nowrap  ' >
                    <div className='p-2 border-2 flex justify-center items-center sm:w-[25%] xs:w-[30%] overflow-hidden text-sm '>
                        <p >Titulo</p>
                    </div>

                    <input type="text" placeholder='Oque você esta procurando?' className='p-2 border-2 xs:w-[80%] sm:w-[80%] ' />
                    <div className='border-2 transition-transform   flex items-center p-3 hover:bg-custom-blue ' >
                        <img src="vidro.png"
                            alt="lupa"
                            width={25}
                            className="transition-filter filter hover:brightness-0 hover:invert"
                            style={{ transition: 'filter 0.3s ease-in-out' }} />
                    </div>


                </div>

                <ul className='flex justify-evenly gap-2 items-center xs:justify-around text-sm sm:w-[20%] sm:justify-evenly '>
                    <li><p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                fill="none" stroke="rgb(0, 123, 124)" strokeWidth="1" />
                        </svg>
                        Minhas Listas
                    </p>
                    </li>
                    <li><p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em">
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5z"
                                fill="none" stroke="rgb(0, 123, 124)" strokeWidth="1"
                            />
                        </svg>
                        Entrar
                    </p>
                    </li>
                    <li><p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em">
                            <path
                                d="M7 18c-.83 0-1.5.67-1.5 1.5S6.17 21 7 21s1.5-.67 1.5-1.5S7.83 18 7 18zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S17.83 18 17 18zM6.16 14l1.68-6H20V5H7.82L6.16 1H4v2h1.18l3.4 12H18v-2H6.16z"
                                fill="none" stroke="rgb(0, 123, 124)" strokeWidth="1"
                            />
                        </svg>

                    </p>
                    </li>
                </ul>

            </div>
            <div className='hidden items-stretch gap-4 justify-center font-medium text-gray-500 border-b-4 border-border text-sm xl:flex xs:hidden'>
                <div className='flex cursor-pointer'>
                    <p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1.5em"
                            height="1.5em"
                        >
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                                fill="rgb(0, 123, 124)"
                            />
                        </svg>
                    </p> <p className='border-r-2 h-[100%] p-2 pr-11'>Informe seu CEP</p></div>
                <div className='flex cursor-pointer'>
                    <p className="txt-mercury" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1.5em"
                            height="1.5em">
                            <path
                                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                                fill="rgb(0, 123, 124)"
                            />
                        </svg>
                    </p>
                    <p className='text-custom-gree p-2'>Categoria</p>
                </div>
                <NavItens text={'Sebos e Livreiros'} />
                <NavItens text={'Mais vendidos'} />
                <NavItens text={'Discos De Vinil'} />
                <NavItens text={'Principais Autores'} />
                <NavItens text={'Dicas de Livros'} />
                <NavItens text={'Livros Por Idiomas'} />
            </div>
        </nav>


    )
}

export default MenuComponent;
