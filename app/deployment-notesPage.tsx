import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { EndpointsTable } from "@/components/endpoints-table"

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
                        <EndpointsTable />
                    </div>
                </main>
            </div>
        </div>
    )
}