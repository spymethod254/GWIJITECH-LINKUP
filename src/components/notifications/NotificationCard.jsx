function NotificationCard({ notification }) {
      return (
          <div
                className={`rounded-2xl border p-4 transition ${
                        notification.read
                                  ? "bg-slate-900 border-slate-800"
                                            : "bg-slate-800 border-cyan-500"
                                                  }`}
                                                      >
                                                            <div className="flex justify-between items-center">
                                                                    <div>
                                                                              <p>
                                                                                          <span className="font-bold">{notification.user}</span>{" "}
                                                                                                      {notification.message}
                                                                                                                </p>

                                                                                                                          <p className="text-sm text-slate-400 mt-1">
                                                                                                                                      {notification.time}
                                                                                                                                                </p>
                                                                                                                                                        </div>

                                                                                                                                                                {!notification.read && (
                                                                                                                                                                          <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                                                                                                                                                                                  )}
                                                                                                                                                                                        </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                              );
                                                                                                                                                                                              }

                                                                                                                                                                                              export default NotificationCard;