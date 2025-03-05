import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const data = await request.json();

    if (!id || isNaN(parseInt(id))) {
      return Response.json(
        {
          success: false,
          message: "Invalid event ID",
        },
        { status: 400 }
      );
    }

    // Validate request body
    if (!data || typeof data !== "object") {
      return Response.json(
        {
          success: false,
          message: "Invalid request body",
        },
        { status: 400 }
      );
    }

    // First, verify the event exists
    const event = await prisma.event.findUnique({
      where: { id: parseInt(id) },
    });

    if (!event) {
      return Response.json(
        {
          success: false,
          message: `Event not found with ID: ${id}`,
        },
        { status: 404 }
      );
    }

    const registration = await prisma.registration.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email || "",
        phone: data.phone,
        date: new Date(data.date),
        time: data.time,
        locale: "en",
        eventId: parseInt(id),
      },
    });

    return Response.json(
      {
        success: true,
        data: registration,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Server error:", error);
    return Response.json(
      {
        success: false,
        message: "Registration failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
