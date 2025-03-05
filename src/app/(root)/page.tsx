"use client";

import { useState, useEffect } from "react";
import { getVideoDescription } from "../../data/videoDescriptions";

interface VimeoVideo {
  uri: string;
  name: string;
  description: string;
  link: string;
  player_embed_url: string;
  tags: string[];
}

export default function PortfolioPage() {
  const [videos, setVideos] = useState<VimeoVideo[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<VimeoVideo[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [tags, setTags] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.vimeo.com/users/catchtalent/videos`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        const videosWithTags = data.data || [];
        setVideos(videosWithTags);
        setFilteredVideos(videosWithTags);

        // Extract unique tags
        const allTags = videosWithTags.reduce(
          (acc: string[], video: VimeoVideo) => {
            video.tags?.forEach((tag) => {
              if (!acc.includes(tag)) {
                acc.push(tag);
              }
            });
            return acc;
          },
          []
        );
        setTags(["all", ...allTags]);

        // Extract years from video titles
        const allYears = videosWithTags.reduce(
          (acc: string[], video: VimeoVideo) => {
            const yearMatch = video.name.match(/20\d{2}/); // Matches years like 2021, 2022, etc.
            if (yearMatch && !acc.includes(yearMatch[0])) {
              acc.push(yearMatch[0]);
            }
            return acc;
          },
          []
        );
        setYears(["all", ...allYears.sort().reverse()]); // Sort years in descending order
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const filtered = videos.filter((video) => {
      const matchesTag =
        selectedTag === "all" || video.tags?.includes(selectedTag);
      const yearMatch = video.name.match(/20\d{2}/)?.[0];
      const matchesYear = selectedYear === "all" || yearMatch === selectedYear;
      const matchesSearch =
        video.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTag && matchesYear && matchesSearch;
    });
    setFilteredVideos(filtered);
  }, [selectedTag, selectedYear, searchTerm, videos]);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
        Video Portfolio
      </h1>

      {/* Filter Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* Year Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedYear === year
                  ? "bg-secondary-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {year === "all" ? "All Years" : year}
            </button>
          ))}
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedTag === tag
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.uri}
            className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-xl overflow-hidden
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`${video.player_embed_url}?title=0&byline=0&portrait=0`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-primary-800">
                {video.name}
              </h2>
              <p className="text-neutral-600 mb-4">
                {(video.description || getVideoDescription(video.uri))?.slice(
                  0,
                  150
                )}
                {(video.description || getVideoDescription(video.uri))?.length >
                150
                  ? "..."
                  : ""}
              </p>
              {video.tags && (
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No videos found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
