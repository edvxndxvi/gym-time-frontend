import NewPost from "@/components/newpost"
import PostItem from "@/components/postItem";
import SearchBar from "@/components/searchbar"
//import { getPosts } from '@/actions/post-actions';

// async function getPosts() {
//     const response = await fetch('http://localhost:8080/posts');
//     return response.json();
// }

export default async function Feed() {

    const data = [
        {
            "id": 1,
            "user": "tetsuo",
            "content":  "Teste",
            "date": Date.now(),
            "likes": 43,
            "comments": 13,
            "shares": 0
        },
        {
            "id": 2,
            "user": "roma",
            "content":  "Teste2",
            "date": Date.now(),
            "likes": 41,
            "comments": 13,
            "shares": 4
        },
    ]

    return (
        <>
            <main className="flex flex-col gap-8">
                <SearchBar />
                <NewPost />
                {data.map(post => <PostItem key={post.id} post={post}/>)}    
            </main>

            <aside>
                <h2>Perfis Sugeridos</h2>
            </aside>
        </>
    )
}