import { Link } from "react-router-dom";

import {
          HiMagnifyingGlass,
            HiBell,
              HiCog6Tooth,
              } from "react-icons/hi2";

              function Navbar() {
                return (
                    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">

                          <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-4">

                                  <h1 className="text-2xl font-extrabold text-cyan-400">
                                            LINKUP.HUB
                                                    </h1>

                                                            <div className="flex items-center gap-4 text-slate-300">

                                                            <Link to="/settings"

                                                                       className="hover:text-cyan-400 transition">
                                                                                  <HiMagnifyingGlass size={22} />
                                                                                            </Link>

                                                                                                      <button className="hover:text-cyan-400 transition">
                                                                                                                  <HiBell size={22} />
                                                                                                                            </button>

                                                                                                                                      <button className="hover:text-cyan-400 transition">
                                                                                                                                                  <HiCog6Tooth size={22} />
                                                                                                                                                            </button>

                                                                                                                                                                    </div>

                                                                                                                                                                          </div>

                                                                                                                                                                              </header>
                                                                                                                                                                                );
                                                                                                                                                                                }

                                                                                                                                                                                export default Navbar;