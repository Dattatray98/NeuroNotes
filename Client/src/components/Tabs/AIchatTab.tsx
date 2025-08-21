// components/Tabs/AiChat.tsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LuBrainCircuit } from "react-icons/lu";

const AIchatTab = () => {
    const [messages, setMessages] = useState<{ user: boolean; text: string }[]>([]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { user: true, text: input }]);
        const userInput = input;
        setInput("");

        // Simulate AI response after delay
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                { user: false, text: `AI Response to: "${userInput}"` },
            ]);
        }, 800);
    };

    // Scroll to bottom when messages change
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col h-full bg-white rounded-xl p-4">
            {/* Chat Header */}
            <div className="flex items-center border-b pb-2 mb-2 gap-2">
                <LuBrainCircuit className="h-7 w-7 bg-gray-200 p-1 rounded-full"/>
                <h2 className="text-lg font-medium text-black">AI Chat</h2>
            </div>

            {/* Chat Messages */}
            <div className="flex justify-center h-full overflow-y-auto ">
                <div className="flex-1 max-w-[110vh] mb-4 space-y-3 p-2">
                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`flex ${msg.user ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`px-4 py-2 rounded-xl max-w-[70%] ${msg.user
                                    ? "bg-gray-200 text-black"
                                    : "bg-gray-200 text-black"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                    <div ref={chatEndRef} />
                </div>
            </div>

            {/* Input */}
            <div className="w-full flex justify-center">
                <div className="flex gap-2 w-[80vh]">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && sendMessage()}
                        placeholder="Type your message..."
                        className="flex-1  border border-gray-300 rounded-xl p-2 outline-none focus:ring-2 focus:ring-[#786cf9]"
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
