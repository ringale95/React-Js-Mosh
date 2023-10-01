import Like from "./components/like";

const App = () => {
  const post: any = {
    title: "My Post",
    description: "This post is incredible",
    likes: 1,
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <Like likes={post.likes} />
    </div>
  );
};

export default App;
