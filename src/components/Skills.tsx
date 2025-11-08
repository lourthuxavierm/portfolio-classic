import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Server,
    Database,
    Shield,
    Cpu,
    Zap,
    ToolCase
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            category: "Front-End Technologies",
            skills: ["React.js", "Angular", "TypeScript", "JavaScript", "MUI", "Ant Design", "Tailwind CSS"],
            icon: Code,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            category: "Back-End Technologies",
            skills: [".NET Core Web API", "Node.js", "NestJS"],
            icon: Server,
            gradient: "from-green-500 to-emerald-500"
        },
        {
            category: "Databases",
            skills: ["SQL Server", "MySQL"],
            icon: Database,
            gradient: "from-orange-500 to-amber-500"
        },
        {
            category: "Authentication & Security",
            skills: ["JWT", "Role-Based Access"],
            icon: Shield,
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            category: "Development Tools",
            skills: ["Git", "GitHub", "Postman", "Swagger"],
            icon: ToolCase,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            category: "Programming Languages",
            skills: ["TypeScript", "JavaScript", "C#", "Java", "Python"],
            icon: Cpu,
            gradient: "from-red-500 to-pink-500"
        }
    ];

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
        hidden: { y: 30, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute top-20 right-10 w-24 h-24 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Zap className="w-4 h-4" />
                        Technical Stack
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
                        Technologies
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Modern technologies and frameworks I work with to build scalable applications
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02
                            }}
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                            </div>

                            {/* Skills as Simple Tags */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            backgroundColor: "rgb(249, 250, 251)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * skillIndex + 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technology Highlights */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {[
                        { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
                        { name: "Angular", icon: "🅰️", color: "from-red-500 to-rose-600" },
                        { name: ".NET Core", icon: "🔷", color: "from-purple-500 to-indigo-600" },
                        { name: "SQL Server", icon: "🗄️", color: "from-red-500 to-orange-500" }
                    ].map((tech, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mx-auto mb-3 shadow-lg text-2xl`}>
                                {tech.icon}
                            </div>
                            <div className="text-lg font-bold text-gray-900">{tech.name}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;