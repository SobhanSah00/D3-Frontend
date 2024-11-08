'use client'

import { useState, useCallback } from 'react'
import { Upload } from 'lucide-react'
import ShimmerThumbnail from './Thumbnail'

export default function VideoUploader() {
  const [videoFile, setVideoFile] = useState(null)
  const [videoPreview, setVideoPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [thumbnailUrl, setThumbnailUrl] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = useCallback((file) => {
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file)
      setVideoPreview(URL.createObjectURL(file))
      setThumbnailUrl(null)
    } else {
      alert('Please upload a video file')
    }
  }, [])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragEnter = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }, [handleFile])

  const handleUpload = useCallback((event) => {
    const file = event.target.files?.[0]
    handleFile(file)
  }, [handleFile])

  const handleGenerateThumbnails = async () => {
    if (!videoFile) return
    setLoading(true)
    setThumbnailUrl(null)
    // Simulating API call delay
    setTimeout(() => {
      setThumbnailUrl('/api/placeholder/640/360')
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="space-y-6">
        {/* Upload section */}
        <div
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center transition-colors
            ${isDragging 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
            }
          `}
        >
          <input
            type="file"
            accept="video/*"
            onChange={handleUpload}
            className="hidden"
            id="video-upload"
          />
          <label
            htmlFor="video-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <div className={`
              mb-4 p-4 rounded-full transition-colors
              ${isDragging ? 'bg-blue-100' : 'bg-blue-50'}
            `}>
              <Upload 
                className={`w-8 h-8 ${isDragging ? 'text-blue-600' : 'text-blue-500'}`}
              />
            </div>
            <p className="text-lg font-medium text-gray-900">
              {isDragging ? 'Drop your video here' : 'Drop your video here or click to browse'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Only video files are supported
            </p>
          </label>
        </div>

        {/* Preview section */}
        {videoPreview && (
          <div className="space-y-4">
            <video
              src={videoPreview}
              controls
              className="w-full rounded-lg"
              onLoadedData={() => URL.revokeObjectURL(videoPreview)}
            />
            <button
              onClick={handleGenerateThumbnails}
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Thumbnails"}
            </button>
          </div>
        )}

        {/* Generated thumbnail or loading state */}
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900">
            {loading ? "Generating Thumbnail..." : thumbnailUrl ? "Generated Thumbnail" : ""}
          </h3>
          {loading && <ShimmerThumbnail />}
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt="Generated Thumbnail"
              className="w-full rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  )
}