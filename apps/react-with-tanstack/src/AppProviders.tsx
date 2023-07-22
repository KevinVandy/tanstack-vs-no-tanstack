import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AppProviders = ({ children }: Props) => {
  return children
};
