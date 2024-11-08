'use client'

import { History, X } from 'lucide-react'
import ThumbnailHistoryItem from '../components/ThumbnailHistory'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-white shadow-lg transition-transform duration-200 ease-in-out z-20 pt-16`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-blue-600" />
          <h2 className="font-semibold">Thumbnail History</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-lg"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4 space-y-4">
        {[1, 2, 3].map((item) => (
          <ThumbnailHistoryItem key={item} daysAgo={item} />
        ))}
      </div>
    </div>
  )
}
