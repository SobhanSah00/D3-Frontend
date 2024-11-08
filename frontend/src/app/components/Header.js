'use client'

import React from 'react'
import { Menu } from 'lucide-react'
import UserMenu from '@/components/UserMenu'

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold text-blue-600">ThumbCraft</h1>
        </div>
        <UserMenu />
      </div>
    </header>
  )
}