// components/Tabs/AiChat.tsx
import { useState } from "react";
import { IoSparklesOutline } from "react-icons/io5";
import { useAskNeo } from "../../hooks/useAskNeo";
import AIChatMessage from "../TabComponents/AIChatMessage";

const AIchatTab = () => {
    // const [messages] = useState<string | null>(null)
    const [input, setInput] = useState("");



    const { Generate, messages } = useAskNeo();

    const sendMessage = () => {
        if (!input.trim()) return;

        Generate(input)
        setInput("");


    };

    // Scroll to bottom when messages change


    return (
        <div className="flex flex-col h-full bg-white rounded-xl p-4 ">
            {/* Chat Header */}
            <div className="flex items-center border-b pb-2 mb-2 gap-2">
                <IoSparklesOutline className="h-5 w-5" />
                <h2 className="text-xl font-medium text-black">Ask Neo</h2>
            </div>

            {/* Chat Messages */}
            <div className="min-h-[70vh] max-h-[70vh] w-full flex justify-center">
                <AIChatMessage messages={messages} />
            </div>

            {/* Input */}
            <div className="w-full flex justify-center bo">
                <div className="flex gap-2 w-[80vh]">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && sendMessage()}
                        placeholder="Type your message..."
                        className="flex-1  border border-gray-300 rounded-xl p-2 outline-none focus:ring-2 focus:ring-[#786cf9] font-medium"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-gray-300 hover:text-white font-medium px-4 py-2 rounded-xl hover:bg-[#786cf9] transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIchatTab;
