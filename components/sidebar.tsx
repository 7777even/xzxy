'use client'

import { ChevronDown, ChevronLeft, ExternalLink, Menu } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation' // 引入 usePathname
import { useState } from "react"

export function Sidebar() {
  const [openMenus, setOpenMenus] = useState({
    modelTraining: true,
    deployment: true,
    demo: true,
    userGuide: true
  })

  const [isOpen, setIsOpen] = useState(true)

  const pathname = usePathname() // 获取当前页面路径

  const toggleMenu = (menuKey: keyof typeof openMenus) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }))
  }

  // 判断是否为当前菜单路径
  const isActive = (menuHref: string) => pathname === menuHref

  return (

    <div className={`${isOpen ? 'w-60' : 'w-0'}  border-r bg-white overflow-hidden`}>
      <nav className="flex flex-col">
        {/* 顶部标题 */}
        <div className="border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold hover:text-blue-500">服务中心</h2>
          {/* 侧边栏隐藏时的菜单按钮 */}
          {!isOpen && (
            <div className="w-12 border-r bg-white">
              <button
                onClick={() => setIsOpen(true)}
                className="fixed left-2 top-[74px] p-2 bg-gray-700 rounded-full shadow-md hover:bg-gray-600"
                aria-label="展开侧边栏"
              >
                <Menu className="h-5 w-5 text-white" />
              </button>

            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft
              className={`h-5 w-5 transition-transform ${isOpen ? '' : '-rotate-180'}`}
            />
          </button>
        </div>
        {/* 菜单列表 */}
        <div className="flex flex-col p-2">
          {/* 模型训练服务 */}
          <div className="flex flex-col">
            <div
              className="flex items-center gap-2 rounded-lg p-2 cursor-pointer hover:text-blue-500"
              onClick={() => toggleMenu('modelTraining')}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${!openMenus.modelTraining ? '-rotate-90' : ''}`}
              />
              <span className="font-medium">模型训练服务</span>
            </div>
            {openMenus.modelTraining && (
              <Link
                href="/model-training"
                className={`flex items-center gap-2 rounded-lg p-2 pl-8 text-sm hover:text-blue-500 ${isActive('/model-training') ? '!text-blue-500 font-semibold' : ''
                  }`}
              >
                <span>模型训练</span>
              </Link>
            )}
          </div>

          {/* 模型部署 */}
          <div className="flex flex-col">
            <div
              className="flex items-center gap-2 rounded-lg p-2 cursor-pointer hover:text-blue-500"
              onClick={() => toggleMenu('deployment')}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${!openMenus.deployment ? '-rotate-90' : ''}`}
              />
              <span className="font-medium">模型部署</span>
            </div>
            {openMenus.deployment && (
              <Link
                href="/deployment-notes"
                className={`flex items-center gap-2 rounded-lg p-2 pl-8 text-sm hover:text-blue-500 ${isActive('/deployment-notes') ? '!text-blue-500 font-semibold' : ''
                  }`}
              >
                <span>部署节点</span>
              </Link>
            )}
          </div>

          {/* 演示 */}
          <div className="flex flex-col">
            <div
              className="flex items-center gap-2 rounded-lg p-2 cursor-pointer hover:text-blue-500"
              onClick={() => toggleMenu('demo')}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${!openMenus.demo ? '-rotate-90' : ''}`}
              />
              <span className="font-medium">演示</span>
            </div>
            {openMenus.demo && (
              <Link
                href="/chat"
                className={`flex items-center gap-2 rounded-lg p-2 pl-8 text-sm hover:text-blue-500 ${isActive('/chat') ? '!text-blue-500 font-semibold' : ''
                  }`}
              >
                <span>Chat</span>
              </Link>
            )}
          </div>

          {/* 使用说明 */}
          <div className="flex flex-col">
            <div
              className="flex items-center gap-2 rounded-lg p-2 cursor-pointer hover:text-blue-500"
              onClick={() => toggleMenu('userGuide')}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${!openMenus.userGuide ? '-rotate-90' : ''}`}
              />
              <span className="font-medium">使用说明</span>
            </div>
            {openMenus.userGuide && (
              <Link
                href="/user-guide"
                className={`flex items-center gap-2 rounded-lg p-2 pl-8 text-sm hover:text-blue-500 ${isActive('/user-guide') ? '!text-blue-500 font-semibold' : ''
                  }`}
              >
                <span>使用说明</span>
                <ExternalLink className="h-3 w-3" />
                <span className="text-xs bg-green-500 text-white px-1 py-0.5 rounded-lg">必选</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

