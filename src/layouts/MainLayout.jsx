import Navbar from "../components/common/Navbar";
import BottomNav from "../components/common/BottomNav";

function MainLayout({ children }) {
  return (
      <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

                  <main className="pb-20 pt-16 max-w-2xl mx-auto px-4">
                          {children}
                                </main>

                                      <BottomNav />

                                          </div>
                                            );
                                            }

                                            export default MainLayout;