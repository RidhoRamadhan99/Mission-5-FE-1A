import create from 'zustand';

const useStore = create((set) => ({
  // Pastikan data awal di sini
  notifications: [],
  setData: (newData) => set({ data: newData }),
  addNotification: (message) =>
    set((state) => ({
      notifications: [...state.notifications, { id: Date.now(), message }],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notif) => notif.id !== id),
    })),
}));

export default useStore;
