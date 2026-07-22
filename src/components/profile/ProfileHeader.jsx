import { FaCircleCheck } from "react-icons/fa6";

function ProfileHeader() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">

      {/* Cover */}
      <div className="h-44 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

      {/* Profile */}
      <div className="px-6 pb-6">

        <div className="-mt-14 flex justify-between items-end">

          <div className="w-28 h-28 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center text-4xl font-bold text-cyan-400">
            B
          </div>

          <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition">
            Edit Profile
          </button>

        </div>

        <div className="mt-5">

          <div className="flex items-center gap-2 flex-wrap">

            <h2 className="text-2xl font-bold text-white">
              Bakari Hamisi
            </h2>

            <FaCircleCheck
              className="text-sky-500"
              size={18}
            />

            <span className="text-xl">
              👑
            </span>

          </div>

          <p className="text-cyan-400 mt-1">
            @hamsogwiji
          </p>

          <p className="text-slate-400 mt-3">
            🚀 Founder of LINKUP.HUB • Building a modern social platform with React + Supabase.
          </p>

          <p className="text-slate-500 text-sm mt-3">
            🇰🇪 Kenya
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProfileHeader;