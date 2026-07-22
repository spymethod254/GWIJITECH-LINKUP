import { Link } from "react-router-dom";

function ChatCard({ chat }) {
      return (
        <Link to="/conversation">
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition cursor-pointer">

                <div className="flex items-center gap-3">

                        <div className="relative">

                                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">
                                              {chat.username.charAt(0)}
                                                        </div>

                                                                  {chat.online && (
                                                                              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-900"></div>
                                                                                        )}

                                                                                                </div>

                                                                                                        <div>

                                                                                                                  <h3 className="font-semibold">
                                                                                                                              {chat.username}
                                                                                                                                        </h3>

                                                                                                                                                  <p className="text-slate-400 text-sm">
                                                                                                                                                              {chat.message}
                                                                                                                                                                        </p>

                                                                                                                                                                                </div>

                                                                                                                                                                                      </div>

                                                                                                                                                                                            <div className="text-right">

                                                                                                                                                                                                    <p className="text-xs text-slate-400">
                                                                                                                                                                                                              {chat.time}
                                                                                                                                                                                                                      </p>

                                                                                                                                                                                                                              {chat.unread > 0 && (
                                                                                                                                                                                                                                        <div className="mt-2 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold text-black ml-auto">
                                                                                                                                                                                                                                                    {chat.unread}
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                      )}

                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                              </Link>
                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                  export default ChatCard;
