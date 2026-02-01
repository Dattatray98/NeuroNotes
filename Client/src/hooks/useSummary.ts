import { useState } from "react";
import { useAxios } from "./useAxios"

export const useSummary = () => {
    const [summary, setSummary] = useState();

    const api = useAxios();

    const GetSummary = async (file: File) => {

        const formData = new FormData();
        formData.append("file", file);

        const response = await api.post("/summary", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        console.log("Summary response: ", response.data);
        setSummary(response.data.summary)
        return response.data;
    }


    return { GetSummary, summary }
}