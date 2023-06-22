import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto" id="intro">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#6ECEEB]" />
                    <div className="w-1 sm:h-80 h-40 green-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        {/* Hi, I'm <span className="text-[#6ECEEB]">Harry</span> */}
                        <span className="blue-text-gradient">HIPTECH</span> SOLUTION
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        {" "}
                        Với vai trò là Nhà cung cấp giải pháp công nghệ thông
                        tin, <br className="sm:block hidden" /> HIPTECH đã từng
                        bước thực hiện sứ mệnh “Ứng dụng công nghệ{" "}
                        <br className="sm:block hidden" /> thông tin giải quyết
                        vấn đề của cuộc sống”
                    </p>
                </div>
            </div>
            <ComputersCanvas />

            <div className="absolute xs:bottom-10 bottom-23 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
                        <motion.dev
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-white mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
