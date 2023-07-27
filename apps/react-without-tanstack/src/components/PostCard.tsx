import { IPost } from "../types/api-types";

interface Props {
  post: IPost;
}

export const PostCard = ({ post }: Props) => {
  return (
    <div className="flex-col p-4 border-gray-700 border-solid border-2 m-2 rounded">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
