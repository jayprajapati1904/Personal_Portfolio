"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useEmailStore } from "../store/emailStore.js";
import { useAuthStore } from "../store/authStore";
import {
  ArrowRight,
  KeyRound,
  LockOpen,
  Briefcase,
  Tag,
  Zap,
} from "lucide-react";

export default function Access() {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const { sendOTP, verifyOTP, isLoading, error } = useEmailStore();
  const { register } = useAuthStore();

  const handleRequestAccess = async (e) => {
    e.preventDefault();

    const success = await sendOTP(email);

    // console.log("OTP send success:", success);

    if (success) {
      setStep(2);

      // Start 2 minute timer (120 seconds)
      setTimer(120);
      setIsResendDisabled(true);
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    // Only allow numbers, and max 6 characters
    if (value === "" || (/^[0-9\b]+$/.test(value) && value.length <= 6)) {
      setOtp(value);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const success = await verifyOTP(email, otp);

    // console.log("OTP verify success:", success);

    if (success) {
      // Create user record & store token
      await register(email);

      // Redirect after user created
      window.location.href = "/";
    }
  };

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-[#fefbed] font-mono text-black selection:bg-[#ff6b6b] selection:text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background Noise & Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:32px_32px] pointer-events-none"></div>

      {/* TOP NAV */}
      <div className="w-full p-6 md:p-10 flex justify-between items-center relative z-10">
        <Link
          href="/"
          className="font-black uppercase tracking-widest text-lg hover:text-[#ff6b6b] transition-colors border-b-4 border-transparent hover:border-[#ff6b6b]"
        >
          ← Back
        </Link>
        <div className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_#ff6b6b]">
          Restricted Content
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-32 relative z-10 max-w-[1600px] mx-auto w-full">
        {/* STEP 1: EMAIL */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Unlock The <br />
              <span className="text-[#ff6b6b]">Full Portfolio.</span>
            </h1>

            <p className="text-xl md:text-2xl font-bold max-w-3xl leading-relaxed mb-12 opacity-80">
              To view my exact freelance rates, detailed client case studies,
              and start a project, I just need to verify you're a real human.
            </p>

            <form
              onSubmit={handleRequestAccess}
              className="w-full max-w-7xl relative"
            >
              <div className="flex flex-col md:flex-row items-end gap-6 md:gap-8">
                {/* Massive Input Field */}
                <div className="w-full flex-grow">
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-500">
                    Where should I send the access key?
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jayPrajapati@gmail.com"
                    className="w-full bg-transparent border-b-8 border-black text-3xl md:text-5xl lg:text-7xl font-black py-4 outline-none placeholder:text-gray-300 focus:border-[#ff6b6b] transition-colors"
                    /* STRICT VALIDATION */
                    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address (e.g., hello@company.com)"
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto bg-black text-white border-4 border-black px-12 py-6 text-2xl font-black uppercase flex justify-center items-center gap-4 shadow-[8px_8px_0px_0px_#facc15] hover:translate-y-[4px] hover:shadow-none transition-all group shrink-0"
                >
                  {isLoading ? "Sending..." : "Get Access"}
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>

            {/* What they get - Text Row */}
            <div className="mt-16 flex flex-wrap gap-8 md:gap-16 pt-8 border-t-4 border-black max-w-5xl">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-[#ff6b6b]" />
                <span className="font-bold uppercase tracking-widest text-sm md:text-base">
                  Real Client Work
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Tag className="w-6 h-6 text-[#4ecdc4]" />
                <span className="font-bold uppercase tracking-widest text-sm md:text-base">
                  Transparent Pricing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#facc15]" />
                <span className="font-bold uppercase tracking-widest text-sm md:text-base">
                  Direct Onboarding
                </span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: OTP */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-12 duration-700">
            <div className="inline-flex items-center gap-3 bg-white border-4 border-black px-6 py-3 mb-8 shadow-[4px_4px_0px_0px_#000]">
              <LockOpen className="w-6 h-6 text-green-500" />
              <span className="font-bold uppercase tracking-widest">
                Key sent to:{" "}
                <span className="text-[#ff6b6b] lowercase">{email}</span>
              </span>
              {/* <button
                type="button"
                onClick={() => setStep(1)}
                className="ml-4 text-xs font-black underline hover:text-[#ff6b6b]"
              >
                EDIT
              </button> */}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Enter The <br />
              <span className="text-[#4ecdc4]">Access Key.</span>
            </h1>

            <form className="w-full max-w-4xl relative" onSubmit={handleVerify}>
              <div className="flex flex-col md:flex-row items-end gap-6 md:gap-8">
                {/* Massive OTP Input */}
                <div className="w-full flex-grow">
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-500">
                    Enter the 6-digit code
                  </label>
                  <input
                    type="text"
                    required
                    maxLength="6"
                    placeholder="000000"
                    value={otp}
                    onChange={handleOtpChange}
                    className="w-full bg-transparent border-b-8 border-black text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] font-black py-2 outline-none placeholder:text-gray-300 focus:border-[#4ecdc4] transition-colors uppercase"
                    /* STRICT VALIDATION */
                    inputMode="numeric"
                    pattern="[0-9]*"
                    title="Please enter exactly 6 digits"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit" // Change to 'submit' when doing backend
                  disabled={isLoading}
                  className="w-full md:w-auto bg-[#4ecdc4] text-black border-4 border-black px-12 py-6 text-2xl font-black uppercase flex justify-center items-center gap-4 shadow-[8px_8px_0px_0px_#000] hover:translate-y-[4px] hover:shadow-none transition-all group shrink-0"
                >
                  {isLoading ? "Verifying..." : "Verify"}
                  <KeyRound className="w-8 h-8 group-hover:rotate-45 transition-transform" />
                </button>
              </div>

              {/* <button
                type="button"
                className="mt-8 font-bold uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-[#4ecdc4] hover:border-[#4ecdc4] transition-colors"
              >
                Didn't get it? Resend Code
              </button> */}

              <button
                type="button"
                disabled={isResendDisabled}
                onClick={async () => {
                  const success = await sendOTP(email);
                  if (success) {
                    setTimer(120);
                    setIsResendDisabled(true);
                  }
                }}
                className={`mt-8 font-bold uppercase tracking-widest text-sm border-b-2 pb-1 transition-colors
    ${
      isResendDisabled
        ? "text-gray-400 border-gray-400 cursor-not-allowed"
        : "border-black hover:text-[#4ecdc4] hover:border-[#4ecdc4]"
    }
  `}
              >
                {isResendDisabled
                  ? `Resend in ${formatTime(timer)}`
                  : "Didn't get it? Resend Code"}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* BOTTOM TICKER */}
      <div className="w-full border-t-4 border-black bg-[#ff6b6b] text-white py-4 overflow-hidden mt-12 relative z-10">
        <div className="whitespace-nowrap flex animate-scroll">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-xl md:text-3xl font-black uppercase tracking-widest mx-8"
            >
              • EXCLUSIVE ACCESS • SECURE PORTAL • TRANSPARENT PRICING
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
