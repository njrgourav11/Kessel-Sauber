// components/ui/section-with-mockup.tsx
'use client';

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    primaryImageSrc: string;
    secondaryImageSrc: string;
    reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
    title,
    description,
    primaryImageSrc,
    secondaryImageSrc,
    reverseLayout = false,
}) => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
    };

    const layoutClasses = reverseLayout
        ? "md:grid-cols-2 md:grid-flow-col-dense"
        : "md:grid-cols-2";

    const textOrderClass = reverseLayout ? "md:col-start-2" : "";
    const imageOrderClass = reverseLayout ? "md:col-start-1" : "";


    return (
        <section className="relative py-12 md:py-20 bg-background overflow-hidden">
            <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
                <motion.div
                    className={`grid grid-cols-1 gap-8 md:gap-12 w-full items-center ${layoutClasses}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`flex flex-col items-start gap-6 mt-8 md:mt-0 max-w-[600px] mx-auto md:mx-0 ${textOrderClass}`}
                        variants={itemVariants}
                    >
                        <div className="space-y-4">
                            <h2 className="text-foreground text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                                {title}
                            </h2>
                        </div>

                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                            {description}
                        </p>
                        {/* Optional: Add a button or link here */}
                        <div className="pt-2">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-accent hover:bg-orange-600 rounded-md transition-all duration-200 shadow-lg hover:shadow-orange-500/25">
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>

                    {/* App mockup/Image Content */}
                    <motion.div
                        className={`relative mt-8 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[350px] md:max-w-[500px]`}
                        variants={itemVariants}
                    >
                        {/* Decorative Background Element */}
                        <motion.div
                            className={`absolute w-full h-full bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-full blur-3xl z-0`}
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />

                        {/* Main Mockup Card */}
                        <motion.div
                            className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-card/50 rounded-2xl border border-border shadow-2xl overflow-hidden z-10"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full h-full relative group">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${primaryImageSrc})`,
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        </motion.div>

                        {/* Secondary Floating Image (Optional/Decorative) */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-card rounded-xl border border-border shadow-xl overflow-hidden z-20 hidden md:block"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${secondaryImageSrc})`,
                                }}
                            />
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative bottom gradient */}
            <div
                className="absolute w-full h-24 bottom-0 left-0 z-0 bg-gradient-to-t from-background to-transparent"
            />
        </section>
    );
};


export default SectionWithMockup;
