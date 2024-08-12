// import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../Navbar/ActionButton";
import HomePageText from "@/assets/assets/HomePageText.png";
import HomePageGraphic from "@/assets/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";



type Props = {
    selectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage)=>void;
}

const Home = ({setSelectedPage}: Props) => {
    // const isAboveMediumScreens = useMediaQuery("(max-width: 1060px)");
  return (
    <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Image and main header    */}
        <motion.div 
            className="md:flex justify-center mx-auto w-5/6 md:h-5/6"
            onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
        >
            {/* main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* headings */}
                <motion.div 
                    className="md:-mt-20" 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true,amount: 0.5}} 
                    transition={{duration:1.5}} 
                    variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0},
                }}>
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text"src={HomePageText}/>
                        </div>
                    </div>
                    <p className="mt-8 text-sm ">Gym paragraph</p>
                </motion.div>

                <motion.div 
                    className="flex gap-8 mt-8 items-center" 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{once:true,amount: 0.5}} 
                    transition={{delay:0.5, duration:0.5}} 
                    variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0},
                }}>
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink 
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
                        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                        >learn More</AnchorLink>
                </motion.div>
            </div>
            {/* image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-page-graphic" src={HomePageGraphic}/>
            </div>
        </motion.div>
    </section>
  )
}

export default Home