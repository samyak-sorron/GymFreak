import { useState } from "react";
import Link from "./Link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/assets/Logo.png";
import {SelectedPage} from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "./ActionButton";



type Props = {
  isTopOfPage:boolean;
  selectedPage:SelectedPage;
  setSelectedPage: (value:SelectedPage)=>void;
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}:Props) => {

  const flexBetween="flex items-center justify-between";
  const isAboveMediumScreens=useMediaQuery("(min-width: 1060px)");
  const [isMenuToggeled, setIsMenuToggeled] = useState(false);
  const navbarBackground=isTopOfPage? "":"bg-primary-100 drop-shadow";
  
  return (
    <nav className={`${navbarBackground} ${flexBetween}`+"fixed top-0 z-30 w-full py-6"}>
      <div className={`${flexBetween} w-5/6 max-w-7xl mx-auto`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img alt="logo" src={Logo}/>
          {isAboveMediumScreens?(<div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} text-sm gap-8`}>
              <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link 
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link 
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link 
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
          </div>):(
            <button className="rounded-full bg-secondary-500 p-2"
            onClick={()=>setIsMenuToggeled(!isMenuToggeled)}>
              <Bars3Icon className="h-6 w-6 text-white"/>
            </button>
          )}
        </div>
      </div>   
      {/* Mobile Menu Modal    */}
      {!isAboveMediumScreens && isMenuToggeled && (
        <div className="fixed bottom-0 right-0 z-40 w-[300px] h-screen bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={()=>setIsMenuToggeled(!isMenuToggeled)}>
              <XMarkIcon className="w-6 h-6 rounded-full text-gray-400"/>
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link 
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link 
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link 
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
            </div>
        </div>
        
      )}
    </nav>    
  )
}

export default Navbar;