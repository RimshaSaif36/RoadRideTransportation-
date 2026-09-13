import { Link } from "react-router-dom";
import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";
import { Seo } from "@/components/Seo";

export default function LoginPage() {
  return (
    <>
      <Seo title="Sign In" description="Sign in to your RoadRide Transportation account." path="/login" />
      <AuthCard
        title="Welcome Back"
        description="Sign in to manage your bookings and profile."
        footer={
          <>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-gold hover:underline">
              Create one
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </>
  );
}
