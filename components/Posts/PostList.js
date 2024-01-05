import PostItem from "./PostItem";

export default function PostList(props) {
  const { posts, isGrid } = props;

  return (
    <ul className={`posts-list ${isGrid && "posts-list--grid"}`}>
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
}
