import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel, inputClasses } from "@/components/ui/FormField";
import { bookingSchema, type BookingFormValues } from "@/lib/validations/booking";
import { submitBookingToGoogleForm } from "@/lib/google-form";
import { apiFetch } from "@/lib/api";
import { fleet } from "@/data/fleet";
import { services } from "@/data/services";
import { pricingPackages } from "@/data/pricing";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      passengers: 1,
    },
  });

  useEffect(() => {
    const serviceSlug = searchParams.get("service");
    const vehicleSlug = searchParams.get("vehicle");
    const packageSlug = searchParams.get("package");

    const notes: string[] = [];
    const service = services.find((s) => s.slug === serviceSlug);
    if (service) notes.push(`Interested in: ${service.title}`);

    const pkg = pricingPackages.find((p) => p.slug === packageSlug);
    if (pkg) notes.push(`Selected package: ${pkg.name}`);

    const vehicle = fleet.find((v) => v.slug === vehicleSlug);
    if (vehicle) setValue("vehicleType", vehicle.name);

    if (notes.length) setValue("specialRequest", notes.join(". "));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onSubmit = async (values: BookingFormValues) => {
    setStatus("submitting");
    try {
      await apiFetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify(values),
      });

      // Fire-and-forget: lands the booking in the linked Google Sheet.
      // no-cors means we can't detect a real failure here, so it doesn't
      // affect the success/error state shown to the user.
      submitBookingToGoogleForm(values).catch(() => {});

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
          <FieldLabel htmlFor="whatsapp">WhatsApp Number</FieldLabel>
          <input id="whatsapp" className={inputClasses()} {...register("whatsapp")} />
          <FieldError message={errors.whatsapp?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="pickupLocation">Pickup Location</FieldLabel>
          <input
            id="pickupLocation"
            className={inputClasses()}
            {...register("pickupLocation")}
          />
          <FieldError message={errors.pickupLocation?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="dropLocation">Drop Location</FieldLabel>
          <input
            id="dropLocation"
            className={inputClasses()}
            {...register("dropLocation")}
          />
          <FieldError message={errors.dropLocation?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="pickupDate">Pickup Date</FieldLabel>
          <input
            id="pickupDate"
            type="date"
            className={inputClasses("scheme-dark")}
            {...register("pickupDate")}
          />
          <FieldError message={errors.pickupDate?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="pickupTime">Pickup Time</FieldLabel>
          <input
            id="pickupTime"
            type="time"
            className={inputClasses("scheme-dark")}
            {...register("pickupTime")}
          />
          <FieldError message={errors.pickupTime?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="passengers">Passengers</FieldLabel>
          <input
            id="passengers"
            type="number"
            min={1}
            max={60}
            className={inputClasses()}
            {...register("passengers", { valueAsNumber: true })}
          />
          <FieldError message={errors.passengers?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel htmlFor="vehicleType">Vehicle Type</FieldLabel>
          <select
            id="vehicleType"
            className={inputClasses()}
            defaultValue=""
            {...register("vehicleType")}
          >
            <option value="" disabled>
              Select a vehicle
            </option>
            {fleet.map((vehicle) => (
              <option key={vehicle.slug} value={vehicle.name}>
                {vehicle.name} ({vehicle.category})
              </option>
            ))}
          </select>
          <FieldError message={errors.vehicleType?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="specialRequest">Special Request (optional)</FieldLabel>
        <textarea
          id="specialRequest"
          rows={4}
          className={inputClasses("resize-none")}
          {...register("specialRequest")}
        />
        <FieldError message={errors.specialRequest?.message} />
      </div>

      <Button
        type="submit"
        size="md"
        disabled={status === "submitting"}
        className="w-full self-start sm:w-auto sm:size-lg md:size-lg"
      >
        {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
        {status === "submitting" ? "Submitting..." : "Submit Booking"}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 size={18} />
          Booking request received! We&apos;ll confirm on WhatsApp shortly.
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
