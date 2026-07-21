import { NavLink } from "react-router-dom";
import {
  HiHome,
    HiChatBubbleLeftRight,
      HiUserGroup,
        HiUser,
        } from "react-icons/hi2";

        function BottomNav() {
          const navClass = ({ isActive }) =>
              `flex flex-col items-center transition ${
                    isActive
                            ? "text-cyan-400"
                                    : "text-slate-400 hover:text-white"
                                        }`;

                                          return (
                                              <nav className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800">

                                                    <div className="max-w-2xl mx-auto flex justify-around py-3">

                                                            <NavLink to="/" className={navClass}>
                                                                      <HiHome size={24} />
                                                                                <span className="text-xs mt-1">Home</span>
                                                                                        </NavLink>

                                                                                                <NavLink to="/chats" className={navClass}>
                                                                                                          <HiChatBubbleLeftRight size={24} />
                                                                                                                    <span className="text-xs mt-1">Chats</span>
                                                                                                                            </NavLink>

                                                                                                                                    <NavLink to="/people" className={navClass}>
                                                                                                                                              <HiUserGroup size={24} />
                                                                                                                                                        <span className="text-xs mt-1">People</span>
                                                                                                                                                                </NavLink>

                                                                                                                                                                        <NavLink to="/profile" className={navClass}>
                                                                                                                                                                                  <HiUser size={24} />
                                                                                                                                                                                            <span className="text-xs mt-1">Profile</span>
                                                                                                                                                                                                    </NavLink>

                                                                                                                                                                                                          </div>

                                                                                                                                                                                                              </nav>
                                                                                                                                                                                                                );
                                                                                                                                                                                                                }

                                                                                                                                                                                                                export default BottomNav;