import { NextRequest, NextResponse } from "next/server";
import { uploadMultipleFiles } from "@/lib/utils/fileUpload";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const type = formData.get("type") as string; // 'photos' or 'video'

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "No files provided" },
        { status: 400 }
      );
    }

    // Validate file types
    const allowedImageTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/bmp",
      "image/tiff",
      "image/svg+xml",
    ];
    const allowedVideoTypes = [
      "video/mp4",
      "video/webm",
      "video/quicktime",
      "video/avi",
      "video/mov",
      "video/wmv",
      "video/flv",
      "video/3gp",
    ];

    for (const file of files) {
      console.log(
        `Uploading file: ${file.name}, type: ${file.type}, size: ${file.size}`
      );

      if (type === "photos" && !allowedImageTypes.includes(file.type)) {
        console.log(
          `Invalid image type: ${file.type}. Allowed: ${allowedImageTypes.join(
            ", "
          )}`
        );
        return NextResponse.json(
          {
            success: false,
            message: `Invalid image file type: ${
              file.type
            }. Allowed types: ${allowedImageTypes.join(", ")}`,
          },
          { status: 400 }
        );
      }

      if (type === "video" && !allowedVideoTypes.includes(file.type)) {
        console.log(
          `Invalid video type: ${file.type}. Allowed: ${allowedVideoTypes.join(
            ", "
          )}`
        );
        return NextResponse.json(
          {
            success: false,
            message: `Invalid video file type: ${
              file.type
            }. Allowed types: ${allowedVideoTypes.join(", ")}`,
          },
          { status: 400 }
        );
      }
    }

    // Upload files
    const folder = type === "photos" ? "photos" : "videos";
    const uploadedPaths = await uploadMultipleFiles(files, folder);

    return NextResponse.json({
      success: true,
      paths: uploadedPaths,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 }
    );
  }
}
