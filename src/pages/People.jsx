import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { FaCircleCheck } from "react-icons/fa6";

const initialUsers = [
  {
    id: 1,
    username: "hamsogwiji",
    name: "Bakari Hamisi",
    verified: true,
    owner: true,
    followers: 1100200,
    following: false,
  },
  {
    id: 2,
    username: "janedoe",
    name: "Jane Doe",
    verified: true,
    owner: false,
    followers: 842,
    following: false,
  },
  {
    id: 3,
    username: "johndev",
    name: "John Developer",
    verified: false,
    owner: false,
    followers: 315,
    following: false,
  },
];

function People() {
  const [users, setUsers] = useState(initialUsers);

  function toggleFollow(id) {
    setUsers((current) =>
      current.map((user) => {
        if (user.id !== id) return user;

        const following = !user.following;

        return {
          ...user,
          following,
          followers: following
            ? user.followers + 1
            : user.followers - 1,
        };
      })
    );
  }

  return (
    <MainLayout>
      <div className="space-y-5">

        <h1 className="text-2xl font-bold">
          Discover People 👥
        </h1>

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-xl">
                {user.username.charAt(0).toUpperCase()}
              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h2 className="font-bold">
                    {user.username}
                  </h2>

                  {user.verified && (
                    <FaCircleCheck
                      className="text-sky-500"
                      size={15}
                    />
                  )}

                  {user.owner && (
                    <span title="Owner">
                      👑
                    </span>
                  )}

                </div>

                <p className="text-slate-400 text-sm">
                  {user.name}
                </p>

                <p className="text-slate-500 text-sm">
                  {user.followers.toLocaleString()} followers
                </p>

              </div>

            </div>

            <button
              onClick={() => toggleFollow(user.id)}
              className={`px-5 py-2 rounded-xl font-semibold transition ${
                user.following
                  ? "bg-slate-700 hover:bg-slate-600 text-white"
                  : "bg-cyan-500 hover:bg-cyan-400 text-black"
              }`}
            >
              {user.following ? "Following ✓" : "Follow"}
            </button>

          </div>
        ))}

      </div>
    </MainLayout>
  );
}

export default People;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   