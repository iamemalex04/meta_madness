"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "@/components";
import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { exploreWorlds } from "@/constants";
import Image from "next/image";

const World = () => (
    <section className={`${styles.paddings}`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex  flex-col`}
        >
            <TypingText
                title="| People on the World"
                textStyles="text-center"
            />
            <TitleText
                title={
                    <>
                        Track friends around you and invite them to play
                        together in the same world
                    </>
                }
                textStyles="text-center"
            />

            <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="relative mt-[68px] flex w-full h-[550px]"
            >
                <Image
                    src="/map.png"
                    alt="map"
                    width={1000}
                    height={1000}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5b6680]">
                    <Image
                        src="/people-01.png"
                        alt="people-1"
                        width={1000}
                        height={1000}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5b6680]">
                    <Image
                        src="/people-02.png"
                        alt="people-3"
                        width={1000}
                        height={1000}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5b6680]">
                    <Image
                        src="/people-03.png"
                        alt="people-1"
                        width={1000}
                        height={1000}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        className="w-full h-full"
                    />
                </div>
                <div className="absolute top-[177px] left-[20%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5b6680] md:block hidden">
                    <div className="bg-[url('/planet-02.png')] bg-bottom bg-cover bg-no-repeat w-full h-full rounded-[24px] flex flex-col relative p-[16px]">
                        <div className="flex absolute flex-col bottom-[16px] ">
                            <div className="flex justify-center items-center">
                                <img
                                    src="people-01.png"
                                    alt=""
                                    className="w-[24px] h-[24px] rounded-full aboslute z-20"
                                />
                                <img
                                    src="people-03.png"
                                    alt=""
                                    className="w-[24px] h-[24px] rounded-full ml-[-11px] aboslute z-10"
                                />
                                <img
                                    src="people-02.png"
                                    alt=""
                                    className="w-[24px] h-[24px] rounded-full aboslute z-1 ml-[-11px]"
                                />
                                <p className="text-xs text-white pl-2 ">
                                    +264 has joined
                                </p>
                            </div>
                            <h3 className="font-bold text-white">
                                The Upside Down
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="absolute top-10 right-[20%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5b6680] md:block hidden shadow-lg ">
                    <div className="bg-[url('/planet-03.png')] bg-bottom bg-cover bg-no-repeat w-full h-full rounded-[24px] flex flex-col relative p-[16px]">
                        <div className="flex absolute flex-col bottom-[16px] ">
                            <div className="flex justify-center items-center">
                                <img
                                    src="people-01.png"
                                    alt=""
                                    className="w-[24px] h-[24px] rounded-full aboslute z-20"
                                />
                                <img
                                    src="people-03.png"
                                    alt=""
                                    className="w-[24px] h-[24px] rounded-full ml-[-11px] aboslute z-10"
                                />
                                <img
                                    src="people-02.png"
                                    alt=""
                                    className="w-[24px] h-[24px] rounded-full aboslute z-1 ml-[-11px]"
                                />
                                <p className="text-xs text-white pl-2 ">
                                    +264 has joined
                                </p>
                            </div>
                            <h3 className="font-bold text-white">
                                Hawkins Labs
                            </h3>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
