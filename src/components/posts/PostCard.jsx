import PostActions from "./PostActions";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { FaCircleCheck } from "react-icons/fa6";

              function PostCard({ post }) {
                const username =
                    post?.profiles?.username ||
                        post?.username ||
                            "Anonymous";

                              const avatarLetter = username.charAt(0).toUpperCase();

                                const createdAt = post?.created_at
                                    ? new Date(post.created_at).toLocaleString()
                                        : "Just now";

                                          return (
                                              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

                                                    {/* Header */}

                                                          <div className="flex gap-3">

                                                                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                                                                            {avatarLetter}
                                                                                    </div>

                                                                                            <div>

                                                                                                      <div className="flex items-center gap-2">

                                                                                                                  <h3 className="font-bold">
                                                                                                                                {username}
                                                                                                                                            </h3>

                                                                                                                                                        <FaCircleCheck
                                                                                                                                                                      className="text-sky-500"
                                                                                                                                                                                    size={15}
                                                                                                                                                                                                />

                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                    <p className="text-slate-400 text-sm">
                                                                                                                                                                                                                                {createdAt}
                                                                                                                                                                                                                                          </p>

                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                              {/* Content */}

                                                                                                                                                                                                                                                                    <p className="mt-4 whitespace-pre-wrap">
                                                                                                                                                                                                                                                                            {post.content}
                                                                                                                                                                                                                                                                                  </p>

                                                                                                                                                                                                                                                                                        {/* Actions */}

<PostActions post={post} />

<CommentForm postId={post.id} />

<Comments postId={post.id} />                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                                                                      export default PostCard;