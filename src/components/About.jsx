import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({
    index,
    title,
    icon,
    details_1,
    details_2,
    details_3,
}) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt="web-development"
                    className="w-192 h-176 object-contain mb-2 mt-4"
                />

                <h3 className="text-white text-[20px] font-bold text-center mt-3">
                    {title}
                </h3>

                <div className="flex flex-col items-center mt-5 font-thin text-[#ccc]">
                    <p>{details_1}</p>
                    <p>{details_2}</p>
                    <p>{details_3}</p>
                </div>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                {/* <p className={styles.sectionSubText}>Introduction</p> */}
                <h2
                    className={`${styles.sectionHeadText} text-white text-center`}

                >
                    VỀ <span className="blue-text-gradient">DỊCH VỤ</span>
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-white text-[17px] max-w-3xl text-center m-auto leading-[30px]"
            >
                Đến nay, qua hơn 3 năm không ngừng nỗ lực và phát triển, khi
                nguồn nhân lực đã vững mạnh và chất lượng; ngoài các dịch vụ
                trên,{" "}
                <span className="blue-text-gradient font-bold">HIPTECH</span> đã
                mở rộng lĩnh vực hoạt động, nhận được nhiều dự án và cung cấp
                thêm nhiều dịch vụ để giải quyết bài toán cho khách hàng
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 items-center">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
