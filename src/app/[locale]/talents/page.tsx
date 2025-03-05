"use client";

import { motion } from "framer-motion";

export default function Talents() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          For Talents
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-xl mb-6">
            Join our roster of exceptional talents and take your career to the
            next level.
          </p>
          {/* Add more content as needed */}
        </motion.div>
      </div>
    </div>
  );
}
