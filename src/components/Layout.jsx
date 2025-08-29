import { Outlet } from "react-router";
import Header from "./Header";
import Info from "./Info";
export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
        <Info />
      </main>
    </div>
  );
}
