const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const Jimp = require("jimp");
const { User } = require("../../models/user");

const cloudinary = require('cloudinary').v2;
// const imgDir = path.join(__dirname, "../../", "public", "avatars");

require("dotenv").config();
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET
});


const updateImg = async (req, res) => {

  const { _id, food_name } = req.body;
  const { path: tempUpload, originalname } = req.file;

//   const avatarURL = path.join("avatars", filename);

//   Jimp.read(`${resultUpload}`, (err, image) => {
//     if (err) throw err;
//     image
//       .resize(250, Jimp.AUTO)
//       .quality(100)
//       .write(`${resultUpload}`);
//   });

  const responce = cloudinary.uploader.upload(tempUpload, {public_id: food_name})
responce.then((data) => {
  console.log(data);
  console.log(data.secure_url);
}).catch((err) => {
  console.log(err);
});

const url = cloudinary.url(food_name);
console.log(url);
const food_img_URL = url;

  await User.findByIdAndUpdate(_id, { food_img_URL });

  res.status(200).json({
    food_img_URL,
  });
};

module.exports = updateImg;



