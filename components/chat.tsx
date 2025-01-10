"use client"
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";


export function Chat() {
    const [showSettings, setShowSettings] = useState(false);
    const [isStream, setIsStream] = useState(true);

    return (
        <div className="flex flex-col w-full">
            {/* 标题 */}
            <div className="px-4 py-2">
                <h1 className="text-lg text-black-900 font-bold">聊天</h1>
            </div>

            {/* 对话区域 */}
            <div className="flex-1 min-h-[500px] mx-4 border rounded-lg">
                <div className="p-4">
                    <span className="text-black-900 font-bold">对话</span>
                </div>
            </div>

            <div>
                {/* 输入区域 */}
                <div className="flex items-center gap-2 p-4">
                    <input
                        type="text"
                        className="flex-1 px-3 py-2 border rounded-full"
                        placeholder="Enter to send"
                    />
                    <button className="px-4 py-2 text-blue-500 border rounded-lg hover:bg-gray-50 flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        图片
                    </button>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                        发送
                    </button>
                    <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                        🗑️
                    </button>
                </div>

                {/* Stream开关 */}
                <div className="px-4 py-2 flex items-center gap-2 border-t">
                    <Switch
                        className="data-[state=checked]:bg-blue-500"
                        checked={isStream}
                        onCheckedChange={setIsStream}
                    />
                    <span className="text-sm">Stream</span>
                </div>

                {/* 更多设置区域 */}
                <div className="px-4 border-t">
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="flex items-center gap-1 py-2 text-sm"
                    >
                        <span className="transform transition-transform duration-200" style={{
                            transform: showSettings ? 'rotate(90deg)' : 'rotate(0deg)'
                        }}>▶</span>
                        更多设置
                    </button>

                    {showSettings && (
                        <div className="space-y-4 pb-4">
                            {/* Endpoint名称 */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm mb-1">Endpoint名称</label>
                                    <select className="w-full border rounded p-2 bg-white">
                                        <option disabled selected className="text-red-500">select model first</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm mb-1">最大Token数量</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        defaultValue="1024"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm mb-1">Temperature</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        defaultValue="0.1"
                                    />
                                </div>
                            </div>

                            {/* 第二行 */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm mb-1">top_p</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        defaultValue="0.95"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm mb-1">最大对话记录轮数</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        defaultValue="10"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm mb-1">系统角色提示词</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm mb-1">自定义Chat Template</label>
                                    <label className="block text-xs mb-1 text-blue-500 underline">当tokenizer_config.json中没有提供chat_template时,使用此配置,示例 </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        defaultValue="{% if add_generation_prompt and messages[-1]['role'] != 'assistant' %}{{ '<|im_start|>assistant
' }}{% endif %}"
                                    />
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}