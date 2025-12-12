import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  talentRegistrationSchema,
  TalentRegistrationData,
} from "@/lib/validations/talent";

export function useTalentRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<TalentRegistrationData>({
    resolver: zodResolver(talentRegistrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: 18,
      gender: "male" as const,
      height: 170,
      weight: 70,
      eyeColor: "",
      hairColor: "",
      languages: "",
      experience: "",
      agency: "",
      agencyContact: "",
      specialSkills: "",
      availability: "",
      location: "",
      bio: "",
      photos: [],
      video: undefined,
    },
  });

  const uploadFiles = async (
    files: File[],
    type: "photos" | "video"
  ): Promise<string[]> => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    formData.append("type", type);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "File upload failed");
    }

    const result = await response.json();
    return result.paths;
  };

  const onSubmit = async (data: TalentRegistrationData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Upload photos and video if they exist
      let photoPaths: string[] = [];
      let videoPath: string | undefined;

      if (data.photos && data.photos.length > 0) {
        photoPaths = await uploadFiles(data.photos, "photos");
      }

      if (data.video) {
        const videoPaths = await uploadFiles([data.video], "video");
        videoPath = videoPaths[0];
      }

      // Prepare data for API
      const submitData = {
        ...data,
        photos: photoPaths,
        video: videoPath,
      };

      console.log("Submitting data to API:", {
        firstName: submitData.firstName,
        lastName: submitData.lastName,
        email: submitData.email,
        photos: submitData.photos,
        video: submitData.video,
        // Log other fields as needed
      });

      const response = await fetch("/api/talents/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Registration API error:", result);
        throw new Error(result.message || "Registration failed");
      }

      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitError(
        error instanceof Error ? error.message : "Registration failed"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    submitError,
    submitSuccess,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
