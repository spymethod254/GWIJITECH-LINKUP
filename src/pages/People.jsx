import MainLayout from "../layouts/MainLayout";
import { FaCircleCheck } from "react-icons/fa6";
import UserCard from "../components/users/UserCard";
import { users } from "../data/users";

const users = [
  {
    id: 1,
    username: "hamsogwiji",
    name: "Bakari Hamisi",
    verified: true,
    owner: true,
    followers: 12507659,
  },
  {
    id: 2,
    username: "janedoe",
    name: "Jane Doe",
    verified: true,
    owner: false,
    followers: 842,
  },
  {
    id: 3,
    username: "johndev",
    name: "John Developer",
    verified: false,
    owner: false,
    followers: 315,
  },
];

function People() {
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
                  {user.followers} followers
                </p>

              </div>

            </div>

            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-xl transition">
              Follow
            </button>

          </div>
        ))}

      </div>
    </MainLayout>
  );
}

export default People;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          