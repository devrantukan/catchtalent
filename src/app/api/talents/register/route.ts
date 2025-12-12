import { NextRequest, NextResponse } from "next/server";
import { talentRegistrationApiSchema } from "@/lib/validations/talent";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Received registration data:", {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      photos: body.photos,
      video: body.video,
      // Log other fields as needed
    });

    // Validate the data with Zod
    const validatedData = talentRegistrationApiSchema.parse(body);

    // Save to database
    const talent = await prisma.talentRegistration.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        age: validatedData.age,
        gender: validatedData.gender,
        height: validatedData.height,
        weight: validatedData.weight,
        eyeColor: validatedData.eyeColor,
        hairColor: validatedData.hairColor,
        languages: validatedData.languages,
        experience: validatedData.experience,
        agency: validatedData.agency,
        agencyContact: validatedData.agencyContact,
        specialSkills: validatedData.specialSkills,
        availability: validatedData.availability,
        location: validatedData.location,
        bio: validatedData.bio,
        photos: JSON.stringify(validatedData.photos),
        video: validatedData.video,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully!",
        id: talent.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      // Parse Zod error details
      const zodError = error as {
        issues?: Array<{ path: (string | number)[]; message: string }>;
      };
      const fieldErrors =
        zodError.issues?.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })) || [];

      console.log("Zod validation errors:", fieldErrors);

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: fieldErrors,
          details: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
