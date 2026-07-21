import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Chats from "./pages/Chats";
import People from "./pages/People";

function App() {
  return (
      <BrowserRouter>
            <Routes>

                    <Route path="/" element={<Home />} />

                            <Route path="/login" element={<Login />} />

                                    <Route path="/register" element={<Register />} />

                                            <Route path="/profile" element={<Profile />} />

                                                    <Route path="/settings" element={<Settings />} />

                                                            <Route path="*" element={<NotFound />} />
                                                            
                                                                    <Route path="/chats" element={<Chats />} />
                                                                            <Route path="/people" element={<People />} />

                                                                  </Routes>
                                                                      </BrowserRouter>
                                                                        );
                                                                        }

                                                                        export default App;