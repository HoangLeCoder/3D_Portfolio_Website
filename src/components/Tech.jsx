import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2
                    className={`${styles.sectionHeadText} text-white text-center`}
                    id="customer"
                >
                    GIÁ TRỊ <span className="blue-text-gradient">CỐT LÕI</span>
                </h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-40">
                {technologies.map((technology) => (
                    <div className="w-3000 h-3000" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
