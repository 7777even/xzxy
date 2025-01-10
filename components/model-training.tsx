"use client"

import { Search, Settings, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ModelTrainingPage() {
    const [sortDirections, setSortDirections] = useState<Record<string, 'asc' | 'desc' | null>>({});
    const [selectedItems, setSelectedItems] = useState<string[]>([]); // 添加选中项的状态

    const router = useRouter();

    const toggleSort = (column: string) => {
        setSortDirections(prev => ({
            ...prev,
            [column]: prev[column] === 'asc' ? 'desc' : 'asc'
        }));
    };
    const handleCreateNewTask = () => {
        router.push('/model-training/create');
    };
    const SortableHeader = ({ column }: { column: string }) => (
        <div
            className="flex items-center gap-1 cursor-pointer hover:text-gray-900"
            onClick={() => toggleSort(column)}
        >
            {column}
            <ChevronDown
                className={`h-4 w-4 transition-transform ${sortDirections[column] === 'asc' ? 'rotate-180' : ''
                    }`}
            />
        </div>
    );
    return (
        <div className="flex flex-col gap-6 ">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold text-gray-800">Jobs </h1><h1 className="text-2xl font-semibold text-gray-500">(0+)</h1>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="flex items-center gap-1 px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-100 font-semibold"
                    >
                        <RotateCw className="h-5 w-5" />
                        刷新
                    </Button>

                    <Button
                        variant="outline"
                        className={`rounded-full border px-6 py-2 font-semibold ${selectedItems.length > 0
                            ? "border-gray-500 text-gray-700 hover:bg-gray-100"
                            : "border-gray-500 text-gray-500 cursor-not-allowed"
                            }`}
                        disabled={selectedItems.length === 0}
                    >
                        部署
                    </Button>
                    <Button
                        variant="outline"
                        className={`rounded-full border px-6 py-2 font-semibold ${selectedItems.length > 0
                            ? "border-gray-500 text-gray-700 hover:bg-gray-100"
                            : "border-gray-500 text-gray-500 cursor-not-allowed"
                            }`}
                        disabled={selectedItems.length === 0}
                    >
                        删除
                    </Button>
                    <Button
                        onClick={handleCreateNewTask}
                        className="rounded-full bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 font-semibold"
                    >
                        创建新任务
                    </Button>
                </div>
            </div>

            <div className="flex justify-between items-center w-full">
                {/* Search Section */}
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                        placeholder="Find"
                        className="pl-10 border-gray-300 w-[700px] rounded-md focus:outline-none focus:ring-0"
                    />
                </div>

                {/* Pagination Section */}
                <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button className="text-gray-500 hover:text-black">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    {/* Current Page */}
                    <span className="text-black font-medium">1</span>
                    {/* Next Button */}
                    <button className="text-gray-500 hover:text-black">
                        <ChevronRight className="h-5 w-5" />
                    </button>
                    {/* Divider */}
                    <div className="border-l border-gray-300 h-5 mx-2"></div>
                    {/* Settings Button */}
                    <button className="text-gray-500 hover:text-black">
                        <Settings className="h-5 w-5" />
                    </button>
                </div>
            </div>


            <Table className="rounded-lg shadow-sm w-full">
                <TableHeader>
                    <TableRow className="">
                        <TableHead className="font-medium">
                            <SortableHeader column="ID" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="Status" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="Name" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="SM Job Name" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="Model Name" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="Type" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="Finetune" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="Create Time" />
                        </TableHead>
                        <TableHead className="font-medium">
                            <SortableHeader column="Output S3 Path" />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={9}>
                            <div className="flex flex-col items-center justify-center py-6 gap-1">
                                <p className="text-sm text-gray-500">No matches</p>
                                <p className="text-sm text-gray-500">We can't find a match.</p>
                                <Button
                                    variant="link"
                                    className="text-blue-500 border border-blue-500 rounded-full px-4 py-1 text-sm hover:bg-blue-100"
                                >
                                    Clear filter
                                </Button>

                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    );
}


