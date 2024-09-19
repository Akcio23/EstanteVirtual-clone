import React from 'react';
import MenuComponent from '../components/Menu';

interface PageProps {
  children: any; // Define o tipo correto para a prop children
}

function Page(){
  return (
    <div>
      <MenuComponent/>
    </div>
  );
}



export default Page;
