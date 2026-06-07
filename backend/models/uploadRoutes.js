const express = require("express");
const router = express.Router();

const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const { CloudinaryStorage } =
require("multer-storage-cloudinary");

const storage =
new CloudinaryStorage({

  cloudinary,

  params: {
    folder: "lost-found",
    allowed_formats: ["jpg","png","jpeg"]
  }

});

const upload = multer({
  storage
});

router.post(
  "/",
  upload.single("image"),
  async (req,res)=>{

    res.json({
      imageUrl:req.file.path
    });

  }
);

module.exports = router;