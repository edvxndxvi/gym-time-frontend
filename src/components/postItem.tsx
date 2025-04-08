import { Ellipsis, Heart, MessageSquareMore, Reply, ShareIcon } from "lucide-react";
interface PostItemProps {
   post: Post
}

export default function PostItem({post}: PostItemProps){
    return(
        <div className="p-4 bg-[#18181B] rounded-2xl">
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-4 items-center">
                    <img src="http://github.com/edvxndxvi.png" alt="User avatar" width={40} height={40} className="rounded-full"/>
                    <div className="flex gap-2 items-center">
                        <span className="font-medium text-lg inline-block">edvxndxvi</span>
                        <span className="inline-block text-[#3F3F46]">{post.user}</span>
                        <span className="inline-block text-[#3F3F46]">• {post.date}</span>
                    </div>
                </div>

                <div>
                    <Ellipsis className="cursor-pointer" size={20}/> 
                </div>
            </div>

            <div className="mb-4">
                <p className="text-white">{post.content}</p>
            </div>

            <div className="flex justify-between">
                <ul className="flex gap-4">
                    <li><button className="flex items-center gap-2 py-1 px-2 hover:bg-[#27272A] rounded-full text-sm cursor-pointer"><Heart size={20}/>{post.likes}</button></li>
                    <li><button className="flex items-center gap-2 py-1 px-2 hover:bg-[#27272A] rounded-full text-sm cursor-pointer"><MessageSquareMore size={20}/> {post.comments}</button></li>
                    <li><button className="flex items-center gap-2 py-1 px-2 hover:bg-[#27272A] rounded-full text-sm cursor-pointer"><Reply size={20}/> {post.shares}</button></li>
                </ul>

                <div>
                    <ShareIcon className="cursor-pointer" size={20}/>
                </div>
            </div>
        </div>
    )
}