const Imagekit = require("@imagekit/nodejs")

const imageKit = new Imagekit({

    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
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