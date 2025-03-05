"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoAreWe() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Who Are We
        </motion.h1>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[60vh] mb-16 rounded-2xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056"
            alt="Catch Talent Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold mb-4">Catch Talent</h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                A leading talent agency connecting exceptional artists with
                groundbreaking projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* About Sections */}
        <div className="space-y-24">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"
                alt="About Catch Talent"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-300">
                Catch Talent was founded by casting director Özgün Ozan. Since
                2013, we have been collaborating with talents and production
                companies across Turkey, Europe, and the Middle East for various
                media projects, including commercials, fashion photoshoots,
                feature films, short films, documentaries, and music videos.
                With years of experience in the industry, we approach each
                project with a unique vision, offering artistic and professional
                solutions.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 md:order-2">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-300">
                With our international network and industry expertise, our
                mission is to bring together the right talents with the right
                projects, ensuring the perfect creative match. We specialize in
                co-productions, working with multilingual actors, directors, and
                crew members to bridge global talent with outstanding projects.
                🎬 Catch Talent is here to discover the best talents and add
                value to your projects!
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
