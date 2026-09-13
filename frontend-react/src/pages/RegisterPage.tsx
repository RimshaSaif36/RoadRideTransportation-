import { Link } from "react-router-dom";
import { AuthCard } from "@/components/auth/AuthCard";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Seo } from "@/components/Seo";

export default function RegisterPage() {
  return (
    <>
      <Seo
        title="Create Account"
        description="Create a RoadRide Transportation account to manage your bookings."
        path="/register"
      />
      <AuthCard
        title="Create Your Account"
        description="Sign up to track bookings, save details, and book faster next time."
        footer={
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-gold hover:underline">
              Sign in
            </Link>
          </>
        }
      >
        <RegisterForm />
      </AuthCard>
    </>
  );
}
