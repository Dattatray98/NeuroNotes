import { Request, Response } from "express";
import { removeUploadedFile, upload } from "../middlewares/upload.middleware";
import cloudinary from "../config/Cloudinary.config";
import { GenerateSummary } from "../config/SummaryModel.config";
import { AsKToNeo, NeoModel } from "../config/NeoModel.config";

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

            if (ml_response) {
                console.log("ml response recieved");
            };

            const fullPrompt = `
            SYSTEM ROLE:
You are a STRICT information extraction engine.
You are NOT a chatbot.
You are NOT an assistant.
You do NOT explain, summarize, or add information.

TASK:
Extract structured data EXACTLY as it appears in the text.
DO NOT infer, rephrase, or invent anything.

CRITICAL RULES:
- If a field is not explicitly present, set its value to null.
- DO NOT generate descriptions, learning outcomes, assessments, or instructors unless they appear verbatim.
- DO NOT explain your reasoning.
- DO NOT include any text outside JSON.
- DO NOT include markdown.
- DO NOT include comments.
- DO NOT add headings.
- Output MUST be valid JSON only.

FAILURE CONDITION:
If you violate ANY rule above, your output is considered INVALID.

OUTPUT SCHEMA (must match exactly):

{
  "courses": [
    {
      "course_code": string | null,
      "course_name": string | null,
      "course_type": "theory" | "lab" | null,
      "units": [
        {
          "unit_number": string,
          "unit_title": string | null,
          "topics": [string]
        }
      ]
    }
  ]
}

INSTRUCTIONS:
- Detect ALL courses in the text.
- For theory courses, extract units and topics.
- For lab courses, set "units": [].
- Preserve original wording.
- Use the text ONLY.

TEXT TO ANALYZE:`+ ml_response.text

            const summary = await NeoModel(fullPrompt);

            if (summary) {
                console.log("summary recieved");
            }

            return res.status(200).json({
                secure_url: cloudinaryResponse.secure_url,
                public_id: cloudinaryResponse.public_id,
                message: "File uploaded successfully",
                summary: summary
            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

] 
