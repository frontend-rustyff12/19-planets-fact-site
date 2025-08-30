import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Info from "./Info";
export default function Layout() {
  const location = useLocation();
  const planet =
    location.pathname === "/"
      ? "Mercury"
      : location.pathname.slice(1).charAt(0).toUpperCase() +
        location.pathname.slice(2);
  return (
    <div className="site-wrapper">
      <div className="background" />
      <Header />
      <main>
        <Outlet />
        <Info planet={planet} />
      </main>
    </div>
  );
}
