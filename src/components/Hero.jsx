import { HERO_CONTENT } from "../constants";
import {ArrowRight} from 'lucide-react';
import TiltedCard from '../components/reactbits/TiltedCard'
import { motion } from "motion/react"

const Hero = () => {
    const containerVariants = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { 
                duration: 0.8,
                delay: delay,
                ease: "easeOut"
            }
        }
    });

    const fadeInVariants = (delay) => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }
        }
    });

    const imageVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8,
            x : 100
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { 
                duration: 1,
                delay: 1,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.6,
                delay: 1.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35 relative overflow-hidden">
            
            <div className="flex flex-wrap justify-center lg:flex-nowrap relative z-10">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-4 lg:p-8">
                    <motion.h1

                        variants={containerVariants(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
                    >
                        Muhammed Asjad 
                    </motion.h1>

                    <motion.span 
                        variants={containerVariants(0.3)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-xl lg:text-2xl font-semibold tracking-tight"
                    >
                        Full Stack Developer
                    </motion.span>

                    <motion.p 
                        variants={containerVariants(0.6)}
                        initial="hidden"
                        animate="visible"
                        className="my-4 max-w-xl py-2 font-light tracking-tight text-center lg:text-left text-3xl lg:text-xl"
                    >
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.button 
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 group"
                    >
                        <a 
                            href="/Resume.pdf"
                            target="_blank"
                            rel="ronopener noreferrer"
                            download="Asjad-Resume.pdf"
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-600 bg-gradient-to-r from-neutral-800 to-neutral-700 px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:from-neutral-700 hover:to-neutral-600 hover:border-gray-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                        >
                            Get Resume 
                            <ArrowRight 
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            />
                        </a>
                    </motion.button>
                </div>

                <motion.div 
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full lg:w-1/3 flex justify-center items-center p-4 lg:p-8"
                >
                    <div className="relative">
                      
                        { <TiltedCard
                         
                            imageSrc="/MyProfilePic.jpg"
                            altText="Full Stack Developer"
                            captionText="Full Stack Developer"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        /> }
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;