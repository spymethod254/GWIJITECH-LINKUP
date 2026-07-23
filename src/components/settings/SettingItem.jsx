import { HiChevronRight } from "react-icons/hi2";

function SettingItem({ icon, title, description }) {
  return (
      <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition">

            <div className="flex items-center gap-4">

                    <div className="text-2xl text-cyan-400">
                              {icon}
                                      </div>

                                              <div className="text-left">
                                                        <h2 className="font-semibold">
                                                                    {title}
                                                                              </h2>

                                                                                        <p className="text-sm text-slate-400">
                                                                                                    {description}
                                                                                                              </p>
                                                                                                                      </div>

                                                                                                                            </div>

                                                                                                                                  <HiChevronRight
                                                                                                                                          className="text-slate-500"
                                                                                                                                                  size={22}
                                                                                                                                                        />

                                                                                                                                                            </button>
                                                                                                                                                              );
                                                                                                                                                              }

                                                                                                                                                              export default SettingItem;