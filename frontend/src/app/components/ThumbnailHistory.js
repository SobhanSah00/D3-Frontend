'use client'

export default function ThumbnailHistoryItem({ daysAgo }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition cursor-pointer">
      <div className="w-full aspect-video bg-gray-200 rounded-md mb-2" />
      <p className="text-sm text-gray-600">Generated {daysAgo} days ago</p>
    </div>
  )
}