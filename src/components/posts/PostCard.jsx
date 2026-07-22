import {
          HiOutlineHeart,
            HiOutlineChatBubbleOvalLeft,
              HiOutlineArrowPathRoundedSquare,
              } from "react-icons/hi2";
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

                                                                                                                                                                                                                                                                                              <div className="flex justify-around mt-6 border-t border-slate-800 pt-4">

                                                                                                                                                                                                                                                                                                      <button className="flex items-center gap-2 hover:text-red-400 transition">
                                                                                                                                                                                                                                                                                                                <HiOutlineHeart />
                                                                                                                                                                                                                                                                                                                          0
                                                                                                                                                                                                                                                                                                                                  </button>

                                                                                                                                                                                                                                                                                                                                          <button className="flex items-center gap-2 hover:text-cyan-400 transition">
                                                                                                                                                                                                                                                                                                                                                    <HiOutlineChatBubbleOvalLeft />
                                                                                                                                                                                                                                                                                                                                                              0
                                                                                                                                                                                                                                                                                                                                                                      </button>

                                                                                                                                                                                                                                                                                                                                                                              <button className="flex items-center gap-2 hover:text-green-400 transition">
                                                                                                                                                                                                                                                                                                                                                                                        <HiOutlineArrowPathRoundedSquare />
                                                                                                                                                                                                                                                                                                                                                                                                  0
                                                                                                                                                                                                                                                                                                                                                                                                          </button>

                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                                                                      export default PostCard;