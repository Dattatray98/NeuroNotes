import type React from "react";
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef } from "react";


const AIChatMessage: React.FC<any> = ({ messages }) => {
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages.length]);

    return (
        <div className="w-[80%] p-5 overflow-y-auto flex flex-col gap-5 scrollbar-hidden">
            {messages.map((item: any) => (
                <div className={`flex flex-col ${item.role === "user" ? "items-end" : "items-start"}`}>
                    {item.role === "user" ? (
                        <div className="w-[60%] rounded-xl bg-gray-100 shadow-sm px-5 py-3">
                            <h3 className="font-medium text-lg text-end">{item.content}</h3>
                        </div>
                    ) : (
                        <div className="text-gray-700 text-lg font-medium space-y-2">
                            <ReactMarkdown>
                                {item.content}
                            </ReactMarkdown>
                        </div>
                        )}
                </div>
            ))}
            <div ref={chatEndRef} />
        </div>
    )
}

export default AIChatMessage
