import Sidebar from "@/components/sidebar";

export default function MainLayout({children}: { children: React.ReactNode}){
    return(
        <>
            <div className="flex h-full gap-10 max-w-[1440px] mx-auto">
                <Sidebar />
                <div className="flex-1 h-screen grid grid-cols-[2fr_1fr] gap-10 pt-5 overflow-y-auto scrollbar">
                    {children}
                </div>
            </div>
        </>
    )
}