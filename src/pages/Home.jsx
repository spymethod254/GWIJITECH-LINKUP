import MainLayout from "../layouts/MainLayout";
import CreatePost from "../components/posts/CreatePost";
import PostCard from "../components/posts/PostCard";

function Home() {
  return (
      <MainLayout>

            <div className="space-y-6">

                        <CreatePost />

                                    <PostCard />

                                                <PostCard />

                                                            <PostCard />

                                                                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

                                                                              <h2 className="text-xl font-bold">
                                                                                          Welcome to LINKUP.HUB 🚀
                                                                                                    </h2>

                                                                                                              <p className="mt-2 text-slate-400">
                                                                                                                          Connect. Chat. Share. Build friendships.
                                                                                                                                    </p>

                                                                                                                                            </div>

                                                                                                                                                  </div>

                                                                                                                                                      </MainLayout>
                                                                                                                                                        );
                                                                                                                                                        }

                                                                                                                                                        export default Home;