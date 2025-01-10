"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberPassword, setRememberPassword] = useState(false)

    const handleLogin = () => {
        // 处理登录逻辑
        console.log("登录信息:", { username, password, rememberPassword })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            {/* 登录框 */}
            <div className="w-full max-w-md">
                {/* Logo和标题 */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-medium">登录</h1>
                </div>

                {/* 登录表单 */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        {/* 用户名输入框 */}
                        <div className="space-y-2">
                            <label className="block text-sm text-gray-600">
                                用户名 <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder=""
                                className="w-full"
                            />
                        </div>

                        {/* 密码输入框 */}
                        <div className="space-y-2">
                            <label className="block text-sm text-gray-600">
                                密码 <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder=""
                                className="w-full"
                            />
                        </div>

                        {/* 记住密码选项 */}
                        <div className="flex items-center">
                            <Checkbox
                                id="remember"
                                checked={rememberPassword}
                                onCheckedChange={(checked) => setRememberPassword(checked as boolean)}
                                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                                记住密码
                            </label>
                        </div>

                        {/* 登录按钮 */}
                        <Button
                            onClick={handleLogin}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                        >
                            登录
                        </Button>
                    </form>
                </div>

                {/* 版权信息 */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    Copyright © {" "}
                    <Link href="/" className="text-gray-600 underline">
                        Model Hub
                    </Link>{" "}
                    {new Date().getFullYear()}.
                </div>
            </div>
        </div>
    )
}