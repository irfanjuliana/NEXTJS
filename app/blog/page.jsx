import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <>
      <Heading>Blog</Heading>
      <p>List of posts</p>
      <h2 className="text-2xl mb-3">List of posts</h2>

      {posts.map((post) => (
        <PostCard
          title={post.title}
          href={`/blog/${post.slug}`}
          image={post.image}
          description={post.description}
          date={post.date}
          author={post.author}
        />
      ))}
    </>
  );
}
