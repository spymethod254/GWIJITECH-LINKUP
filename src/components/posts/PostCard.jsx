import {
      HiOutlineHeart,
        HiOutlineChatBubbleOvalLeft,
          HiOutlineArrowPathRoundedSquare,
          } from "react-icons/hi2";

          function PostCard() {
            return (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

                      <div className="flex gap-3">

                              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                                        B
                                                </div>

                                                        <div>

                                                                  <h3 className="font-bold">
                                                                              Bakari
                                                                                        </h3>

                                                                                                  <p className="text-slate-400 text-sm">
                                                                                                              2 minutes ago
                                                                                                                        </p>

                                                                                                                                </div>

                                                                                                                                      </div>

                                                                                                                                            <p className="mt-4">
                                                                                                                                                    🚀 Welcome to LINKUP.HUB! This is our first post.
                                                                                                                                                          </p>

                                                                                                                                                                <div className="flex justify-around mt-6 border-t border-slate-800 pt-4">

                                                                                                                                                                        <button className="flex items-center gap-2 hover:text-red-400 transition">
                                                                                                                                                                                  <HiOutlineHeart />
                                                                                                                                                                                            25M
                                                                                                                                                                                                    </button>

                                                                                                                                                                                                            <button className="flex items-center gap-2 hover:text-cyan-400 transition">
                                                                                                                                                                                                                      <HiOutlineChatBubbleOvalLeft />
                                                                                                                                                                                                                                8k
                                                                                                                                                                                                                                        </button>

                                                                                                                                                                                                                                                <button className="flex items-center gap-2 hover:text-green-400 transition">
                                                                                                                                                                                                                                                          <HiOutlineArrowPathRoundedSquare />
                                                                                                                                                                                                                                                                    4k
                                                                                                                                                                                                                                                                            </button>

                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                        export default PostCard;
