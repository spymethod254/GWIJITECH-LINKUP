function MessageBubble({ message }) {
      return (
          <div
                className={`flex ${
                        message.own ? "justify-end" : "justify-start"
                              }`}
                                  >
                                        <div
                                                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                                                          message.own
                                                                      ? "bg-cyan-500 text-black"
                                                                                  : "bg-slate-800 text-white"
                                                                                          }`}
                                                                                                >
                                                                                                        <p>{message.text}</p>

                                                                                                                <p
                                                                                                                          className={`text-xs mt-2 ${
                                                                                                                                      message.own ? "text-slate-900" : "text-slate-400"
                                                                                                                                                }`}
                                                                                                                                                        >
                                                                                                                                                                  {message.time}
                                                                                                                                                                          </p>
                                                                                                                                                                                </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                      );
                                                                                                                                                                                      }

                                                                                                                                                                                      export default MessageBubble;