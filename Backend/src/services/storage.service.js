const Imagekit = require("@imagekit/nodejs")

// const imageKit = new Imagekit({

//     privateKey: process.env.IMAGEKIT_PRIVATE_KEY
// })
const imageKit = new Imagekit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})



async function uploadFile(file) {

    const result = await imageKit.files.upload({
        // file: Buffer.toString("base64"),
        file: file.toString("base64"), 
        fileName: "image.jpg"
    })

    return result;
}

module.exports = uploadFile