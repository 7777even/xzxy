"use client"

import CreateTaskForm from '@/components/create-task-form';
import { Sidebar } from "@/components/sidebar2"

export default function CreateTaskPage() {

    return (
        <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-6 ml-6 pt-0">
                <div className="">
                    <CreateTaskForm />
                </div>
            </main>
        </div>

    )
}