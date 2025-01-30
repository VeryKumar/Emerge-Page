"use client"

import Link from "next/link";
import {ArrowRight} from "lucide-react";
import CursorImage from "../assets/images/cursor.png"
import MessageImage from "../assets/images/message.png"
import Image from "next/image";
import {motion} from "framer-motion";

const GlowEffect = () => (
    <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.3)] blur-xl transform scale-110" />
        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.15)] blur-2xl transform scale-125" />
    </div>
);

const StarField = ({ count = 50 }: { count?: number }) => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[1px] h-[1px] bg-white rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

const SaturnPlanet = ({ position }: { position: { x: number, y: number } }) => {
    return (
        <motion.div
            className="absolute z-10"
            style={{
                left: position.x,
                top: position.y,
                filter: "drop-shadow(0 0 30px rgba(255,221,153,0.3))",
            }}
            initial={{ rotate: 0 }}
            animate={{
                rotate: 360,
                x: [0, -100, 0],
                y: [0, 50, 0]
            }}
            transition={{
                rotate: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                },
                x: {
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                },
                y: {
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                }
            }}
        >
            {/* Planet body */}
            <motion.div
                className="rounded-full relative overflow-hidden backdrop-blur-[2px]"
                style={{
                    width: 90,
                    height: 90,
                    background: "radial-gradient(circle at 30% 30%, rgba(255,221,153,1) 0%, rgba(251,147,208,0.95) 60%, rgba(79,33,161,1) 100%)",
                }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.4)_45%,rgba(255,255,255,0.2)_50%,transparent_55%)] mix-blend-overlay" />
                <GlowEffect />
            </motion.div>
            {/* Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px]">
                <svg viewBox="0 0 160 160" className="absolute top-0 left-0">
                    <defs>
                        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(248,122,255,0.9)" />
                            <stop offset="50%" stopColor="rgba(47,216,254,0.9)" />
                            <stop offset="100%" stopColor="rgba(248,122,255,0.9)" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#glow)" opacity="0.9">
                        <ellipse
                            cx="80"
                            cy="80"
                            rx="70"
                            ry="18"
                            fill="none"
                            stroke="url(#ringGradient)"
                            strokeWidth="2.5"
                            className="opacity-90"
                        />
                        <ellipse
                            cx="80"
                            cy="80"
                            rx="65"
                            ry="15"
                            fill="none"
                            stroke="url(#ringGradient)"
                            strokeWidth="1.5"
                            className="opacity-80"
                        />
                    </g>
                </svg>
            </div>
        </motion.div>
    );
};

const Planet = ({ size, color, position, alignmentDelay = 0 }: { 
    size: number, 
    color: string, 
    position: { x: number, y: number }, 
    alignmentDelay?: number 
}) => {
    return (
        <motion.div
            className="absolute z-10"
            style={{
                width: size,
                height: size,
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
            }}
            initial={{
                x: position.x,
                y: position.y,
            }}
            animate={{
                x: [position.x, position.x + 50, position.x],
                y: [position.y, position.y + 30, position.y],
            }}
            transition={{
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <div className="w-full h-full rounded-full relative overflow-hidden backdrop-blur-[2px]">
                <div 
                    className="absolute inset-0" 
                    style={{ background: color }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.4)_45%,rgba(255,255,255,0.2)_50%,transparent_55%)] mix-blend-overlay" />
                <GlowEffect />
            </div>
        </motion.div>
    );
};

export function HeroSection() {
    return (
        <>
            <div className={"bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip"}>
                <StarField count={100} />
                {/* Planets */}
                <Planet
                    size={70}
                    color="radial-gradient(circle at 30% 30%, rgba(248,122,255,1) 0%, rgba(251,147,208,0.95) 60%, rgba(79,33,161,1) 100%)"
                    position={{ x: 150, y: 80 }}
                    alignmentDelay={0}
                />
                <Planet
                    size={50}
                    color="radial-gradient(circle at 30% 30%, rgba(255,221,153,1) 0%, rgba(195,240,178,0.95) 60%, rgba(47,216,254,1) 100%)"
                    position={{ x: 750, y: 120 }}
                    alignmentDelay={0.4}
                />
                <SaturnPlanet position={{ x: 450, y: 90 }} />
                <Planet
                    size={45}
                    color="radial-gradient(circle at 30% 30%, rgba(47,216,254,1) 0%, rgba(79,33,161,0.95) 60%, rgba(164,110,219,1) 100%)"
                    position={{ x: 900, y: 60 }}
                    alignmentDelay={0.8}
                />
                <Planet
                    size={35}
                    color="radial-gradient(circle at 30% 30%, rgba(164,110,219,1) 0%, rgba(248,122,255,0.95) 60%, rgba(251,147,208,1) 100%)"
                    position={{ x: 350, y: 40 }}
                    alignmentDelay={1.2}
                />
                {/* Base semicircle */}
                <div className={"absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#27547b] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-128px)]"}></div>
                <div className={"container relative"}>
                    <div className={"flex items-center justify-center"}>
                        <Link href={"#"} className={"inline-flex gap-3 border-white/40 border py-1 px-2 rounded-lg"}>
                            <span className={"bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent"}>
                                Version 2.0 is here
                            </span>
                            <span className={"inline-flex items-center gap-1"}>
                                Read More
                                <ArrowRight className={"text-white size-4"}/>
                            </span>
                        </Link>
                    </div>
                    <div className={"flex justify-center mt-8"}>
                        <div className={"inline-flex relative"}>
                            <h1 className={"text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex"}>
                                Get paid <br/> Not played
                            </h1>
                            <motion.div
                                className={"absolute right-[600px] top-[108px] max-sm:hidden"}
                                drag dragSnapToOrigin={true}
                            >
                                <Image
                                    src={CursorImage} alt={"Cursor Image"}
                                    width={200} height={200}
                                    className={"max-w-none"}
                                    draggable={false}
                                />
                            </motion.div>

                            <motion.div
                                className={"absolute top-[0px] left-[625px] max-sm:hidden"}
                                drag dragSnapToOrigin={true}
                            >
                                <Image
                                    src={MessageImage} alt={"Message Image"}
                                    width={200} height={200}
                                    className={"max-w-none"}
                                    draggable={false}
                                />
                            </motion.div>

                        </div>
                    </div>
                    <div className={"flex justify-center"}>
                        <p className={"text-center text-xl mt-8 max-w-md"}>
                            
Medical Billing, with true peace of mind.
                        </p>
                    </div>
                    <div className={"flex mt-8 justify-center"}>
                        <button className={"bg-white text-black font-medium py-3 px-5 rounded-lg"}>Get Started for Free</button>
                    </div>
                </div>
            </div>
        </>
    )
}
