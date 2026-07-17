import { HiOutlinePhoto, HiOutlineFaceSmile } from "react-icons/hi2";

function CreatePost() {
  return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

            <div className="flex gap-3">

                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                              B
                                      </div>

                                              <input
                                                        type="text"
                                                                  placeholder="What's happening?"
                                                                            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 outline-none focus:border-cyan-500"
                                                                                    />

                                                                                          </div>

                                                                                                <div className="flex justify-between mt-4">

                                                                                                        <div className="flex gap-3">

                                                                                                                  <button className="text-cyan-400 text-xl">
                                                                                                                              <HiOutlinePhoto />
                                                                                                                                        </button>

                                                                                                                                                  <button className="text-yellow-400 text-xl">
                                                                                                                                                              <HiOutlineFaceSmile />
                                                                                                                                                                        </button>

                                                                                                                                                                                </div>

                                                                                                                                                                                        <button className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl font-semibold text-black transition">
                                                                                                                                                                                                  Post
                                                                                                                                                                                                          </button>

                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      }

                                                                                                                                                                                                                      export default CreatePost;