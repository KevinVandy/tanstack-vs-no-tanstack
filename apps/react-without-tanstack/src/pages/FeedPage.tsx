import { PostCard } from "../components/PostCard";
import { useFetchPosts } from "../hooks/useFetchPosts";

export const FeedPage = () => {
  const {
    data: posts,
    isError: isErrorLoadingPosts,
    isLoading: isLoadingPosts,
  } = useFetchPosts();

  return (
    <div className="flex-col gap-4">
      <h2>Your Feed</h2>
      {isLoadingPosts && <div>Loading posts...</div>}
      {isErrorLoadingPosts && <div>Error loading posts</div>}
      {!!posts?.length &&
        posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};
