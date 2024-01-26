import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOncloudinary = async (localStorage) => {
  try {
    if (!localStorage) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localStorage,
      {
        resource_type: "auto"
      }
    )

    console.log("file uploaded successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localStorage);
    return null;
  }
}


export {uploadOncloudinary};