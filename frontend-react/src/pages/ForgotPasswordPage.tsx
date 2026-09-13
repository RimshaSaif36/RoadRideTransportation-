import { Link } from "react-router-dom";
import { AuthCard } from "@/components/auth/AuthCard";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { Seo } from "@/components/Seo";

export default function ForgotPasswordPage() {
  return (
    <>
      <Seo
        title="Forgot Password"
        description="Reset your RoadRide Transportation account password."
        path="/forgot-password"
      />
      <AuthCard
        title="Reset Your Password"
        description="Enter your email and we'll send you a link to reset your password."
        footer={
          <>
            Remembered it?{" "}
            <Link to="/login" className="text-gold hover:underline">
              Back to sign in
            </Link>
          </>
        }
      >
        <ForgotPasswordForm />
      </AuthCard>
    </>
  );
}
