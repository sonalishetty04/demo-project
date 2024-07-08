import { create } from "zustand";
import Cookies from "js-cookie";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const useAuthStore = create((set) => ({
  user: null,
  error: null,

  signUp: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = userCredential.user.accessToken;
      Cookies.set("authToken", token, { expires: 7 });

      set({ user: userCredential.user, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },

  logIn: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = userCredential.user.accessToken;
      Cookies.set("authToken", token, { expires: 7 });
      set({ user: userCredential.user, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
  logOut: async () => {
    try {
      await signOut(auth);
      Cookies.remove("authToken");
      set({ user: null, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
  init: () => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        Cookies.set("authToken", token, { expires: 7 });
      } else {
        Cookies.remove("authToken");
      }
      set({ user: currentUser, error: null });
    });
    return () => unsubscribe();
  },
  clearError: () => set({ error: null }),
}));

export default useAuthStore;
