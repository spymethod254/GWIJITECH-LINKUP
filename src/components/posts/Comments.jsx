import { useEffect, useState } from "react";
import { getComments } from "../../services/commentService";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadComments() {
      try {
        const data = await getComments(postId);
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadComments();
  }, [postId]);

  return (
    <div className="mt-5 space-y-3">

      {comments.length === 0 && (
        <p className="text-slate-500 text-sm">
          No comments yet.
        </p>
      )}

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-xl bg-slate-950 border border-slate-800 p-3"
        >
          <p className="font-semibold text-cyan-400">
            User
          </p>

          <p className="text-slate-300 mt-1">
            {comment.content}
          </p>
        </div>
      ))}

    </div>
  );
}

export default Comments;