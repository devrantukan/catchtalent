"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import VideoModal from "@/components/VideoModal";

interface VimeoVideo {
  uri: string;
  name: string;
  description: string;
  link: string;
  player_embed_url: string;
  tags: string[];
  pictures?: {
    sizes: Array<{
      width: number;
      height: number;
      link: string;
    }>;
  };
}

export default function Portfolio() {
  const [videos, setVideos] = useState<VimeoVideo[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<VimeoVideo[]>([]);

  const [selectedYear, setSelectedYear] = useState<string>("all");

  const [years, setYears] = useState<string[]>([]);

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let allVideos: VimeoVideo[] = [];
        let page = 1;
        let hasMorePages = true;

        while (hasMorePages) {
          const response = await fetch(
            `https://api.vimeo.com/users/catchtalent/videos?page=${page}&per_page=100&fields=uri,name,description,link,player_embed_url,tags,pictures`,
            {
              headers: {
                Authorization: `Bearer 4a46b11caf05c35a575523384b5d936e`,
              },
            }
          );
          const data = await response.json();

          if (data.data && data.data.length > 0) {
            allVideos = [...allVideos, ...data.data];
            if (data.paging && data.paging.next) {
              page++;
            } else {
              hasMorePages = false;
            }
          } else {
            hasMorePages = false;
          }
        }

        setVideos(allVideos);
        setFilteredVideos(allVideos);

        // Extract years from video titles
        const allYears = allVideos.reduce(
          (acc: string[], video: VimeoVideo) => {
            const yearMatch = video.name.match(/20\d{2}/);
            if (yearMatch && !acc.includes(yearMatch[0])) {
              acc.push(yearMatch[0]);
            }
            return acc;
          },
          []
        );
        setYears(["all", ...allYears.sort().reverse()]);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const filtered = videos.filter((video) => {
      const yearMatch = video.name.match(/20\d{2}/)?.[0];
      const matchesYear = selectedYear === "all" || yearMatch === selectedYear;

      return matchesYear;
    });
    setFilteredVideos(filtered);
  }, [selectedYear, videos]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center"
        >
          Portfolyo
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          {/* Year filter */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-gray-400 text-sm">Yıl:</span>
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedYear === "all"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
            >
              Tüm Yıllar
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedYear === year
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => {
            const videoId = video.uri.split("/").pop() || "";
            // Get the largest thumbnail or fallback
            const thumbnail =
              video.pictures?.sizes?.sort((a, b) => b.width - a.width)[0]
                ?.link || `https://i.vimeocdn.com/video/${videoId}_640.jpg`;

            return (
              <motion.div
                key={video.uri}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => {
                  if (videoId) setSelectedVideo(videoId);
                }}
              >
                <img
                  src={thumbnail}
                  alt={video.name}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {video.name}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoId) setSelectedVideo(videoId);
                      }}
                      className="text-sm text-gray-300 hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                    >
                      Videoyu İzle →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
