import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import useProfile from "../../hooks/useProfile";

function ProfileHeader() {
  const { profile, loading } = useProfile();

    if (loading) {
        return (
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                      Loading profile...
                            </div>
                                );
                                  }

                                    if (!profile) {
                                        return (
                                              <div className="rounded-2xl border border-red-700 bg-slate-900 p-6">
                                                      Failed to load profile.
                                                            </div>
                                                                );
                                                                  }

                                                                    const avatarLetter = profile.username
                                                                        ? profile.username.charAt(0).toUpperCase()
                                                                            : "?";

                                                                              return (
                                                                                  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">

                                                                                        {/* Cover */}
                                                                                              <div className="h-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

                                                                                                    {/* Profile */}
                                                                                                          <div className="px-6 pb-6">

                                                                                                                  <div className="-mt-14 flex justify-between items-end">

                                                                                                                            <div className="w-28 h-28 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center text-4xl font-bold text-cyan-400">
                                                                                                                                        {avatarLetter}
                                                                                                                                                  </div>


<Link
  to="/edit-profile"
  className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
>
  Edit Profile
</Link>                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                             </div>

                                                                                                                                                                                                  <div className="mt-4">

                                                                                                                                                                                                            <div className="flex items-center gap-2">

                                                                                                                                                                                                                        <h2 className="text-2xl font-bold text-white">
                                                                                                                                                                                                                                      {profile.full_name}
                                                                                                                                                                                                                                                  </h2>

                                                                                                                                                                                                                                                              <FaCircleCheck
                                                                                                                                                                                                                                                                            className="text-sky-500"
                                                                                                                                                                                                                                                                                          size={18}
                                                                                                                                                                                                                                                                                                      />

                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                          <p className="text-cyan-400">
                                                                                                                                                                                                                                                                                                                                      @{profile.username}
                                                                                                                                                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                                                                                                                                                          <p className="text-slate-400 mt-3">
                                                                                                                                                                                                                                                                                                                                                                      {profile.bio || "Welcome to LINKUP.HUB 🚀"}
                                                                                                                                                                                                                                                                                                                                                                                </p>

                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                    export default ProfileHeader;