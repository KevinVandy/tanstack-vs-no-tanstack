import { Outlet } from "@tanstack/react-router";
import { TopNav } from "./components/navigation/TopNav";

export const AppLayout = () => {
  return (
    <div className="flex-col">
      <TopNav />
      <Outlet />
    </div>
  );
};
