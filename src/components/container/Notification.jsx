import React, { useEffect } from 'react';
import useStore from '../../store';

const Notification = () => {
  const notifications = useStore((state) => state.notifications);
  const removeNotification = useStore((state) => state.removeNotification);

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        removeNotification(notifications[0].id);
      }, 3000); // Hapus notifikasi setelah 3 detik

      return () => clearTimeout(timer);
    }
  }, [notifications, removeNotification]);

  return (
    <div className="fixed bottom-4 right-4">
      {notifications.map((notif) => (
        <div key={notif.id} className="bg-green-500 text-white p-4 mb-2 rounded">
          {notif.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
