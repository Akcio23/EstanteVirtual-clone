import React from 'react'

const Header = () => {
  return (
    <div className='flex w-screen bg-custom-gree justify-evenly p-2 text-white text-sm xs:hidden md:flex '>
      <div className='flex'><p>Compre aqui livros novos, usados e seminovos de milhares de sebos e livrarias.</p></div>
      <ul className='flex  gap-4 text-sm'>
        <li>Quero Vender</li>
        <li>Painel do Livreiro</li>
        <li>Acessibilidade</li>
        <li>Central de ajuda</li>
        </ul>
        
    </div>
  )
}

export default Header
