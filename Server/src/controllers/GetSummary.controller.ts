import { Request, Response } from "express";
import { removeUploadedFile, upload } from "../middlewares/upload.middleware";
import cloudinary from "../config/Cloudinary.config";
import { GenerateSummary } from "../config/SummaryModel.config";

export const GetSummary = [
    upload.single('file'),
    async (req: Request, res: Response) => {
        try {
            const file = req.file;
            if (file) {
                console.log("file recieved and processing upload to cloudinary", file.path);
            }

            const cloudinaryResponse = await cloudinary.uploader.upload(file?.path || "", {
                resource_type: "raw",
                folder: "NeuroNotes/Summaries"
            });

            if (cloudinaryResponse) {
                console.log("uploaded to cloudinary");
                removeUploadedFile(file?.path || "");
            } else {
                console.log("cloudinary upload failed");
            }


            const ml_response = await GenerateSummary(cloudinaryResponse.secure_url, req.file?.originalname);

            console.log(ml_response);


            return res.status(200).json({
                secure_url: cloudinaryResponse.secure_url,
                public_id: cloudinaryResponse.public_id,
                message: "File uploaded successfully",
            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

] 
