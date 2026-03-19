import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const naviagte = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault;

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/create-post",formData)
    .then((res)=>{

      naviagte("/feed")
      // alert("Post Created Successfully")
      // e.target.reset()
    })
    .catch((err)=>{
      console.log(err)
     alert("Error Creating Post")
    })

  }



  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-[#f0f2f5] px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg border border-gray-300 p-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Post</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-800">Cover Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-3 py-2.5 bg-[#eef1f6] border border-gray-300 rounded text-sm text-gray-700 cursor-pointer file:mr-3 file:py-1 file:px-3 file:border file:border-gray-300 file:rounded file:bg-white file:text-sm file:text-gray-700 file:cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-800">Caption</label>
            <textarea
              name="caption"
              placeholder="Write your caption here..."
              required
              rows="6"
              className="w-full px-3 py-2.5 bg-[#eef1f6] border border-gray-300 rounded text-sm text-gray-700 placeholder:text-gray-400 outline-none resize-y focus:border-[#4a90a4] focus:ring-1 focus:ring-[#4a90a4] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4a90a4] hover:bg-[#3d7a8c] text-white font-semibold text-base py-3 rounded border-none cursor-pointer transition-colors duration-200"
          >
            Publish
          </button>

        </form>
      </div>
    </section>
  )
}

export default CreatePost