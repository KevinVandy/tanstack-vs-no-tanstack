import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { HomePage } from "./pages/HomePage";
import { FeedPage } from "./pages/FeedPage";
import { UsersPage } from "./pages/UsersPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { PostPage } from "./pages/PostPage";

export const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/profile/:userId" element={<UserProfilePage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </AppLayout>
  );
};
