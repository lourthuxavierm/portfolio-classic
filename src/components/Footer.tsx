import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart,
    Coffee,
    ArrowUp,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    ExternalLink,
    Code,
    Sparkles
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/lourthu-xavier-m',
            icon: Linkedin,
            color: 'hover:text-blue-400'
        },
        {
            name: 'GitHub',
            href: 'https://github.com/lourthuxavierm',
            icon: Github,
            color: 'hover:text-gray-300'
        },
        {
            name: 'Email',
            href: 'mailto:lourthuxavierm@gmail.com',
            icon: Mail,
            color: 'hover:text-red-400'
        }
    ];

    const contactInfo = [
        {
            icon: Phone,
            text: '+91 88703 98675',
            href: 'tel:+918870398675'
        },
        {
            icon: Mail,
            text: 'lourthuxavierm@gmail.com',
            href: 'mailto:lourthuxavierm@gmail.com'
        },
        {
            icon: MapPin,
            text: 'Tiruvannamalai, TN',
            href: '#'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 opacity-10">
                <Code className="w-8 h-8" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-10">
                <Sparkles className="w-6 h-6" />
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* Brand Section */}
                        <motion.div
                            className="lg:col-span-1"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Code className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        Lourthu Xavier M
                                    </h3>
                                    <p className="text-gray-400 text-sm">Full Stack Developer</p>
                                </div>
                            </motion.div>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                Crafting digital experiences with modern technologies.
                                Passionate about building scalable solutions and intuitive user interfaces.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 bg-gray-700 rounded-lg text-gray-300 transition-all duration-300 ${social.color} hover:bg-gray-600 hover:scale-110`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        viewport={{ once: true }}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            variants={itemVariants}
                        >
                            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <motion.li key={link.name}>
                                        <motion.a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                            whileHover={{ x: 5 }}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            viewport={{ once: true }}
                                        >
                                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            variants={itemVariants}
                        >
                            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
                            <div className="space-y-3">
                                {contactInfo.map((contact, index) => (
                                    <motion.a
                                        key={contact.text}
                                        href={contact.href}
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                                        whileHover={{ x: 5 }}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        viewport={{ once: true }}
                                    >
                                        <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm">{contact.text}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            variants={itemVariants}
                        >
                            <h4 className="text-lg font-semibold mb-4 text-white">Ready to Work Together?</h4>
                            <p className="text-gray-400 text-sm mb-4">
                                Let's discuss your next project and bring your ideas to life with cutting-edge technology.
                            </p>
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail className="w-4 h-4" />
                                Start a Project
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {/* Copyright */}
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>&copy; {currentYear} Lourthu Xavier M. All rights reserved.</span>
                            <motion.span
                                className="flex items-center gap-1"
                                whileHover={{ scale: 1.1 }}
                            >
                                Made with
                                <Heart className="w-4 h-4 text-red-500 fill-current" />
                                and
                                <Coffee className="w-4 h-4 text-amber-500" />
                            </motion.span>
                        </div>

                        {/* Back to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 group"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-sm">Back to Top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* Availability Badge */}
                    <motion.div
                        className="fixed bottom-6 right-6 z-50"
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="text-sm font-medium">Available for opportunities</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;