import axios from "axios";
import { Request, Response } from "express";


export const AsKToNeo = async (req: Request, res: Response) => {
    try {
        const prompt = req.query.prompt;

        console.log(prompt)

        const response = await axios.post("http://127.0.0.1:8001/askneo",
            {
                prompt: prompt
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        return res.status(200).json({
            result: response.data[0]
        });

    } catch (err) {
        // console.log(err)
    }
}


export const NeoModel = async (prompt: string) => {
    const response = await axios.post("http://127.0.0.1:8001/askneo",
        {
            prompt: prompt
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    return response.data[0]

}