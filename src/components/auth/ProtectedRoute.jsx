import { Navigate } from "react-router-dom";
import useSession from "../../hooks/useSession";

function ProtectedRoute({ children }) {
  const { user, loading } = useSession();

    if (loading) {
        return (
              <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                      Loading...
                            </div>
                                );
                                  }

                                    if (!user) {
                                        return <Navigate to="/login" replace />;
                                          }

                                            return children;
                                            }

                                            export default ProtectedRoute;