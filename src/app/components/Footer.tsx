import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className='flex over whitespace-nowrap gap-3 justify-center'>
      <p className='text-sm font-semibold text-gray-600'>Uma Empresa do Grupo </p>
      <img src="https://static.netshoes.com.br/webstore-navigation-view/ffc0581fd/estantevirtual/96e244216a2d41c577914f1dd51c46d2.png "
       alt="" 
       className='w-[18%] md:w-[10%] xl:w-[5%]'
       />
      </div>
      <p className='text-xs font-light'>
        Estantevirtual.com.br Serviços de Busca na Internet Ltda - 
        CNPJ 08.311.795/0001-60 Rua da Assembleia, 100, sala 2801, Centro, Rio de Janeiro/RJ, 
        CEP: 20011-904 - Formulário de Atendimento
      </p>

    </div>
  )
}

export default Footer
