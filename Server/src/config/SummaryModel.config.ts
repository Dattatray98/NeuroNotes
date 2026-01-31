import axios from "axios";
import { Request, Response } from "express";
import { url } from "node:inspector";

export const GenerateSummary = async (url: string, filename:any) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/summary", {
            url: url,
            filename: filename
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data;

    } catch (err) {
        console.log(err);
    }
}