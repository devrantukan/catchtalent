import { z } from "zod";

// Client-side schema (for form validation with File objects)
export const talentRegistrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  age: z
    .number()
    .min(16, "Must be at least 16 years old")
    .max(100, "Must be under 100 years old"),
  gender: z.enum(["erkek", "kadın", "diğer", "male", "female", "other"], {
    errorMap: () => ({ message: "Please select a valid gender" }),
  }),
  height: z
    .number()
    .min(100, "Height must be at least 100cm")
    .max(250, "Height must be at most 250cm"),
  weight: z
    .number()
    .min(30, "Weight must be at least 30kg")
    .max(200, "Weight must be at most 200kg"),
  eyeColor: z.string().min(1, "Eye color is required"),
  hairColor: z.string().min(1, "Hair color is required"),
  languages: z.string().min(1, "Languages are required"),
  experience: z.string().min(1, "Experience level is required"),
  agency: z.string().min(1, "Agency information is required"),
  agencyContact: z.string().min(1, "Agency contact is required"),
  specialSkills: z.string().min(1, "Special skills are required"),
  availability: z.string().min(1, "Availability is required"),
  location: z.string().min(1, "Location is required"),
  bio: z.string().min(1, "Bio is required"),
  photos: z.array(z.any()).min(1, "At least one photo is required"),
  video: z.any().refine((val) => val instanceof File, "Video is required"),
});

// Server-side schema (for API validation with file paths as strings)
export const talentRegistrationApiSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  age: z
    .number()
    .min(16, "Must be at least 16 years old")
    .max(100, "Must be under 100 years old"),
  gender: z.enum(["erkek", "kadın", "diğer", "male", "female", "other"], {
    errorMap: () => ({ message: "Please select a valid gender" }),
  }),
  height: z
    .number()
    .min(100, "Height must be at least 100cm")
    .max(250, "Height must be at most 250cm"),
  weight: z
    .number()
    .min(30, "Weight must be at least 30kg")
    .max(200, "Weight must be at most 200kg"),
  eyeColor: z.string().min(1, "Eye color is required"),
  hairColor: z.string().min(1, "Hair color is required"),
  languages: z.string().min(1, "Languages are required"),
  experience: z.string().min(1, "Experience level is required"),
  agency: z.string().min(1, "Agency information is required"),
  agencyContact: z.string().min(1, "Agency contact is required"),
  specialSkills: z.string().min(1, "Special skills are required"),
  availability: z.string().min(1, "Availability is required"),
  location: z.string().min(1, "Location is required"),
  bio: z.string().min(1, "Bio is required"),
  photos: z.array(z.string()).min(1, "At least one photo is required"),
  video: z.string().min(1, "Video is required"),
});

export type TalentRegistrationData = z.infer<typeof talentRegistrationSchema>;
export type TalentRegistrationApiData = z.infer<
  typeof talentRegistrationApiSchema
>;
