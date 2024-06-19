import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>Nav</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
