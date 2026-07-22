function ProfileStats() {
  const stats = [
    {
      label: "Posts",
      value: "24K",
    },
    {
      label: "Followers",
      value: "11.2M",
    },
    {
      label: "Following",
      value: "0",
    },
    {
      label: "Likes",
      value: "967K",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-500 transition"
        >

          <h2 className="text-2xl font-bold text-cyan-400">
            {stat.value}
          </h2>

          <p className="text-slate-400 mt-1">
            {stat.label}
          </p>

        </div>
      ))}

    </div>
  );
}

export default ProfileStats;