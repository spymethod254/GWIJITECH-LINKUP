import { Link } from "react-router-dom";

function BottomNav() {
  return (
      <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950">

            <div className="max-w-2xl mx-auto flex justify-around p-3 text-2xl">

                    <Link to="/">🏠</Link>

                            <Link to="/chats">💬</Link>

                                    <Link to="/create">➕</Link>

                                            <Link to="/people">👥</Link>

                                                    <Link to="/profile">👤</Link>

                                                          </div>

                                                              </nav>
                                                                );
                                                                }

                                                                export default BottomNav;