import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Chats from "./pages/Chats";
import People from "./pages/People";
import Notifications from "./pages/Notifications";
import Conversation from "./pages/Conversation";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
      <BrowserRouter>
            <Routes>

                   <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

<Route
  path="/chats"
  element={
    <ProtectedRoute>
      <Chats />
    </ProtectedRoute>
  }
/>

<Route
  path="/people"
  element={
    <ProtectedRoute>
      <People />
    </ProtectedRoute>
  }
/>

<Route
  path="/notifications"
  element={
    <ProtectedRoute>
      <Notifications />
    </ProtectedRoute>
  }
/>

<Route
  path="/conversation"
  element={
    <ProtectedRoute>
      <Conversation />
    </ProtectedRoute>
  }
/>




                    <Route path="/" element={<Home />} />

                            <Route path="/login" element={<Login />} />

                                    <Route path="/register" element={<Register />} />

                                                            <Route path="*" element={<NotFound />} />         
                                                                  </Routes>
                                                                      </BrowserRouter>
                                                                        );
                                                                        }

                                                                        export default App;