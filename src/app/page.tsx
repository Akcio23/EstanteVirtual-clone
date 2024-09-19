import MenuComponent from "./components/Menu";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col ">
     <Header/>
     <MenuComponent/>
     
    </div>
    
  );
}
