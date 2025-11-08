import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Professional Summary
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-8 shadow-lg border border-gray-100"
                            variants={itemVariants}
                        >
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Full Stack Developer with strong experience in building scalable web applications using React,
                                TypeScript, .NET Core Web API, and SQL Server. Skilled in developing responsive UIs with modern
                                frameworks (MUI, Ant Design, Tailwind CSS) and implementing secure, efficient backends with
                                REST APIs, JWT authentication, and role-based access control.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Passionate about problem-solving, system design, and delivering high-quality enterprise-level solutions.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;