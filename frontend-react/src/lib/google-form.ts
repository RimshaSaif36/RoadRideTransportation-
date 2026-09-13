import type { BookingFormValues } from "@/lib/validations/booking";

// TODO: Replace with your own Google Form's values.
// 1. Google Form -> "..." menu -> "Get pre-filled link".
// 2. Type a distinct dummy value into every field, then "Get Link".
// 3. Copy the FORM_ID from the generated URL (the long id between /d/e/ and /viewform),
//    and match each entry.XXXXXXX in that URL to the field you typed it into.
const GOOGLE_FORM_ID = "YOUR_FORM_ID_HERE";

const GOOGLE_FORM_ENTRY_IDS: Record<keyof BookingFormValues, string> = {
  name: "entry.XXXXXXXXX",
  email: "entry.XXXXXXXXX",
  phone: "entry.XXXXXXXXX",
  whatsapp: "entry.XXXXXXXXX",
  pickupLocation: "entry.XXXXXXXXX",
  dropLocation: "entry.XXXXXXXXX",
  pickupDate: "entry.XXXXXXXXX",
  pickupTime: "entry.XXXXXXXXX",
  passengers: "entry.XXXXXXXXX",
  vehicleType: "entry.XXXXXXXXX",
  specialRequest: "entry.XXXXXXXXX",
};

/**
 * Fires the booking data at a Google Form's response endpoint so it lands in the
 * linked Google Sheet. Uses mode: "no-cors" (Google Forms doesn't send CORS headers
 * on this endpoint), so the response is opaque — a resolved promise only means the
 * request went out, not that Google accepted it. Failures here are swallowed by the
 * caller since there's no reliable way to detect them from the browser.
 */
export async function submitBookingToGoogleForm(values: BookingFormValues) {
  const formData = new FormData();
  formData.append(GOOGLE_FORM_ENTRY_IDS.name, values.name);
  formData.append(GOOGLE_FORM_ENTRY_IDS.email, values.email);
  formData.append(GOOGLE_FORM_ENTRY_IDS.phone, values.phone);
  formData.append(GOOGLE_FORM_ENTRY_IDS.whatsapp, values.whatsapp);
  formData.append(GOOGLE_FORM_ENTRY_IDS.pickupLocation, values.pickupLocation);
  formData.append(GOOGLE_FORM_ENTRY_IDS.dropLocation, values.dropLocation);
  formData.append(GOOGLE_FORM_ENTRY_IDS.pickupDate, values.pickupDate);
  formData.append(GOOGLE_FORM_ENTRY_IDS.pickupTime, values.pickupTime);
  formData.append(GOOGLE_FORM_ENTRY_IDS.passengers, String(values.passengers));
  formData.append(GOOGLE_FORM_ENTRY_IDS.vehicleType, values.vehicleType);
  formData.append(GOOGLE_FORM_ENTRY_IDS.specialRequest, values.specialRequest ?? "");

  await fetch(`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}
