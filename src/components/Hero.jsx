import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Uday😎</span>
          </h1>
          <p
            className={`${styles.sectionSubText} font-bold inline-block max-w-max overflow-hidden whitespace-nowrap border-r-8 border-white animate-typewriter animate-blinkCursor`}
          >
            I am a developer, who loves to code!
          </p>
        </div>
      </div>

      {/* Centered GIF with Thinner Gradient Border */}
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <div className="p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  transform translate-y-[7rem] rounded-xl">
          <img
            src="./src/assets/terminal.gif"
            alt="computer"
            className="w-[400px] h-[400px] object-contain rounded-xl"
          />
        </div>
      </div> */}

      <div className="absolute inset-0 flex justify-center items-center">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;