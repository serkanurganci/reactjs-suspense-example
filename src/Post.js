const Post = ({ resource }) => {
  const post = resource.post.read();
  return (
    <>
      <div className="font-bold text-2xl">{post.title}</div>
      <div className="mt-6 font-light text-gray-500">{post.body}</div>
    </>
  );
};

export default Post;
