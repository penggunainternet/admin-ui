import React from "react";
import Logo from "../components/Elements/Logo";
import LabeledInput from "../components/Elements/LabeledInput";
import Button from "../components/Elements/Button";
import { Link } from "react-router-dom";
const forgotPass = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-special-mainBg">
      <div className="w-full max-w-sm">
        <Logo />
        <h1 className="text-xl text-center font-bold mt-8 mb-3">
          Forgot Password?
        </h1>
        <p className="w-64 mx-auto text-center text-gray-01  font-regular">
          Enter your email address to get the password reset link.
        </p>
        <div className="mt-8 mb-4">
          <LabeledInput
            label="Email address"
            type="email"
            placeholder="hello@example.com"
            name="email"
          />
        </div>
        <Button variant="bg-primary w-full text-white " type="submit">
          Password Reset
        </Button>
      </div>
      <Link to="/login" className="text-gray-03 text-sm font-semibold mt-6">
        Back to Login
      </Link>
    </div>
  );
};

export default forgotPass;
