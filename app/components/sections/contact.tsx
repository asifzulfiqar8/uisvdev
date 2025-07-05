"use client";

import { easeInOut, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "asifzulfiqar43@gmail.com",
    href: "mailto:asifzulfiqar43@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 (309) 448-5854",
    href: "tel:+923094485854",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/asifzulfiqar8",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/asifzulfiqar8",
  },
];

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bgColor">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <span className="relative inline-flex">
              <Send className="w-8 h-8 text-primary" />
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-4xl font-bold text-textColor mb-6 font-sans">
            Let's Create Something
            <span className="text-primary"> Amazing</span> Together
          </h2>
          <p className="text-lg text-textColor/70 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision
            to life with cutting-edge web technologies and exceptional user
            experiences.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            const isCopied = copiedItem === contact.label;

            return (
              <motion.div
                key={contact.label}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-white dark:bg-textColor/5 rounded-2xl p-6 border border-textColor/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  {contact.copyable && (
                    <button
                      onClick={() =>
                        copyToClipboard(contact.value, contact.label)
                      }
                      className="opacity-0 group-hover:opacity-100 p-2 hover:bg-textColor/5 rounded-lg transition-all duration-200"
                      title="Copy to clipboard"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-textColor/60" />
                      )}
                    </button>
                  )}
                </div>

                <h3 className="text-sm font-medium text-textColor/60 mb-2 uppercase tracking-wide">
                  {contact.label}
                </h3>

                <a
                  href={contact.href}
                  className="text-lg font-medium text-textColor hover:text-primary transition-colors duration-200 block"
                >
                  {contact.value}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-sm font-medium text-textColor/60 mb-6 uppercase tracking-wide text-center"
          >
            Connect with me
          </motion.h3>

          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-white dark:bg-textColor/5 rounded-xl border border-textColor/10 hover:border-primary/20 flex items-center justify-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-textColor/60 group-hover:text-primary transition-colors duration-200" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-textColor/5 rounded-2xl p-8 border border-textColor/10">
            <h3 className="text-2xl font-semibold text-textColor mb-4">
              Ready to start your project?
            </h3>
            <p className="text-textColor/70 mb-6 max-w-md mx-auto">
              I'm currently available for new projects and would love to hear
              about your ideas.
            </p>
            <motion.a
              href="mailto:hello@yourname.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              {/* <Mail className="w-5 h-5" /> */}
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center mt-8 space-x-2"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-textColor/60">
            Available for new projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}
