import { create } from "zustand";
import { apiClient } from "../lib/api";

/* ===================================
   EMAIL OTP STORE
=================================== */

export const useEmailStore = create((set) => ({
  isLoading: false,
  error: null,
  otpSent: false,
  otpVerified: false,

  /* ===========================
     SEND OTP
  =========================== */
  sendOTP: async (email) => {
    try {
      set({ isLoading: true, error: null });

      const response = await apiClient.post("/email/send-otp", {
        email,
      });

      if (response.data.success) {
        set({
          otpSent: true,
          isLoading: false,
        });
      }
      return response.data?.success;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to send OTP",
        isLoading: false,
      });
    }
  },

  /* ===========================
     VERIFY OTP
  =========================== */
  verifyOTP: async (email, otp) => {
    try {
      set({ isLoading: true, error: null });

      const response = await apiClient.post("/email/verify-otp", {
        email,
        otp,
      });

      if (response.data.success) {
        set({
          otpVerified: true,
          isLoading: false,
        });
      }

      return response.data?.success;
    } catch (error) {
      set({
        error: error.response?.data?.message || "OTP verification failed",
        isLoading: false,
      });
    }
  },

  /* ===========================
     RESET STATE
  =========================== */
  reset: () => {
    set({
      otpSent: false,
      otpVerified: false,
      error: null,
    });
  },
}));
