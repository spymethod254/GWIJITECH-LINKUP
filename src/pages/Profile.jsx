import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import PostCard from "../components/posts/PostCard";
import { posts } from "../data/posts";

function Profile() {
  const [tab, setTab] = useState("posts");

  return (
    <MainLayout>
      <div className="space-y-6">

        <ProfileHeader />

        <ProfileStats />

        {/* Tabs */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 flex justify-between">

          <button
            onClick={() => setTab("posts")}
            className={`flex-1 py-2 rounded-lg transition ${
              tab === "posts"
                ? "bg-cyan-500 text-black font-semibold"
                : "text-slate-400"
            }`}
          >
            📝 Posts
          </button>

          <button
            onClick={() => setTab("likes")}
            className={`flex-1 py-2 rounded-lg transition ${
              tab === "likes"
                ? "bg-cyan-500 text-black font-semibold"
                : "text-slate-400"
            }`}
          >
            ❤️ Likes
          </button>

          <button
            onClick={() => setTab("photos")}
            className={`flex-1 py-2 rounded-lg transition ${
              tab === "photos"
                ? "bg-cyan-500 text-black font-semibold"
                : "text-slate-400"
            }`}
          >
            🖼 Photos
          </button>

          <button
            onClick={() => setTab("about")}
            className={`flex-1 py-2 rounded-lg transition ${
              tab === "about"
                ? "bg-cyan-500 text-black font-semibold"
                : "text-slate-400"
            }`}
          >
            ℹ About
          </button>

        </div>

        {/* Content */}

        {tab === "posts" && (
          <div className="space-y-5">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {tab === "likes" && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold">❤️ Liked Posts</h2>
            <p className="text-slate-400 mt-2">
              Your liked posts will appear here.
            </p>
          </div>
        )}

        {tab === "photos" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-40 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500"
              >
                Photo {index + 1}
              </div>
            ))}
          </div>
        )}

        {tab === "about" && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
            <p>
              <strong>Name:</strong> Bakari Hamisi
            </p>

            <p>
              <strong>Username:</strong> @hamsogwiji
            </p>

            <p>
              <strong>Role:</strong> Founder 👑
            </p>

            <p>
              <strong>Verified:</strong> ✔️ Yes
            </p>

            <p>
              <strong>Bio:</strong> Building LINKUP.HUB using React + Supabase 🚀
            </p>
          </div>
        )}

      </div>
    </MainLayout>
  );
}

export default Profile;