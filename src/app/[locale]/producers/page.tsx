"use client";

import { motion } from "framer-motion";

export default function Producers() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-8"
        >
          For Producers
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text mb-6">
            The Right Actor, A Strong Production
            <br /> <br />
            One of the most important elements in the success of a production is
            choosing the right actors to carry the story. The casting process is
            not just about creating a list, but about finding the talents that
            best fit the spirit of the project and working with the director to
            determine the actors who will deliver the best performance.
            <br /> <br /> We analyze the requirements of your story down to the
            finest details and work diligently to select the actors who will
            best reflect your characters. We focus not only on experienced names
            but also on discovering new talents.
            <br /> <br /> Throughout the process, we provide quick, efficient,
            and creative solutions, offering the best options from our national
            and international pool of actors, optimizing time and budget
            management.
            <br /> <br /> We approach each project uniquely, contributing not
            only in the selection of actors but also through on-set actor
            management and, when necessary, actor coaching. With our experience
            and industry connections, we make the casting process, one of the
            most crucial stages of your production, smooth and efficient for
            you. We are here to create strong projects with the right actors.
          </p>
          {/* Add more content as needed */}
        </motion.div>
      </div>
    </div>
  );
}
