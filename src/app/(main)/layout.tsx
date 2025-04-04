import Sidebar from "@/components/sidebar";

export default function MainLayout({children}: { children: React.ReactNode}){
    return(
        <>
            <div className="flex gap-10 max-w-[1440px] mx-auto">
                <Sidebar />
                <div className="flex-1 max-h-screen overflow-y-auto grid grid-cols-[2fr_1fr] gap-10 mt-5">
                    {children}
                </div>
            </div>
        </>
    )
}