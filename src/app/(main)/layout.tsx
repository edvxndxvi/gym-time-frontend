import Sidebar from "@/components/sidebar";

export default function MainLayout({children}: { children: React.ReactNode}){
    return(
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 max-h-screen overflow-y-auto">
                    {children}
                </div>
            </div>
        </>
    )
}