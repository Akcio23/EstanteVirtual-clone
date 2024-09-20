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

          <Categories categories={'Boxes Imperdíveis '} image={"livro.png"} />
          <Categories categories={'Clássicos'} image={"maquina.png"} />
          <Categories categories={'Lançamentos'} image={"lupac.png"} />
          <Categories categories={'Young Adult '} image={"casa.png"} />
          
        </div>
      </div >
    </div>

  );
}
