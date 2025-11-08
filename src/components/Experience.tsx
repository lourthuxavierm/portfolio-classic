import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Database, Shield, Users, Rocket, ArrowRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "",
            period: "May 2025 – Present",
            role: "Full Stack Developer",
            techStack: ["React.js", ".NET Core", "SQL Server", "Tailwind CSS", "Entity Framework Core"],
            responsibilities: [
                "Developing and maintaining full-stack web applications with React.js (frontend) and .NET Core Web API (backend).",
                "Designing and optimizing SQL Server databases for high performance and scalability.",
                "Integrating REST APIs to ensure seamless communication between frontend and backend.",
                "Implementing JWT-based authentication, user roles, and data security features.",
                "Collaborating with cross-functional teams to deliver clean, efficient, and responsive solutions."
            ],
            icon: Rocket,
            color: "from-blue-500 to-cyan-500",
            accent: "bg-blue-500"
        },
        {
            company: "MRF Tyres",
            period: "July 2024 – Apr 2025",
            role: "Lead Trainee",
            techStack: ["Leadership", "Process Improvement", "Quality Assurance", "Team Collaboration"],
            responsibilities: [
                "Supervised production operations and supported process improvement initiatives.",
                "Ensured adherence to quality and safety standards across manufacturing units.",
                "Collaborated with cross-department teams to maintain production efficiency.",
                "Gained foundational experience in leadership, teamwork, and industrial operations."
            ],
            icon: Shield,
            color: "from-orange-500 to-amber-500",
            accent: "bg-orange-500"
        },
        {
            company: "LoyolaSoft Technoligies",
            period: "Feb 2024 – May 2024",
            role: ".NET Backend Developer Intern",
            techStack: ["ASP.NET Core", "SQL Server", "REST APIs", "Entity Framework", "Postman"],
            responsibilities: [
                "Built and managed RESTful APIs using ASP.NET Core Web API and SQL Server.",
                "Developed backend modules for real-world projects with clean architecture principles.",
                "Implemented CRUD operations, exception handling, and role-based access control.",
                "Collaborated with frontend teams and used Postman for API testing."
            ],
            icon: Code,
            color: "from-green-500 to-emerald-500",
            accent: "bg-green-500"
        },
        {
            company: "GETster.TECH Pvt Ltd",
            period: "Jun 2023 – Jan 2024",
            role: "Software Development Intern",
            techStack: ["Frontend Development", "Backend Development", "Debugging", "Testing", "Agile Methodology"],
            responsibilities: [
                "Worked on the development of WOW Apps with the software engineering team.",
                "Assisted in frontend and backend development tasks, including debugging and testing.",
                "Learned to work with modern programming languages, frameworks, and real-world workflows.",
                "Collaborated in an agile environment, improving coding and teamwork skills."
            ],
            icon: Users,
            color: "from-purple-500 to-violet-500",
            accent: "bg-purple-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        }
    };

    return (
        <section id="experience" className="py-20 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50/30 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-20"
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        Career Journey
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
                        Experience
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        My professional journey from manufacturing leadership to full-stack development
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 transform -translate-x-1/2 rounded-full" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-16 last:mb-0`}
                                variants={itemVariants}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 z-20">
                                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} shadow-inner`} />
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:pl-0 md:text-right' : 'md:pl-12'} ml-16 md:ml-0`}>
                                    <motion.div
                                        className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02
                                        }}
                                    >
                                        {/* Gradient Border Effect */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                            <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                                                    <exp.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                                                    <p className="text-lg text-gray-700 font-semibold">{exp.company}</p>
                                                </div>
                                            </div>

                                            <div className={`flex items-center gap-2 text-gray-500 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                <Calendar className="w-4 h-4" />
                                                <span className="font-medium">{exp.period}</span>
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                {exp.techStack.map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors"
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ type: "spring", stiffness: 400 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <ul className="space-y-3">
                                            {exp.responsibilities.map((resp, respIndex) => (
                                                <motion.li
                                                    key={respIndex}
                                                    className={`flex items-start gap-3 text-gray-700 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * respIndex + 0.3 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2.5 ${exp.accent}`} />
                                                    <span className="leading-relaxed">{resp}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Hover Arrow */}
                                        <motion.div
                                            className={`absolute top-6 ${index % 2 === 0 ? 'right-6' : 'left-6'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                            whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
                                        >
                                            <ArrowRight className={`w-5 h-5 text-gray-400 ${index % 2 === 0 ? 'rotate-180' : ''}`} />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Progression Indicator */}
                <motion.div
                    className="flex justify-center items-center gap-8 mt-16 text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-sm font-medium">Manufacturing</div>
                    <div className="flex items-center gap-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-blue-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                            />
                        ))}
                    </div>
                    <div className="text-sm font-medium">Software Development</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;