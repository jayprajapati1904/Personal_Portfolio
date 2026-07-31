import { create } from "zustand";

// Auth has been removed. This store is a no-op shell kept
// to avoid breaking any existing imports.
export const useAuthStore = create(() => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  register: async () => {},
  logout: () => {},
  initializeAuth: () => {},
}));
