import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaFolderOpen } from "react-icons/fa";
import { MdSummarize } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiChatSmileAiLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiChat, Home, Settings, Upload } from "../components/Tabs";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [
        { label: "My Docs", icon: FaFolderOpen, content: <Home setActiveTab={setActiveTab} /> },
        { label: "Upload", icon: MdOutlineFileUpload, content: <Upload /> },
        { label: "Ai Chat", icon: RiChatSmileAiLine, content: <AiChat /> },
        { label: "Generate Summary", icon: MdSummarize, content: <div>this is Highlights page</div> },
        { label: "Settings", icon: IoSettingsOutline, content: <Settings /> },
    ];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        // setAiChatMode(index === 2); // AI Chat mode only when AI Chat tab is clicked
    };

    return (
        <div className="w-full h-screen">
            {/* Navbar */}
            <Navbar />

            <div className="flex h-[calc(100vh-75px)]  py-4  border  border-gray-300 shadow-sm">
                {/* Sidebar */}
                <Sidebar
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={handleTabClick}
                />

                {/* Main content area */}
                    <div
                        className="flex-1 ml-4 p-4 rounded-md"
                    >
                        {tabs[activeTab].content}
                    </div>

            </div>
        </div>
    );
};

export default Dashboard;