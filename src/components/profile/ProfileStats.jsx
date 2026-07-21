function ProfileStats() {
  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          24
        </h2>

        <p className="text-slate-400">
          Posts
        </p>

      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          1.2K
        </h2>

        <p className="text-slate-400">
          Followers
        </p>

      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          845
        </h2>

        <p className="text-slate-400">
          Following
        </p>

      </div>

    </div>
  );
}

export default ProfileStats;