import { HiArrowLeft, HiPaperAirplane } from "react-icons/hi2";
import MainLayout from "../layouts/MainLayout";
import MessageBubble from "../components/chats/MessageBubble";
import { messages } from "../data/messages";

function Conversation() {
  return (
      <MainLayout>
            <div className="flex flex-col h-[calc(100vh-140px)]">

                    {/* Header */}
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">

                                      <button className="text-2xl">
                                                  <HiArrowLeft />
                                                            </button>

                                                                      <div className="relative">

                                                                                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                                                                                                J
                                                                                                            </div>

                                                                                                                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-900"></div>

                                                                                                                                  </div>

                                                                                                                                            <div>

                                                                                                                                                        <h2 className="font-bold">
                                                                                                                                                                      John
                                                                                                                                                                                  </h2>

                                                                                                                                                                                              <p className="text-sm text-green-400">
                                                                                                                                                                                                            Online
                                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                  {/* Messages */}
                                                                                                                                                                                                                                                          <div className="flex-1 overflow-y-auto py-5 space-y-4">

                                                                                                                                                                                                                                                                    {messages.map((message) => (
                                                                                                                                                                                                                                                                                <MessageBubble
                                                                                                                                                                                                                                                                                              key={message.id}
                                                                                                                                                                                                                                                                                                            message={message}
                                                                                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                                                                                  ))}

                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                  {/* Input */}
                                                                                                                                                                                                                                                                                                                                                          <div className="border-t border-slate-800 pt-4">

                                                                                                                                                                                                                                                                                                                                                                    <div className="flex gap-3">

                                                                                                                                                                                                                                                                                                                                                                                <input
                                                                                                                                                                                                                                                                                                                                                                                              type="text"
                                                                                                                                                                                                                                                                                                                                                                                                            placeholder="Type a message..."
                                                                                                                                                                                                                                                                                                                                                                                                                          className="flex-1 rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
                                                                                                                                                                                                                                                                                                                                                                                                                                      />

                                                                                                                                                                                                                                                                                                                                                                                                                                                  <button className="bg-cyan-500 hover:bg-cyan-400 rounded-xl px-5 text-black transition">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                <HiPaperAirplane size={22} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </MainLayout>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default Conversation;