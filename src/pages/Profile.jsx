import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import PostCard from "../components/posts/PostCard";

import useSession from "../hooks/useSession";
import { getMyPosts } from "../services/posts";

function Profile() {
  const { user } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      if (!user) return;

      const data = await getMyPosts(user.id);

      setPosts(data);
    }

    loadPosts();
  }, [user]);

  return (
    <MainLayout>

      <div className="space-y-6">

        <ProfileHeader />

        <ProfileStats />

        <div>

          <h2 className="text-xl font-bold mb-4">
            My Posts
          </h2>

          <div className="space-y-5">

            {posts.length === 0 ? (

              <div className="bg-slate-900 rounded-xl p-6 text-center text-slate-400">
                You haven't posted anything yet.
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

        </div>

      </div>

    </MainLayout>
  );
}

export default Profile;