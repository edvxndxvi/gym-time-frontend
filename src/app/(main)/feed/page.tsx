import NewPost from "@/components/newpost"
import SearchBar from "@/components/searchbar"

export default function Feed() {
    return (
        <>
            <main className="flex flex-col gap-8">
                    <SearchBar />
                    <NewPost />
            </main>

            <aside>
                <h2>Perfis Sugeridos</h2>
            </aside>
        </>
    )
}