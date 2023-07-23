import { type ReactNode } from "react";
import { TopNav } from "./components/navigation/TopNav";

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="flex-col">
      <TopNav />
      {children}
    </div>
  );
};
