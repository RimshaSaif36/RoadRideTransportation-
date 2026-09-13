"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel, inputClasses } from "@/components/ui/FormField";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/lib/validations/auth";

export function ForgotPasswordForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = async () => {
    // Stubbed until the JWT auth API is wired up in Phase 2/3.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm text-emerald-400">
        <CheckCircle2 size={18} />
        If an account exists for that email, a reset link will be sent once our
        auth system is live.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <input id="email" type="email" className={inputClasses()} {...register("email")} />
        <FieldError message={errors.email?.message} />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
        {isSubmitting && <Loader2 size={18} className="animate-spin" />}
        {isSubmitting ? "Sending..." : "Send Reset Link"}
      </Button>
    </form>
  );
}
