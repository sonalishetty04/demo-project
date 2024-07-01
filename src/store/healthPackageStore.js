import { create } from "zustand";

const useHealthPackageStore = create((set) => ({
  location: "Bengaluru",
  healthPackages: [],
  viewPackage: null,
  setLocation: (location) => set({ location }),
  setHealthPackages: (healthPackages) => set({ healthPackages }),
  setViewPackage: (pkg) => set({ viewPackage: pkg }),
}));

export default useHealthPackageStore;
