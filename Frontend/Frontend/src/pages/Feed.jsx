import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setposts] = useState([
        {
            _id: "1",
            image: "https://picsum.photos/600/400",
            caption: "Beautiful Scene"
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            
            setposts(res.data.posts)

        })

    },[])


    return (
        <section className='flex flex-col items-center min-h-screen w-full bg-[#f0f2f5] px-4 py-10'>



            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='w-full max-w-2xl bg-white rounded-lg border border-gray-300 p-6 mb-5 transition-shadow duration-200 hover:shadow-lg'>

                        <img src={post.image} alt={post.caption} className='w-full rounded-lg object-cover' />

                        <p className='mt-3 text-sm text-gray-700 leading-relaxed'>
                            <span className='font-semibold text-gray-800 mr-1.5'>Caption :</span>
                            {post.caption}
                        </p>

                    </div>
                ))
            ) : (
                <div className='w-full max-w-2xl bg-white rounded-lg border border-gray-300 p-10 text-center'>
                    <p className='text-xl text-gray-400 mb-2'>📷</p>
                    <h3 className='text-lg font-semibold text-gray-600'>No Posts Available</h3>
                    <p className='text-sm text-gray-400 mt-1'>Be the first to share something!</p>
                </div>
            )}
        </section>
    )
}

export default Feed