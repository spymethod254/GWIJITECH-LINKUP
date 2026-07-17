import MainLayout from "../layouts/MainLayout";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import PostCard from "../components/posts/PostCard";
import { posts } from "../data/posts";

function Profile() {
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

            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))}

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Profile;