import axios from "axios";
import { useState } from "react";
import type { ChatMessage } from "../../types/Chat.types";


const messages: ChatMessage[] = [];

export const useAskNeo = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const Generate = async (prompt: string) => {

        try {
            setLoading(true);
            console.log("Generating response")
            console.log(prompt)
            messages.push({ role: "user", content: prompt })

            const finalPrompt = messages.map(msg => `${msg.role} : ${msg.content}`).join("\n") + `new prompt : ${prompt}`

            const response = await axios.post(`http://localhost:3000/ask`,
                null,
                {
                    params: {
                        prompt: finalPrompt
                    }
                }
            );

            messages.push({ role: "assistant", content: response.data.result });
            console.log(response.data.result);

            console.log(messages)
            return response.data.result;

        } catch (err) {
            setError("got some error");
            console.log(err);
        } finally {
            setLoading(false);
            console.log("response generated")
        }
    }

    return { Generate, messages, loading, error };

}