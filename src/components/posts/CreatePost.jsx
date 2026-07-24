import { useState } from "react";
import {
  HiOutlinePhoto,
  HiOutlineFaceSmile,
} from "react-icons/hi2";

import { createPost } from "../../services/posts";
import useSession from "../../hooks/useSession";

function CreatePost({ onPostCreated }) {
  const { user } = useSession();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!content.trim()) return;

    if (!user) {
      alert("Please login first.");
      return;
    }

    setLoading(true);

    const result = await createPost(content, user.id);

    setLoading(false);

    if (result.success) {
      setContent("");

      if (onPostCreated) {
        onPostCreated();
      }
    } else {
      alert(result.error);
    }
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

      <div className="flex gap-3">

        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
          {user?.email?.charAt(0).toUpperCase() || "U"}
        </div>

        <textarea
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none resize-none focus:border-cyan-500"
        />

      </div>

      <div className="flex justify-between mt-4">

        <div className="flex gap-3">

          <button
            type="button"
            className="text-cyan-400 text-xl"
          >
            <HiOutlinePhoto />
          </button>

          <button
            type="button"
            className="text-yellow-400 text-xl"
          >
            <HiOutlineFaceSmile />
          </button>

        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 px-5 py-2 rounded-xl font-semibold text-black transition"
        >
          {loading ? "Posting..." : "Post"}
        </button>

      </div>

    </div>
  );
}

export default CreatePost;