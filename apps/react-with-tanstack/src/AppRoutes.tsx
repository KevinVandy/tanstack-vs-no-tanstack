import { Router, Route, RootRoute } from "@tanstack/react-router";
import { AppLayout } from "./AppLayout";
import { HomePage } from "./pages/HomePage";
import { FeedPage } from "./pages/FeedPage";
import { UsersPage } from "./pages/UsersPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { PostPage } from "./pages/PostPage";

const rootRoute = new RootRoute({
  component: AppLayout,
});

const homePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const feedPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "feed",
  component: FeedPage,
});

const usersPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "users",
  component: UsersPage,
});

const userProfilePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "profile",
  component: UserProfilePage,
});

const postPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "post",
  component: PostPage,
});

const routeTree = rootRoute.addChildren([
  homePageRoute,
  feedPageRoute,
  usersPageRoute,
  userProfilePageRoute,
  postPageRoute,
]);

export const router = new Router({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
