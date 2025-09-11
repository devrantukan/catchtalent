"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoAreWe() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}

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
                src="/hikayemiz.jpeg"
                alt="About Catch Talent"
                fill
                className="object-cover p-0 md:p-16"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-300">
                Catch Talent was founded by casting director Özgün Ozan.
                <br /> <br />
                Since 2013, we have been collaborating with talents and
                production companies across Turkey, Europe, and the Middle East
                for various media projects, including commercials, fashion
                photoshoots, feature films, short films, documentaries, and
                music videos. We approach each project with a unique vision,
                offering artistic and professional solutions.
                <br /> <br />
                With our international network and industry expertise, we bring
                together not only multilingual actors but also directors and
                crew members, particularly for co-productions.
                <br /> <br />
                🎬 Catch Talent is here to discover the best talents and add
                value to your projects!
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
            <div className="space-y-6 md:order-1">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-300">
                With our international network and industry expertise, our
                mission is to bring together the right talents with the right
                projects, ensuring the perfect creative match. We specialize in
                co-productions, working with multilingual actors, directors, and
                crew members to bridge global talent with outstanding projects.
                <br /> <br />
                🎬 Catch Talent is here to discover the best talents and add
                value to your projects!
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden md:order-2">
              <Image
                src="/vizyonumuz.jpeg"
                alt="Our Vision"
                fill
                className="object-cover p-0 md:p-16"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
