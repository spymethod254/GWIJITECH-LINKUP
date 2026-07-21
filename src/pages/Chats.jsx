import MainLayout from "../layouts/MainLayout";
import ChatCard from "../components/chats/ChatCard";
import { chats } from "../data/chats";

function Chats() {
  return (
      <MainLayout>

            <div className="space-y-5">

                    <h1 className="text-3xl font-bold">
                              Chats 💬
                                      </h1>

                                              <input
                                                        type="text"
                                                                  placeholder="Search chats..."
                                                                            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 outline-none focus:border-cyan-500"
                                                                                    />

                                                                                            {chats.map((chat) => (
                                                                                                      <ChatCard
                                                                                                                  key={chat.id}
                                                                                                                              chat={chat}
                                                                                                                                        />
                                                                                                                                                ))}

                                                                                                                                                      </div>

                                                                                                                                                          </MainLayout>
                                                                                                                                                            );
                                                                                                                                                            }

                                                                                                                                                            export default Chats;