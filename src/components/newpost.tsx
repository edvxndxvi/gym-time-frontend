import { Ellipsis, Images, SendHorizontal, Smile } from "lucide-react";

export default function NewPost(){
    return(
        <form>
            <div className="bg-[#18181B] p-4 rounded-tr-2xl rounded-tl-2xl">
                <div className="flex gap-4">
                    <div>
                        <img src="http://github.com/edvxndxvi.png" alt="User avatar" width={40} height={40} className="rounded-full"/>
                    </div>
                    <textarea placeholder="Novo Post" rows={3} className="w-full text-lg border-none focus:outline-none focus:ring-0 focus:border-transparent resize-none" />
                </div>
            </div>

            <div className="bg-[#27272A] px-4 py-2 flex justify-between rounded-br-2xl rounded-bl-2xl">
                <div className="flex gap-6">
                    <Smile className="cursor-pointer" size={20}/>
                    <Images className="cursor-pointer" size={20}/>
                    <Ellipsis className="cursor-pointer" size={20}/> 
                </div>

                <div>
                    <SendHorizontal className="cursor-pointer" size={20}/>
                </div>
            </div>
        </form>
    )
}