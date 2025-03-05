import { NextResponse } from "next/server";

interface VimeoVideoResponse {
  uri: string;
  name: string;
  description: string;
  link: string;
  duration: number;
  width: number;
  height: number;
  created_time: string;
  pictures: {
    sizes: Array<{
      link: string;
    }>;
  };
}

export async function GET() {
  const VIMEO_ACCESS_TOKEN = "4a46b11caf05c35a575523384b5d936e";
  const VIMEO_USER_ID = "49258611"; // This is the user ID for the videos

  try {
    const response = await fetch(
      `https://api.vimeo.com/users/${VIMEO_USER_ID}/videos`,
      {
        headers: {
          Authorization: `bearer ${VIMEO_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.vimeo.*+json;version=3.4",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Vimeo API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Vimeo API Response:", data); // Debug log

    if (!data || !data.data) {
      return NextResponse.json(
        { error: "Invalid response from Vimeo API" },
        { status: 500 }
      );
    }

    const serializedVideos = data.data.map((video: VimeoVideoResponse) => ({
      uri: video.uri,
      name: video.name,
      description: video.description,
      link: video.link,
      duration: video.duration,
      width: video.width,
      height: video.height,
      created_time: video.created_time,
      pictures: {
        base_link: video.pictures?.sizes?.[3]?.link || "",
      },
    }));

    return NextResponse.json(serializedVideos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch videos",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
