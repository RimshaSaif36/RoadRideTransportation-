import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, RefreshCw } from "lucide-react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { apiFetch, ApiError, clearAdminToken } from "@/lib/api";
import type { AdminBooking, AdminContactMessage, BookingStatus } from "@/types/booking";
import { Seo } from "@/components/Seo";

const STATUS_OPTIONS: BookingStatus[] = ["pending", "confirmed", "completed", "cancelled"];

const STATUS_STYLES: Record<BookingStatus, string> = {
  pending: "border-yellow-500/40 text-yellow-400",
  confirmed: "border-blue-500/40 text-blue-400",
  completed: "border-emerald-500/40 text-emerald-400",
  cancelled: "border-red-500/40 text-red-400",
};

type Tab = "bookings" | "messages";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("bookings");
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [messages, setMessages] = useState<AdminContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [bookingsRes, messagesRes] = await Promise.all([
        apiFetch<{ bookings: AdminBooking[] }>("/api/bookings"),
        apiFetch<{ messages: AdminContactMessage[] }>("/api/contact"),
      ]);
      setBookings(bookingsRes.bookings);
      setMessages(messagesRes.messages);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        clearAdminToken();
        navigate("/admin/login");
        return;
      }
      setError(err instanceof ApiError ? err.message : "Failed to load data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStatus = async (id: string, status: BookingStatus) => {
    setUpdatingId(id);
    try {
      await apiFetch(`/api/bookings/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setBookings((prev) => prev.map((b) => (b._id === id ? { ...b, status } : b)));
    } catch {
      setError("Failed to update status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <AdminLayout>
      <Seo title="Admin Dashboard" description="RoadRide Transportation admin dashboard." path="/admin/dashboard" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setTab("bookings")}
            className={`rounded-sm border px-4 py-2 text-sm font-semibold transition-colors ${
              tab === "bookings"
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/15 text-muted hover:text-white"
            }`}
          >
            Bookings ({bookings.length})
          </button>
          <button
            type="button"
            onClick={() => setTab("messages")}
            className={`rounded-sm border px-4 py-2 text-sm font-semibold transition-colors ${
              tab === "messages"
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/15 text-muted hover:text-white"
            }`}
          >
            Messages ({messages.length})
          </button>
        </div>
        <button
          type="button"
          onClick={loadData}
          disabled={loading}
          className="text-muted flex items-center gap-2 text-sm hover:text-gold"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 size={28} className="animate-spin text-gold" />
        </div>
      ) : tab === "bookings" ? (
        <div className="mt-6 overflow-x-auto rounded-sm border border-white/10">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-charcoal text-muted text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Date / Time</th>
                <th className="px-4 py-3">Vehicle</th>
                <th className="px-4 py-3">Passengers</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-muted px-4 py-8 text-center">
                    No bookings yet.
                  </td>
                </tr>
              )}
              {bookings.map((booking) => (
                <>
                  <tr
                    key={booking._id}
                    onClick={() =>
                      setExpandedId((id) => (id === booking._id ? null : booking._id))
                    }
                    className="cursor-pointer border-t border-white/10 hover:bg-white/5"
                  >
                    <td className="px-4 py-3">
                      <div className="font-semibold text-white">{booking.name}</div>
                      <div className="text-muted text-xs">{booking.phone}</div>
                    </td>
                    <td className="px-4 py-3">
                      {booking.pickupLocation} → {booking.dropLocation}
                    </td>
                    <td className="px-4 py-3">
                      {booking.pickupDate} {booking.pickupTime}
                    </td>
                    <td className="px-4 py-3">{booking.vehicleType}</td>
                    <td className="px-4 py-3">{booking.passengers}</td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={booking.status}
                        disabled={updatingId === booking._id}
                        onChange={(e) =>
                          updateStatus(booking._id, e.target.value as BookingStatus)
                        }
                        className={`rounded-sm border bg-ink px-2 py-1 text-xs font-semibold capitalize outline-none ${STATUS_STYLES[booking.status]}`}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-ink text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="text-muted px-4 py-3 text-xs">
                      {new Date(booking.createdAt).toLocaleString()}
                    </td>
                  </tr>
                  {expandedId === booking._id && (
                    <tr key={`${booking._id}-details`} className="border-t border-white/10 bg-white/5">
                      <td colSpan={7} className="text-muted px-4 py-4 text-sm">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          <p>
                            <span className="text-white/60">Email:</span> {booking.email}
                          </p>
                          <p>
                            <span className="text-white/60">WhatsApp:</span> {booking.whatsapp}
                          </p>
                          <p className="sm:col-span-2">
                            <span className="text-white/60">Special Request:</span>{" "}
                            {booking.specialRequest || "—"}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-sm border border-white/10">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-charcoal text-muted text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-muted px-4 py-8 text-center">
                    No messages yet.
                  </td>
                </tr>
              )}
              {messages.map((message) => (
                <tr key={message._id} className="border-t border-white/10">
                  <td className="px-4 py-3">
                    <div className="font-semibold text-white">{message.name}</div>
                    <div className="text-muted text-xs">
                      {message.email} · {message.phone}
                    </div>
                  </td>
                  <td className="px-4 py-3">{message.subject}</td>
                  <td className="max-w-md px-4 py-3">{message.message}</td>
                  <td className="text-muted px-4 py-3 text-xs">
                    {new Date(message.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
