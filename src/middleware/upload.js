const multer = require("multer");

const upload = multer({
    // dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            cb(new Error('Please upload jpg, jpeg or png'))
        }
        cb(undefined,true)
    }
})

module.exports = upload