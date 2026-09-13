import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel, inputClasses } from "@/components/ui/FormField";
import { apiFetch, setAdminToken, ApiError } from "@/lib/api";
import { Seo } from "@/components/Seo";

const adminLoginSchema = z.object({
  email: z.string().min(1, "Username or email is required"),
  password: z.string().min(1, "Password is required"),
});

type AdminLoginValues = z.infer<typeof adminLoginSchema>;

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginValues>({ resolver: zodResolver(adminLoginSchema) });

  const onSubmit = async (values: AdminLoginValues) => {
    setError(null);
    try {
      const res = await apiFetch<{ token: string }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      setAdminToken(res.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-ink py-24">
      <Seo title="Admin Login" description="RoadRide Transportation admin login." path="/admin/login" />
      <Container className="max-w-md">
        <div className="rounded-sm border border-white/10 bg-charcoal p-8 sm:p-10">
          <img src="/logo-nav.png" alt="RoadRide Transportation" className="mx-auto mb-8 h-9 w-auto" />
          <h1 className="font-display text-center text-2xl font-semibold text-white">
            Admin Login
          </h1>
          <p className="text-muted mt-2 text-center text-sm">
            Sign in to view bookings and messages.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <FieldLabel htmlFor="email">Username or Email</FieldLabel>
              <input id="email" type="text" className={inputClasses()} {...register("email")} />
              <FieldError message={errors.email?.message} />
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

            <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
              {isSubmitting && <Loader2 size={18} className="animate-spin" />}
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>

            {error && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <XCircle size={18} />
                {error}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
