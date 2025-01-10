import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Chat } from "@/components/chat"

export default function Page() {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Model Hub</span>
                        <span>&gt;</span>
                        <span>终端管理</span>
                    </div>
                    <div className="mt-4">
                        <Chat />
                    </div>
                </main>
            </div>
        </div>
    )
}