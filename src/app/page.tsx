import MenuComponent from "./components/Menu";
import Header from "./components/Header";
import DemoCarousel from "./components/Carrosel";
import Categories from "./components/Categories";
import CarroselItens from "./components/CarroselItens";
import Editora from "./components/Editora";

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <div className="flex flex-col items-center z-100">
      <Header />
      <MenuComponent />

      <div className="xl:w-[60%] xs:w-[80%] flex flex-col mt-4">
        <DemoCarousel />

        <div className="flex mt-10 justify-around xl:flex-row xs:flex-col xs:justify-center xs:items-center xs:gap-3">
          <Categories categories={'Boxes Imperdíveis '} image={"livro.png"} />
          <Categories categories={'Clássicos'} image={"maquina.png"} />
          <Categories categories={'Lançamentos'} image={"lupac.png"} />
          <Categories categories={'Young Adult '} image={"casa.png"} />
        </div>

        <div className="xl:w-[100%] xs:w-[100%] flex flex-col mt-4 ">
          <h2 className="mt-10 mb-5 font-semibold">Mais vendidos na Bienal São Paulo</h2>
          <CarroselItens />
        </div>

        <div className="xl:w-[100%] xs:w-[100%] flex flex-col">
        <h2 className="mt-10 mb-5 font-semibold ">Editoras</h2>
      
        <Editora/>
       
        </div>

        <div className="xl:w-[100%] xs:w-[100%] flex flex-col mt-4">
          <h2 className="mt-10 mb-5 font-semibold">Só você ainda não leu</h2>
          <CarroselItens />
        </div>


      </div>
    </div>
  );
}
