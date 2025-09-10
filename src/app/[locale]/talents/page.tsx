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
            Acting is not just a talent; it is a journey that flourishes with
            the right opportunities. At Catch Talent, we are here to discover
            new talents and connect experienced actors with exciting projects.
            <br /> <br />
            We do not provide management services or represent actors. We only
            consider you for the projects in which we serve as casting
            directors. If you are currently under contract with an agency,
            please indicate this in the registration form. When a suitable
            project arises for you, we will reach out to your agency to ensure a
            smooth process.
            <br /> <br />
            It all starts with a few photos and a short introduction video that
            helps us get to know you better. 😊 Are you ready to showcase your
            talent and make your mark?
            <br /> <br />
            We can&apos;t wait to have you on board!
          </p>
          {/* Add more content as needed */}
        </motion.div>
      </div>
    </div>
  );
}
