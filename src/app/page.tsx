import MenuComponent from "./components/Menu";
import Header from "./components/Header";
import DemoCarousel from "./components/Carrosel";
import Categories from "./components/Categories";

import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center z-100 ">
      <Header />
      <MenuComponent />
      <div className="xl:w-[50%] xs-w[80%] flex flex-col mt-4 ">




        <DemoCarousel />
        <div className="flex mt-10 justify-around xl:flex-row xs:flex-col xs:justify-center xs:items-center xs:gap-3">
          <div className='flex bg-custom-gree text-white p-2 pl-6 pr-6 xl:w-[24%] xl:h-[5%] xs:w-[65%] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-light cursor-pointer gap-2 whitespace-nowrap overflow-hidden'>
              <img src="livro.png" alt="" width={'25px'} />
              <p>Boxes Imperdíveis </p>
          
          </div>
          <div className='flex bg-custom-gree text-white p-2 pl-6 pr-6 xl:w-[24%] xl:h-[5%] xs:w-[65%] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-light cursor-pointer gap-2 whitespace-nowrap overflow-hidden'>
              <img src="maquina.png" alt="" width={'25px'} />
              <p>Clássicos </p>
          
          </div>
          <div className='flex bg-custom-gree text-white p-2 pl-6 pr-6 xl:w-[24%] xl:h-[5%] xs:w-[65%] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-light cursor-pointer gap-2 whitespace-nowrap overflow-hidden'>
              <img src="lupac.png" alt="" width={'25px'} />
              <p>Lançamentos </p>
          
          </div>
          <div className='flex bg-custom-gree text-white p-2 pl-6 pr-6 xl:w-[24%] xl:h-[5%] xs:w-[65%] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.25)] font-light cursor-pointer gap-2 whitespace-nowrap overflow-hidden'>
              <img src="casa.png" alt="" width={'25px'} className="sm:hidden lg:flex"/>
              <p>Young Adult </p>
          
          </div>
          
          
          
        </div>
      </div >


    </div>

  );
}
