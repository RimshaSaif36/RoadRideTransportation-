import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { clearAdminToken } from "@/lib/api";

export function AdminLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminToken();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-ink text-white">
      <header className="flex items-center justify-between border-b border-white/10 bg-charcoal px-6 py-4">
        <Link to="/admin/dashboard" className="flex items-center gap-2">
          <img src="/logo-nav.png" alt="RoadRide Transportation" className="h-8 w-auto" />
          <span className="text-muted text-xs uppercase tracking-widest">Admin</span>
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
        >
          <LogOut size={16} />
          Log Out
        </button>
      </header>
      <main className="px-6 py-8">{children}</main>
    </div>
  );
}
