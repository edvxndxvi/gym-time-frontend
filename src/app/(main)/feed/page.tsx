import NewPost from "@/components/newpost";
import PostItem from "@/components/postItem";
import SearchBar from "@/components/searchbar";
import { getPosts } from "@/actions/post-actions";

export default async function Feed() {
  const data: Post[] = await getPosts();

  return (
    <>
      <main className="flex flex-col gap-8">
        <SearchBar />
        <NewPost />
        {[...data].reverse().map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </main>
      <aside className="">
        <h2>Perfis Sugeridos</h2>
      </aside>
    </>
  );
}
