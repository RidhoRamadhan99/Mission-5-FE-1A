import { create } from "zustand";

const useStore = create((set) => ({
  // Data awal state
  notifications: [],
  // Fungsi untuk menambahkan notifikasi
  addNotification: (message) =>
    set((state) => ({
      notifications: [...state.notifications, { id: Date.now(), message }],
    })),
  // Fungsi untuk menghapus notifikasi
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notif) => notif.id !== id),
    })),
}));

export default useStore;
