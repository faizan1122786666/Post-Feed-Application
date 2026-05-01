import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
  const navigate = useNavigate()
  const [posts, setposts] = useState([
    {
      _id: "1",
      image: "https://picsum.photos/600/400",
      caption: "Beautiful Scene"
    }
  ])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/posts`)
      .then((res) => {
        setposts(res.data.posts)
      })
  }, [])

  const handleButton = async () => {
    navigate('/create-post')
  }

  return (
    <section className='flex flex-col items-center min-h-screen w-full bg-[#f0f2f5] px-4 py-10'>
      <div className='w-full max-w-2xl flex items-center justify-between mb-6'>
        <h1 className='text-[#4a90a4] font-bold text-2xl'>Fee<span className='font-bold text-black'>d.</span></h1>
        <button
          onClick={handleButton}
          className='bg-[#4a90a4] hover:bg-[#3d7a8c] text-white font-bold text-sm px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200'
        >
          Create Post
        </button>
      </div>

      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='w-full max-w-2xl bg-white rounded-lg border border-gray-300 px-5 pt-5 pb-5 mb-5 transition-shadow duration-200 hover:shadow-lg'>
            <img src={post.image} alt={post.caption} className='w-full rounded-lg object-cover' />

            <p className='mt-3 px-4 text-sm text-gray-700 leading-relaxed'>
              <span className='font-semibold text-gray-800 mr-1.5'>Caption :</span>
              {post.caption}
            </p>
          </div>
        ))
      ) : (
        <div className='w-full max-w-2xl bg-white rounded-lg border border-gray-300 p-10 text-center'>
          <p className='text-xl text-gray-400 mb-2'>No image</p>
          <h3 className='text-lg font-semibold text-gray-600'>No Posts Available</h3>
          <p className='text-sm text-gray-400 mt-1'>Be the first to share something!</p>
        </div>
      )}
    </section>
  )
}

export default Feed
