import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { heroimg } from "../assets";

const Hero = () => {
  return (
    <section className={`w-full h-screen flex items-center justify-between`}>
      {/* <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full primary-gradient' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#0BCEAF]'>Harry</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            I'm a User Interface - Graphic designer <br className='sm:block hidden' />
            and Front End Developer.
          </p>
        </div>
      </div> */}
      {/* <ComputersCanvas /> */}

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Welcome to my portfolio</p>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#0BCEAF]'>Harry</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            I'm a User Interface - Graphic designer <br className='sm:block hidden' />
            and Front End Developer.
          </p>
        </div>
      <button className="hero_btn font-bold mt-10">Download CV</button>
      </motion.div>

      <div>
        <img src={heroimg} alt="hero image" className="w-[500px]" />
      </div>
      

      <div className='absolute w-full bottom-32 flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero,'hero');
