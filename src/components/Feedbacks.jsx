import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
        <p className="text-white font-black text-[48px]">"</p>
        <div className="mt-1 flex-col">
            <p className="text-white tracking-wider text-[18px]">
                {testimonial}
            </p>
            <div className="mt-7 flex justify-between items-center gap-1 bottom-3">
                <div className="flex-1 flex flex-col">
                    <p className="text-white font-bold text-[17px]">
                        <span className="blue-text-gradient">@ {name}</span>
                    </p>
                    {/* <p className="mt-1 text-secondary text-[12px]">
                  {designation} of {company}
                </p> */}
                </div>

                <div className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full ">
                  <img
                      src={image}
                      alt={`feedback-by-{name}`}
                      className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <h2
                        className={`${styles.sectionHeadText} text-white text-center`}
                        id="customer"
                    >
                        CẢM NHẬN
                        <span className="blue-text-gradient">
                            {" "}
                            CỦA KHÁCH HÀNG
                        </span>
                    </h2>
                </motion.div>
            </div>
            <div
                className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
            >
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feedbacks;
