import { ClassType, SelectedPage } from '../../shared/types'
import image1 from "@/assets/assets/image1.png";
import image2 from "@/assets/assets/image2.png";
import image3 from "@/assets/assets/image3.png";
import image4 from "@/assets/assets/image4.png";
import image5 from "@/assets/assets/image5.png";
import image6 from "@/assets/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Class from './Class';

const classes:Array<ClassType>=[
    {
      name:"Weight Training classes",
      description:"",
      image:image1
    },
    {
      name:"Weight Training classes",
      description:"",
      image:image1
    },
    {
      name:"Yoga classes",
      description:"",
      image:image2
    },
    {
      name:"Ab Core classes",
      description:"",
      image:image3
    },
    {
      name:"Weight Training classes",
      description:"",
      image:image4
    },
    {
      name:"fitnessclasses",
      description:"",
      image:image5
    },
    {
      name:"Training classes",
      description:"",
      image:image6
    },
  ];

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourClasses" className='w-full bg-primary-100 py-8'>
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
        >
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
                <div className='md:w-3/5'>
                    <HText>Our Classes</HText>
                    <p className='py-5'></p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                  {classes.map((item: ClassType, index) => (
                    <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                  ))}
                </ul>
            </div>
        </motion.div>
        
    </section>
  )
}

export default OurClasses