"use client";
import { useRouter } from "next/navigation"

export default function VideosRoute({ params } : { params: any }) {
  const router = useRouter()
  return (
    <div>
      <h1>Video ID: {params.videoId}</h1>
      <button onClick={() => router.back()}>Back</button>
    </div>


  )
}
