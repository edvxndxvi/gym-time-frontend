"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
    return(
        <div className="bg-[#18181B] rounded-2xl w-full px-4 py-2 text-white flex items-center gap-2">
            <Search size={20} className="cursor-pointer"/>
            <input type="text" placeholder="Pesquisar" className=" placeholder:text-[#3F3F46] focus:outline-none" />
        </div>
    )
}