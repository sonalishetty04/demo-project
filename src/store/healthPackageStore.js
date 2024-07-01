import { create } from "zustand";

const useHealthPackageStore = create((set) => ({
  location: "Bengaluru",
  healthPackages: [],
  setLocation: (location) => set({ location }),
  setHealthPackages: (healthPackages) => set({ healthPackages }),
}));

export default useHealthPackageStore;
