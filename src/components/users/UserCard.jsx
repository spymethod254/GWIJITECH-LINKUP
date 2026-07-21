function UserCard({ user }) {
      return (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between hover:border-cyan-500 transition">

                <div className="flex items-center gap-3">

                        <div className="relative">

                                  <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-lg">
                                              {user.name.charAt(0)}
                                                        </div>

                                                                  {user.online && (
                                                                              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-900"></div>
                                                                                        )}

                                                                                                </div>

                                                                                                        <div>

                                                                                                                  <div className="flex items-center gap-2">

                                                                                                                              <h2 className="font-bold">
                                                                                                                                            {user.name}
                                                                                                                                                        </h2>

                                                                                                                                                                    {user.verified && (
                                                                                                                                                                                  <span className="text-cyan-400">✔️</span>
                                                                                                                                                                                              )}

                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                  <p className="text-slate-400 text-sm">
                                                                                                                                                                                                                              @{user.username}
                                                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                                                  <p className="text-sm mt-1">
                                                                                                                                                                                                                                                              {user.bio}
                                                                                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                            <button
                                                                                                                                                                                                                                                                                                    className={`px-4 py-2 rounded-xl font-semibold transition ${
                                                                                                                                                                                                                                                                                                              user.following
                                                                                                                                                                                                                                                                                                                          ? "bg-slate-700 text-white"
                                                                                                                                                                                                                                                                                                                                      : "bg-cyan-500 text-black hover:bg-cyan-400"
                                                                                                                                                                                                                                                                                                                                              }`}
                                                                                                                                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                                                                                                                            {user.following ? "Following" : "Follow"}
                                                                                                                                                                                                                                                                                                                                                                  </button>

                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                        export default UserCard;