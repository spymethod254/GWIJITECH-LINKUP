import { useEffect, useState } from "react";

import useSession from "../../hooks/useSession";
import {
  getFollowersCount,
  getFollowingCount,
  getPostsCount,
} from "../../services/profileService";

function ProfileStats() {
  const { user } = useSession();

  const [stats, setStats] = useState({
    posts: 0,
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    async function loadStats() {
      if (!user) return;

      try {
        const [posts, followers, following] = await Promise.all([
          getPostsCount(user.id),
          getFollowersCount(user.id),
          getFollowingCount(user.id),
        ]);

        setStats({
          posts,
          followers,
          following,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadStats();
  }, [user]);

  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
        <h2 className="text-2xl font-bold text-cyan-400">
          {stats.posts}
        </h2>
        <p className="text-slate-400">Posts</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
        <h2 className="text-2xl font-bold text-cyan-400">
          {stats.followers}
        </h2>
        <p className="text-slate-400">Followers</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
        <h2 className="text-2xl font-bold text-cyan-400">
          {stats.following}
        </h2>
        <p className="text-slate-400">Following</p>
      </div>

    </div>
  );
}

export default ProfileStats;