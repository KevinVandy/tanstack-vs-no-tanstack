import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { HomePage } from './pages/HomePage';

export const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppLayout>
  );
};
