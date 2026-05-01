import React, { useState } from 'react'
import axios from 'axios'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!file) {
      alert("Please select an image")
      return
    }

    const formData = new FormData()
    formData.append("image", file)
    formData.append("caption", e.target.caption.value)

    setLoading(true)

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/create-post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      e.target.reset()
      setFile(null)
      navigate("/feed")
    } catch (err) {
      console.log(err)
      alert("Error Creating Post")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#f0f2f5] px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div className="mb-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/feed")}
            aria-label="Back to feed"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-[#4a90a4] shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:border-[#4a90a4] hover:bg-[#f3f8fa]"
          >
            <FiArrowLeft />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Create Post</h1>
            <p className="mt-1 text-sm text-gray-500">Share a photo and caption, or go back to the feed.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-800">Cover Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
              className="w-full rounded-xl border border-gray-300 bg-[#eef1f6] px-3 py-2.5 text-sm text-gray-700 cursor-pointer file:mr-3 file:rounded-lg file:border file:border-gray-300 file:bg-white file:px-3 file:py-1 file:text-sm file:text-gray-700 file:cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-800">Caption</label>
            <textarea
              name="caption"
              placeholder="Write your caption here..."
              required
              rows="6"
              className="w-full resize-y rounded-xl border border-gray-300 bg-[#eef1f6] px-3 py-2.5 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-[#4a90a4] focus:ring-1 focus:ring-[#4a90a4]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-xl border-none bg-[#4a90a4] py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#3d7a8c] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Publish"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost
