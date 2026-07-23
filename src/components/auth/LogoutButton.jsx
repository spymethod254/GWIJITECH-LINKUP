import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { logoutUser } from "../../services/authService";

function LogoutButton() {
  const navigate = useNavigate();

    async function handleLogout() {
        try {
              await logoutUser();

                    toast.success("Logged out successfully 👋");

                          navigate("/login");
                              } catch (error) {
                                    toast.error(error.message);
                                        }
                                          }

                                            return (
                                                <button
                                                      onClick={handleLogout}
                                                            className="w-full rounded-xl bg-red-500 hover:bg-red-400 text-white py-3 font-semibold transition"
                                                                >
                                                                      Logout
                                                                          </button>
                                                                            );
                                                                            }

                                                                            export default LogoutButton;