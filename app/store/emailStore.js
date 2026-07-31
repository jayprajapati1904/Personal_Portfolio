import { create } from "zustand";

// Email OTP store removed. No-op shell kept to avoid breaking imports.
export const useEmailStore = create(() => ({
  isLoading: false,
  error: null,
  otpSent: false,
  otpVerified: false,
  sendOTP: async () => false,
  verifyOTP: async () => false,
  reset: () => {},
}));
