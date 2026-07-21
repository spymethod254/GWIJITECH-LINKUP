import MainLayout from "../layouts/MainLayout";
import NotificationCard from "../components/notifications/NotificationCard";
import { notifications } from "../data/notifications";

function Notifications() {
  return (
      <MainLayout>
            <div className="space-y-6">
                    <h1 className="text-3xl font-bold">
                              Notifications 🔔
                                      </h1>

                                              {notifications.map((notification) => (
                                                        <NotificationCard
                                                                    key={notification.id}
                                                                                notification={notification}
                                                                                          />
                                                                                                  ))}
                                                                                                        </div>
                                                                                                            </MainLayout>
                                                                                                              );
                                                                                                              }

                                                                                                              export default Notifications;