import MainLayout from './components/layouts/MainLayout'
import VideoUploader from './components/VideoUploader'

export default async function Home() {
  return (
    <MainLayout>
      <VideoUploader />
    </MainLayout>
  )
}