import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <p>
      <Heading>Blog</Heading>
      <p>List of posts</p>
      <h2 className="text-2xl mb-3">List of posts</h2>
      <PostCard
        title="Belajar Next.js"
        href="/blog/belajar-nextjs"
        image="/images/image-1.jpg"
        description="Belajar Next.js panjang banget"
        date="13.01.2022"
        author="admin"
      />
    </p>
  );
}
