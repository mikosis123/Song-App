// Import cloudinary SDK
import cloudinary from "./Cloudary.js";

// Async function to upload files to Cloudinary
const cloudinaryImage = async (req, res) => {
  try {
    // Extract the file from the request
    const file = req.file;

    // Check if the file exists
    if (!file) {
      return res.status(400).json({ message: "File not found" });
    }

    // Extract the original file name
    const fileName = file.originalname.split(".")[0];

    // Upload the file to Cloudinary server
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto", // Auto-detect resource type
      public_id: `ImageurlTutorial/${fileName}`, // Set public ID for better organization
    });

    // Return the upload result from Cloudinary
    return uploadResult;
  } catch (error) {
    console.error(error);
    // Return an error response if uploading fails
    return res
      .status(400)
      .json({ message: "Error uploading file to Cloudinary" });
  }
};

export default cloudinaryImage;
