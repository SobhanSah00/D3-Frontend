'use client'

export default function ShimmerThumbnail() {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <div className="pb-[56.25%]" /> 
      <div className="absolute inset-0 bg-gray-200">
        <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="space-y-4 w-1/3">
          <div className="h-3 bg-gray-300 rounded animate-pulse" />
          <div className="h-3 bg-gray-300 rounded animate-pulse w-2/3 mx-auto" />
        </div>
      </div>
    </div>
  )
}