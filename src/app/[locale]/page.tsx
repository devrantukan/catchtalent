"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import VideoModal from "@/components/VideoModal";

declare const Vimeo: {
  Player: new (element: HTMLIFrameElement) => {
    requestFullscreen: () => Promise<void>;
    getVideoId: () => Promise<string>;
  };
};

// Ensure Vimeo is used
// Ensure Vimeo is available globally
if (typeof Vimeo !== "undefined") {
  // Ensure Vimeo is available globally
  const _vimeo = Vimeo;
  // Use _vimeo to avoid the unused variable warning
  console.log("Vimeo is available:", _vimeo);
}
interface VimeoVideo {
  uri: string;
  name: string;
  description: string;
  link: string;
  player_embed_url: string;
  tags: string[];
}

export default function Home() {
  const [videos, setVideos] = useState<VimeoVideo[]>([]);
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/tr") ? "tr" : "en";

  const getRandomVideos = (videos: VimeoVideo[], count: number) => {
    if (videos.length === 0) return [];

    // Ensure we have at least 6 videos to work with
    const availableCount = Math.min(20, videos.length);
    const recentVideos = videos.slice(0, availableCount);

    // Create array of indices
    const indices = Array.from({ length: availableCount }, (_, i) => i);

    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Take exactly 6 videos or all available if less
    const selectedCount = Math.min(count, availableCount);
    return indices.slice(0, selectedCount).map((index) => recentVideos[index]);
  };

  const [randomVideos, setRandomVideos] = useState<VimeoVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.vimeo.com/users/catchtalent/videos?page=1&per_page=6`,
          {
            headers: {
              Authorization: `Bearer 4a46b11caf05c35a575523384b5d936e`,
            },
          }
        );
        const data = await response.json();
        setVideos(data.data || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const selected = getRandomVideos(videos, 6);
      setRandomVideos(selected);
    }
  }, [videos]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            CATCH TALENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-4 max-w-2xl"
          >
            {currentLang === "tr"
              ? "Casting ve Yetenek Ajansı"
              : "Casting & Talent Agency"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 font-light italic"
          >
            {currentLang === "tr"
              ? "Global yetenekler, yaratıcı projeler"
              : "Global talents, creative projects"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 flex-col sm:flex-row"
          >
            <Link
              href={currentLang === "tr" ? "/tr/yapimcilar" : "/producers"}
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-medium"
            >
              {currentLang === "tr" ? "Yapımcılar İçin" : "For Producers"}
            </Link>
            <Link
              href={currentLang === "tr" ? "/tr/yetenekler" : "/talents"}
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-medium"
            >
              {currentLang === "tr" ? "Yetenekler İçin" : "For Talents"}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Latest Work Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {currentLang === "tr" ? "Son Çalışmalar" : "Latest Work"}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomVideos.map((video, index) => (
              <motion.div
                key={video.uri}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-lg group"
              >
                <iframe
                  src={`${video.player_embed_url}?title=0&byline=0&portrait=0&background=1`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <h3 className="text-white text-lg font-medium text-center px-4">
                    {video.name}
                  </h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        // Extract video ID from the embed URL
                        const videoId = video.uri.split("/").pop();
                        if (videoId) {
                          setSelectedVideo(videoId);
                        }
                      }}
                      className="text-white text-sm font-medium hover:underline cursor-pointer"
                    >
                      {currentLang === "tr" ? "Tam Ekran" : "Full Screen"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href={currentLang === "tr" ? "/tr/portfolyo" : "/portfolio"}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              {currentLang === "tr"
                ? "Tüm Çalışmaları Görüntüle"
                : "Show All Works"}
            </Link>
          </div>
        </div>
      </div>

      <VideoModal
        videoId={selectedVideo || ""}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
