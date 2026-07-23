import { useState } from "react";
import { addComment } from "../../services/commentService";

function CommentForm({ postId }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!content.trim()) return;

    setLoading(true);

    try {
      const userId = crypto.randomUUID();

      console.log("Post ID:", postId);
      console.log("User ID:", userId);
      console.log("Content:", content);

      const result = await addComment({
        postId,
        userId,
        content,
      });

      console.log("Supabase Result:", result);

      setContent("");
    } catch (error) {
      console.error("FULL ERROR:", error);
      alert(error.message);
}
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex gap-3"
    >
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="flex-1 rounded-xl bg-slate-950 border border-slate-700 px-4 py-2 text-white placeholder:text-slate-500 outline-none focus:border-cyan-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black hover:bg-cyan-400 transition disabled:opacity-50"
      >
        {loading ? "..." : "Comment"}
      </button>
    </form>
  );
}

export default CommentForm;