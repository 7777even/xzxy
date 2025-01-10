'use client'

import { Settings, Bell, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { useRouter } from 'next/navigation' // 添加路由导航hook
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const router = useRouter() // 初始化路由

  // 处理退出登录
  const handleLogout = () => {
    // 这里可以添加清除用户登录状态的逻辑
    // 比如清除 localStorage、cookies 等

    // 关闭用户菜单
    setIsUserMenuOpen(false)

    // 跳转到登录页
    router.push('/login')
  }

  return (
    <header className="flex h-14 items-center justify-between border-b bg-[#1a2234] px-6">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[90px] h-[30px]"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Settings className="h-5 w-5" />
        </Button>

        {/* 用户菜单 */}
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isUserMenuOpen ? 'text-blue-400' : 'text-gray-400 hover:text-white'
              }`}
          >
            <img src="/user.png" alt="" className='w-4 h-4' />
            <span>demo_user@default</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isUserMenuOpen ? 'rotate-180 text-blue-400' : ''
              }`} />
          </button>

          {/* 下拉菜单 */}
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1a2234] border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="py-1">
                <button
                  className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                  onClick={() => {
                    setIsUserMenuOpen(false)
                  }}
                >
                  <span>配置</span>
                </button>
                <button
                  className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                  onClick={handleLogout} // 修改这里，使用新的处理函数
                >
                  <span>退出登录</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}