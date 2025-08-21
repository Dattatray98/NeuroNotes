import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaFolderOpen, FaRegStar } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiChatSmileAiLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiChat, Home, Upload } from "../components/Tabs";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [aiChatMode, setAiChatMode] = useState(false);

    const tabs = [
        { label: "My Docs", icon: FaFolderOpen, content: <Home /> },
        { label: "Upload", icon: MdOutlineFileUpload, content: <Upload /> },
        { label: "Ai Chat", icon: RiChatSmileAiLine, content: <AiChat /> },
        { label: "Highlights", icon: FaRegStar, content: <div>Highlights of your recent activity</div> },
        { label: "Settings", icon: IoSettingsOutline, content: <div>Setting page</div> },
    ];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setAiChatMode(index === 2); // AI Chat mode only when AI Chat tab is clicked
    };

    return (
        <div className="w-full h-screen">
            {/* Navbar */}
            <div className="relative">
                <Navbar />
                {/* Animated tabs in navbar only in AI Chat mode */}
                <div className="absolute top-4 left-3/7 transform -translate-x-1/2 flex gap-4">
                    <AnimatePresence mode="wait">
                        {aiChatMode &&
                            tabs.map((tab, index) => {
                                const Icon = tab.icon;
                                return (
                                    <motion.button
                                        key={tab.label}
                                        layoutId={`tab-${index}`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                            duration: 0.3
                                        }}
                                        className={`px-4 py-2 rounded-md ${activeTab === index
                                            ? " text-black border-b rounded-xl bg-blue-100 font-medium shadow-md flex items-center gap-2"
                                            : "bg-gray-200 font-medium rounded-xl shadow-md border-b text-gray-800 flex items-center gap-2 hover:bg-blue-50"
                                            }`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {tab.label}
                                    </motion.button>
                                );
                            })}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex h-[calc(100vh-85px)] px-20 py-4 m-1 border rounded-xl border-gray-300 shadow-sm">
                {/* Sidebar */}
                <Sidebar
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={handleTabClick}
                    aiChatMode={aiChatMode}
                    setAiChatMode={setAiChatMode}
                />

                {/* Main content area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="flex-1 ml-4 p-4 rounded-md"
                    >
                        {tabs[activeTab].content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dashboard;