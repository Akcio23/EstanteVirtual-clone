import MenuComponent from "./components/Menu";
import Header from "./components/Header";
import DemoCarousel from "./components/Carrosel";
import Categories from "./components/Categories";
import CarroselItens from "./components/CarroselItens";
import Rows from "./components/Rows";
import Banner from "./components/Banner";
import { editoras } from '../../public/editoras';
import { autores } from '../../public/autores';
import { backgroudOne, backgroudTwo } from '../../public/backgroud';
import Footer from "./components/Footer";
import Ev from "./components/Ev";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <div className="flex flex-col items-center z-100 ">
      <Header />
      <MenuComponent />

      <div className="w-[80%] xl:w-[60%] xs:w-[80%] flex flex-col mt-4">
        <DemoCarousel />

        <div className="flex flex-col mt-10 gap-3 justify-around xl:flex-row xs:flex-col xs:justify-center xs:items-center xs:gap-3">
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
          <Rows data={editoras} />

        </div>

        <div className="xl:w-[100%] xs:w-[100%] flex flex-col mt-4">
          <h2 className="mt-10 mb-5 font-semibold">Só você ainda não leu</h2>
          <CarroselItens />
        </div>

        <div>
          <h2 className="mt-10 mb-5 font-semibold">Descubra novas histórias </h2>
          <Banner data={backgroudOne} />
        </div>

        <div className="xl:w-[100%] xs:w-[100%] flex flex-col">
          <h2 className="mt-10 mb-5 font-semibold ">Autores</h2>
          <Rows data={autores} />

        </div>

        <div className="xl:w-[100%] xs:w-[100%] flex flex-col mt-4 ">
          <h2 className="mt-10 mb-5 font-semibold">Livros mais desejados</h2>
          <CarroselItens />
        </div>

        <div>
          <h2 className="mt-10 mb-5 font-semibold">Leia mais!</h2>
          <Banner data={backgroudTwo} />
        </div>

        <div className="w-[100%] ">
          <h2 className="mt-10 mb-5 font-semibold ">Conheça a Estante virtual!</h2>
          <div className="flex flex-col justify-around gap-3 sm:flex-row sm:justify-between ">
            <Ev
              image={"maquina.png"}
              title={"Conectando novas histórias"}
              cont={"Conectamos leitores a livrarias e sebos de todo o Brasil, com segurança, qualidade e praticidade. Tudo para te ajudar a descobrir novas histórias."}
            />

            <Ev
              image={"livro.png"}
              title={"Leitura para todos"}
              cont={" Atuamos na democratização da leitura oferecendo livros novos e seminovos de todos os gêneros e faixas de preço."}
            />

            <Ev image={"seta.png"}
              title={"Apoio à economia circular"}
              cont={"Ao comprar na Estante Virtual, além de ajudar a milhares de pequenas livrarias, você também contribui com a cultura do re-uso."} />
          </div>

        </div>


      </div>

      <div className="mt-5 p-5 border-t-2">
        <Footer />
      </div>
    </div>
  );
}
