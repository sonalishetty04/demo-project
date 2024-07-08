import { create } from "zustand";
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

      set({ user: userCredential.user, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
  logOut: async () => {
    try {
      await signOut(auth);
      set({ user: null, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
  init: () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      set({ user: currentUser, error: null });
    });
    return () => unsubscribe();
  },
  clearError: () => set({ error: null }),
}));

export default useAuthStore;
