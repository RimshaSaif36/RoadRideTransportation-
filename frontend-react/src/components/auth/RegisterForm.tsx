"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel, inputClasses } from "@/components/ui/FormField";
import { registerSchema, type RegisterFormValues } from "@/lib/validations/auth";

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async () => {
    // Stubbed until the JWT auth API is wired up in Phase 2/3.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="name">Full Name</FieldLabel>
        <input id="name" className={inputClasses()} {...register("name")} />
        <FieldError message={errors.name?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <input id="email" type="email" className={inputClasses()} {...register("email")} />
        <FieldError message={errors.email?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
        <input id="phone" className={inputClasses()} {...register("phone")} />
        <FieldError message={errors.phone?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <input
          id="password"
          type="password"
          className={inputClasses()}
          {...register("password")}
        />
        <FieldError message={errors.password?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
        <input
          id="confirmPassword"
          type="password"
          className={inputClasses()}
          {...register("confirmPassword")}
        />
        <FieldError message={errors.confirmPassword?.message} />
      </div>

      <Button type="submit" size="md" disabled={isSubmitting} className="mt-1 sm:mt-2 sm:size-lg md:size-lg">
        {isSubmitting && <Loader2 size={18} className="animate-spin" />}
        {isSubmitting ? "Creating account..." : "Create Account"}
      </Button>

      {submitted && (
        <p className="text-muted flex items-start gap-2 text-xs">
          <Info size={14} className="mt-0.5 shrink-0 text-gold" />
          Customer accounts launch alongside our secure booking platform — check
          back soon, or book as a guest for now.
        </p>
      )}
    </form>
  );
}
