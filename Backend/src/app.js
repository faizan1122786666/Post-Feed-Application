const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service.js")
const postModel = require("./models/post.model.js")
const cors = require('cors')

const app = express()
// app.use(cors())
// app.use(cors({
//   origin: "*"
// }))
app.use(cors({
  origin: [
    "https://postbyme.me",
    "https://www.postbyme.me",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
  ],
  credentials: true
}));
app.use(express.json())

const upload = multer({
    storage: multer.memoryStorage()
})

app.post("/create-post", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image file is required" })
        }

        const result = await uploadFile(req.file.buffer)

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "Post Created Successfully",
            post
        })
    } catch (err) {
        console.error("Error creating post:", err)
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        })
    }
})

app.get("/posts", async (req, res) => {
    const posts = await postModel.find().sort({ createdAt: -1 })
    return res.status(200).json({
        message: "Post fetched Successfully",
        posts
    })
})

app.delete("/posts/:id", async (req, res) => {
    try {
        const deletedPost = await postModel.findByIdAndDelete(req.params.id)

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        return res.status(200).json({
            message: "Post deleted successfully"
        })
    } catch (err) {
        console.error("Error deleting post:", err)
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        })
    }
})

module.exports = app
