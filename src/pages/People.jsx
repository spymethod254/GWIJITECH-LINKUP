import MainLayout from "../layouts/MainLayout";
import UserCard from "../components/users/UserCard";
import { users } from "../data/users";

function People() {
  return (
      <MainLayout>

            <div className="space-y-6">

                    <h1 className="text-3xl font-bold">
                              Discover People 👥
                                      </h1>

                                              <input
                                                        type="text"
                                                                  placeholder="Search people..."
                                                                            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-3 outline-none focus:border-cyan-500"
                                                                                    />

                                                                                            {users.map((user) => (
                                                                                                      <UserCard
                                                                                                                  key={user.id}
                                                                                                                              user={user}
                                                                                                                                        />
                                                                                                                                                ))}

                                                                                                                                                      </div>

                                                                                                                                                          </MainLayout>
                                                                                                                                                            );
                                                                                                                                                            }

                                                                                                                                                            export default People;