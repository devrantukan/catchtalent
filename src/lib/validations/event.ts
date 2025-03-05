import { z } from "zod";
import { formTranslations } from "@/translations/form";

export const createRegistrationSchema = (lang: "en" | "tr") => {
  const t = formTranslations[lang];

  return z.object({
    firstName: z.string().min(2, t.errors.firstName),
    lastName: z.string().min(2, t.errors.lastName),
    email: z.string().email(t.errors.email).optional(),
    phone: z.string().min(10, t.errors.phone),
    date: z.string().refine(
      (date) => {
        const selectedDate = new Date(date);
        const minDate = new Date("2025-03-21");
        const maxDate = new Date("2025-03-24");
        return selectedDate >= minDate && selectedDate <= maxDate;
      },
      { message: t.errors.date }
    ),
    time: z.string().min(1, t.errors.time),
  });
};

export type RegistrationInput = z.infer<
  ReturnType<typeof createRegistrationSchema>
>;
