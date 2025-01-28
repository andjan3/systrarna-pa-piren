import { create } from "zustand";

interface IsOpenMenu {
  openDropdown: boolean;
  setOpenDropdown: (value: boolean) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  openDropdown: false,
  setOpenDropdown: (value) => set({ openDropdown: value }),
  open: false,
  setOpen: (value) => set({ open: value }),
}));

export default useStore;
