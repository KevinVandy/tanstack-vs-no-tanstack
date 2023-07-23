import { type ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const AppProviders = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
