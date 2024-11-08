'use client'

import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../SideBar'

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className={`pt-16 transition-all duration-200 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="max-w-4xl mx-auto p-6">{children}</div>
      </main>
    </div>
  )
}