import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel, inputClasses } from "@/components/ui/FormField";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async () => {
    // Stubbed until the JWT auth API is wired up in Phase 2/3.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <input id="email" type="email" className={inputClasses()} {...register("email")} />
        <FieldError message={errors.email?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Link to="/forgot-password" className="text-xs text-gold hover:underline">
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          className={inputClasses()}
          {...register("password")}
        />
        <FieldError message={errors.password?.message} />
      </div>

      <Button type="submit" size="md" disabled={isSubmitting} className="mt-1 sm:mt-2 sm:size-lg md:size-lg">
        {isSubmitting && <Loader2 size={18} className="animate-spin" />}
        {isSubmitting ? "Signing in..." : "Sign In"}
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
