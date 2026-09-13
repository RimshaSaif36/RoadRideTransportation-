import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel, inputClasses } from "@/components/ui/FormField";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { apiFetch } from "@/lib/api";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      await apiFetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
      });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-sm border border-white/10 bg-charcoal p-4 sm:gap-6 sm:p-6 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="c-name">Full Name</FieldLabel>
          <input id="c-name" className={inputClasses()} {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="c-email">Email</FieldLabel>
          <input id="c-email" type="email" className={inputClasses()} {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="c-phone">Phone Number</FieldLabel>
          <input id="c-phone" className={inputClasses()} {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="c-subject">Subject</FieldLabel>
          <input id="c-subject" className={inputClasses()} {...register("subject")} />
          <FieldError message={errors.subject?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="c-message">Message</FieldLabel>
        <textarea
          id="c-message"
          rows={5}
          className={inputClasses("resize-none")}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <Button type="submit" size="md" disabled={status === "submitting"} className="self-start sm:size-lg md:size-lg">
        {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 size={18} />
          Message sent! We&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <XCircle size={18} />
          Something went wrong. Please try again or contact us on WhatsApp.
        </p>
      )}
    </form>
  );
}
