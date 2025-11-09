import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShoppingCart, FileText, Book, MessageCircle, Briefcase, ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "CRM Application",
            description: "A full-stack business solution to manage customers, leads, and sales activities.",
            details: "Includes role-based access, dashboards, notifications, and CRUD operations with validations.",
            tech: ["React", "MUI", "Redux", ".NET 6", "SQL Server", "JWT"],
            icon: Users,
            color: "from-blue-500 to-cyan-500",
            category: "Full Stack",
            status: "Completed",
            demoLink: 'https://smart-billing-eta.vercel.app/',
            sourceCode: 'https://github.com/lourthuxavierm/BillingSoftware'
        },
        {
            title: "E-Commerce Platform",
            description: "End-to-end e-commerce system with product catalog, cart, order management, and admin panel.",
            details: "Supports buyer/seller roles, approvals, and real-time updates via WebSockets.",
            tech: ["React", "MUI", "Redux", ".NET 6", "SQL Server", "JWT", "WebSockets"],
            icon: ShoppingCart,
            color: "from-green-500 to-emerald-500",
            category: "Full Stack",
            status: "Completed",
            demoLink: 'https://ecommerce-ten-gilt-61.vercel.app/',
            sourceCode: 'https://github.com/lourthuxavierm/Ecommerce'
        },
        {
            title: "Invoice Generator",
            description: "Dynamic invoice creation tool with customer/product entry, auto-calculations, and PDF export.",
            details: "Built for smooth UX and responsive design with PDF export capabilities.",
            tech: ["React (Vite)", "Ant Design", "Tailwind CSS", "Redux", "jsPDF"],
            icon: FileText,
            color: "from-purple-500 to-violet-500",
            category: "Frontend",
            status: "Completed",
            demoLink: 'https://smart-billing-eta.vercel.app/',
            sourceCode: 'https://github.com/lourthuxavierm/BillingSoftware'
        },
        {
            title: "Book Selling Application",
            description: "Online book marketplace with cart, checkout, and seller approval workflow.",
            details: "Integrates authentication and role-based access for users with complete e-commerce functionality.",
            tech: ["React", "MUI", "Redux", ".NET 6", "SQL Server", "JWT"],
            icon: Book,
            color: "from-orange-500 to-amber-500",
            category: "Full Stack",
            status: "Completed"
        },
        {
            title: "Real-Time Chat Application",
            description: "Instant messaging feature built into the main platform for real-time user communication.",
            details: "Implements WebSockets for live message streaming and real-time user interactions.",
            tech: ["React", "MUI", ".NET 6", "SQL Server", "WebSockets"],
            icon: MessageCircle,
            color: "from-indigo-500 to-blue-500",
            category: "Full Stack",
            status: "Completed"
        },
        {
            title: "Personal Portfolio Website",
            description: "Modern, responsive portfolio showcasing skills, projects, and experience.",
            details: "Includes light/dark mode and backend data integration with full-stack architecture.",
            tech: ["React", "MUI", "Tailwind CSS", "Redux", ".NET 6", "SQL Server"],
            icon: Briefcase,
            color: "from-gray-600 to-gray-800",
            category: "Full Stack",
            status: "Live",
            demoLink: 'https://portfolio-classic-delta.vercel.app/',
            sourceCode: 'https://github.com/lourthuxavierm/portfolio-classic'
        }
    ];

    const categories = ["All", "Full Stack", "Frontend"];
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
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
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                        My Work
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent mb-6">
                        Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A collection of full-stack applications and solutions built with modern technologies
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Subtle Gradient Overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                            />

                            {/* Card Header */}
                            <div className="p-6 border-b border-gray-100 relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg`}
                                    >
                                        <project.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-2">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Live"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-blue-100 text-blue-700"
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 relative z-10">
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {project.details}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View demo of ${project.title}`}
                                        className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Demo
                                    </motion.a>

                                    <motion.a
                                        href={project.sourceCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View source code of ${project.title}`}
                                        className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Github className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;