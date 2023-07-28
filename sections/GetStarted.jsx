"use client";

import { motion } from "framer-motion";
import { StartSteps, TitleText, TypingText } from "@/components";
import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { startingFeatures } from "@/constants";
import Image from "next/image";

const GetStarted = () => (
    <section className={` ${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                variants={planetVariants("left")}
                className={`flex-1 ${styles.flexCenter} relative`}
            >
                <Image
                    src="/get-started.png"
                    alt="get started"
                    width={1000}
                    height={1000}
                    style={{
                        width: "90%",
                        height: "auto",
                    }}
                    quality={100}
                    className="object-contained "
                />
            </motion.div>

            <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className={`flex-[0.75] flex justify-center flex-col`}
            >
                <TypingText title="| How Metavarsus Works" />
                <TitleText title={<>Get Stated with just a few</>} />
                <div className="mt-[31px] flex flex-col mx-w-[370px] gap-[24px]">
                    {startingFeatures.map((feature, index) => (
                        <StartSteps
                            key={index}
                            number={index + 1}
                            text={feature}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default GetStarted;
