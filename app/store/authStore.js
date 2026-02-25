import { create } from "zustand";
import { apiClient } from "../lib/api";

/* ===================================
   AUTH STORE
=================================== */

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  /* ===========================
     REGISTER USER
  =========================== */
  register: async (email) => {
    try {
      set({ isLoading: true, error: null });

      const response = await apiClient.post("/users/create", { email });

      const { data } = response.data;

      const expiryTime = Date.now() + 24 * 60 * 60 * 1000; // 1 day

      // Store token in localStorage
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("tokenExpiry", expiryTime);

      set({
        user: {
          id: data.id,
          email: data.email,
        },
        token: data.token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Registration failed",
        isLoading: false,
      });
    }
  },

  /* ===========================
     LOGOUT
  =========================== */
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiry");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  /* ===========================
     LOAD TOKEN ON REFRESH
  =========================== */
  initializeAuth: () => {
    const token = localStorage.getItem("accessToken");
    const expiry = localStorage.getItem("tokenExpiry");

    const remainingTime = Number(expiry) - Date.now();

    if (remainingTime > 0) {
      setTimeout(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenExpiry");
        set({ user: null, token: null, isAuthenticated: false });
      }, remainingTime);
    }

    if (!token || !expiry) return;

    if (Date.now() > Number(expiry)) {
      // Token expired
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenExpiry");

      set({
        user: null,
        token: null,
        isAuthenticated: false,
      });
    } else {
      set({
        token,
        isAuthenticated: true,
      });
    }
  },
}));
