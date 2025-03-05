"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  date: string;
  time: string;
}

export default function EventRegistration() {
  const params = useParams();
  const t = useTranslations("Form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const { register, handleSubmit } = useForm<RegistrationFormData>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Debug params and URL
      console.log("Raw params:", params);
      console.log("Current URL:", window.location.pathname);
      console.log("Params:", {
        id: params.id,
        locale: params.locale,
      });

      // Ensure we have a valid event ID
      if (!params.id) {
        throw new Error("No event ID found");
      }

      // Get locale from URL path
      const locale = window.location.pathname.startsWith("/tr/") ? "tr" : "en";
      console.log("Detected locale:", locale);

      // Construct the correct API URL
      const apiUrl = new URL(
        `/api/events/register/${params.id}`,
        window.location.origin
      );
      console.log("API URL:", apiUrl.toString());

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email || "",
          phone: data.phone,
          date: data.date,
          time: data.time,
          locale: locale, // Use detected locale
        }),
      });

      const result = await response.json();
      console.log("Response:", result);

      if (!response.ok) {
        throw new Error(result.message || t("errors.registrationFailed"));
      }

      alert(t("button.submit"));
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        error instanceof Error ? error.message : t("errors.submitError")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            {t("labels.firstName")}
          </label>
          <input
            {...register("firstName")}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            {t("labels.lastName")}
          </label>
          <input
            {...register("lastName")}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            {t("labels.email")}
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            {t("labels.phone")}
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder={t("placeholders.phone")}
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            {t("labels.date")}
          </label>
          <input
            {...register("date")}
            type="date"
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            {t("labels.time")}
          </label>
          <input
            {...register("time")}
            type="time"
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isSubmitting ? t("button.submitting") : t("button.submit")}
        </button>

        {submitError && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {submitError}
          </div>
        )}
      </form>
    </div>
  );
}
