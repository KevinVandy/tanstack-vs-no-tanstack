import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return <>{children}</>;
};
