"use client"

import AppScreen from "../assets/images/claims-processing.png";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export function ProductShowcase() {

    const appImage = useRef<HTMLImageElement>(null);

    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: ["start end", "end end"]
    })

    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return(
        <>
            <div className={"bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24"}>
                <div className={"container"}>
                    <h2 className={"text-center text-5xl sm:text-6xl font-bold tracking-tighter"}>Intuitive Interface</h2>
                    <div className={"max-w-3xl mx-auto"}>
                        <p className={"text-xl text-white/70 mt-5 text-center"}>
                        Leave the admin drudgery behind—focus on what matters most: patient care.
                        </p>
                    </div>
                    <div className={"flex items-center justify-center mt-14"}>
                        <motion.div
                            style={{
                                opacity: opacity,
                                rotateX: rotateX,
                                transformPerspective: "800px"
                            }}
                        >
                            <Image src={AppScreen} alt={"Product Showcase"} ref={appImage} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
