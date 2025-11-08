import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Palette } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12
            }
        }
    };

    const floatingIcons = [
        { Icon: Code, delay: 0, position: "top-20 left-10" },
        { Icon: Server, delay: 0.2, position: "top-40 right-20" },
        { Icon: Database, delay: 0.4, position: "bottom-40 left-20" },
        { Icon: Palette, delay: 0.6, position: "bottom-20 right-10" }
    ];

    const techStack = [
        { name: "React", color: "text-blue-500" },
        { name: "TypeScript", color: "text-blue-600" },
        { name: ".NET Core", color: "text-purple-600" },
        { name: "SQL Server", color: "text-red-500" }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50 pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

                {/* Floating Icons */}
                {floatingIcons.map(({ Icon, delay, position }) => (
                    <motion.div
                        key={position}
                        className={`absolute ${position} text-indigo-200/40`}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 4,
                            delay,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <Icon size={32} />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-4 py-2 mb-8 shadow-sm"
                        variants={itemVariants}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Lourthu
                        <motion.span
                            className="block text-indigo-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            Xavier M
                        </motion.span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-6"
                        variants={itemVariants}
                    >
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-600" />
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                            Full Stack Developer
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-600" />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Crafting digital experiences with modern technologies.
                        Specialized in building <span className="font-semibold text-indigo-600">scalable applications</span> and
                        intuitive user interfaces.
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        variants={itemVariants}
                    >
                        {techStack.map((tech, index) => (
                            <motion.span
                                key={tech.name}
                                className={`px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium ${tech.color} shadow-sm`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -2,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                {tech.name}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="#projects"
                            className="group relative bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View My Work
                                <motion.svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="group relative bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get In Touch
                                <motion.svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </motion.svg>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        className="text-sm text-gray-500 font-medium"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Scroll to explore
                    </motion.div>
                    <motion.div
                        className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            className="w-1 h-3 bg-indigo-500 rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
            <div className="absolute top-1/3 -right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75" />
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-150" />
        </section>
    );
};

export default Hero;