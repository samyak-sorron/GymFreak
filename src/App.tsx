import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home"
import { useEffect, useState } from "react";
import {SelectedPage} from "./shared/types";
import Benefits from "./scenes/Benefits";
import OurClasses from "./scenes/OurClasses";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";


function App() {
  useEffect(() => {
    document.title = "GymFreak";
    const handleScroll=()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else{
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)
  }, []);
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/> 
      <Footer/>
    </div>
  );
}

export default App;
