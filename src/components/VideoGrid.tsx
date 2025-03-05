"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface VimeoVideo {
  uri: string;
  name: string;
  description: string;
  link: string;
  duration: number;
  width: number;
  height: number;
  created_time: string;
  pictures: {
    base_link: string;
  };
}

export default function VideoGrid() {
  const [videos, setVideos] = useState<VimeoVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.uri}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48">
            <Image
              src={video.pictures.base_link}
              alt={video.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{video.name}</h2>
            <p className="text-gray-600 mb-4">
              {video.description?.slice(0, 150)}
              {video.description?.length > 150 ? "..." : ""}
            </p>
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Watch Video
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
