import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-fuchsia-100">

      {/* Background Blur Circle 1 */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl md:h-96 md:w-96"></div>

      {/* Background Blur Circle 2 */}
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl md:h-96 md:w-96"></div>

      {/* Background Blur Circle 3 */}
      <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/20 blur-3xl md:h-72 md:w-72"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Outlet />
      </div>

    </main>
  );
}