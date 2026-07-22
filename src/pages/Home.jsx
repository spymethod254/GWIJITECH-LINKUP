import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import CreatePost from "../components/posts/CreatePost";
import PostCard from "../components/posts/PostCard";
import { getPosts } from "../services/posts";

function Home() {
  const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

      async function loadPosts() {
          setLoading(true);

              const data = await getPosts();

                  setPosts(data);
                      setLoading(false);
                        }

                          useEffect(() => {
                              loadPosts();
                                }, []);

                                  return (
                                      <MainLayout>
                                            <div className="space-y-6">

                                                    <CreatePost onPostCreated={loadPosts} />

                                                            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                                                                      <h2 className="text-xl font-bold">
                                                                                  Welcome to LINKUP.HUB 🚀
                                                                                            </h2>

                                                                                                      <p className="mt-2 text-slate-400">
                                                                                                                  Connect. Chat. Share. Build friendships.
                                                                                                                            </p>
                                                                                                                                    </div>

                                                                                                                                            {loading ? (
                                                                                                                                                      <div className="text-center text-slate-400 py-8">
                                                                                                                                                                  Loading posts...
                                                                                                                                                                            </div>
                                                                                                                                                                                    ) : posts.length === 0 ? (
                                                                                                                                                                                              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center text-slate-400">
                                                                                                                                                                                                          No posts yet. Be the first to post! 🚀
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                            ) : (
                                                                                                                                                                                                                                      posts.map((post) => (
                                                                                                                                                                                                                                                  <PostCard
                                                                                                                                                                                                                                                                key={post.id}
                                                                                                                                                                                                                                                                              post={post}
                                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                                    ))
                                                                                                                                                                                                                                                                                                            )}

                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                      </MainLayout>
                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                        export default Home;