import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { NextRequest } from "next/server";

export async function uploadFile(file: File, folder: string): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Create uploads directory if it doesn't exist
  const uploadsDir = join(process.cwd(), "public", "uploads", folder);
  await mkdir(uploadsDir, { recursive: true });

  // Generate unique filename
  const timestamp = Date.now();
  const filename = `${timestamp}-${file.name}`;
  const filepath = join(uploadsDir, filename);

  await writeFile(filepath, buffer);

  return `/uploads/${folder}/${filename}`;
}

export async function uploadMultipleFiles(
  files: File[],
  folder: string
): Promise<string[]> {
  const uploadPromises = files.map((file) => uploadFile(file, folder));
  return Promise.all(uploadPromises);
}
