import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";


const SettingTab = () => {
    const [enabled, setEnabled] = useState(false);
    const [open, setOpen] = useState(false);


    return (
        <div className="">
            <h1 className="text-[#111118] tracking-light text-[32px] font-bold leading-tight min-w-72">Settings</h1>
            <h1 className="border-b-2 border-gray-300 mr-5 mt-1 mb-4"></h1>
            <div className="overflow-y-scroll max-h-[78vh]">
                <div className="mt-6 p-5">
                    <h1 className="text-gray-700 text-[20px] font-bold leading-tight tracking-[-0.015em] pb-2">Preferences</h1>
                    <h1 className="border-b mb-4 border-gray-300"></h1>
                    <div className="px-20 ">
                        <div className="flex items-center justify-between p-1 mt-6">
                            <p className="text-[#23232a] text-[15px] font-medium">Dark Mode</p>
                            <button
                                onClick={() => setEnabled(!enabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${enabled ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                                        }`}
                                ></span>
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-1 mt-6">
                            <p className="text-[#23232a] text-[15px] font-medium">Email Notification</p>
                            <button
                                onClick={() => setEnabled(!enabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${enabled ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                                        }`}
                                ></span>
                            </button>
                        </div>


                        <div className="flex items-center justify-between p-1 mt-6">
                            <p className="text-[#23232a] text-[15px] font-medium">Push Notification</p>
                            <button
                                onClick={() => setEnabled(!enabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${enabled ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                                        }`}
                                ></span>
                            </button>
                        </div>


                        <div className="flex items-center justify-between p-1 mt-6">
                            <p className="text-[#23232a] text-[15px] font-medium">Ai Behavior</p>
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-2 px-[9px] bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm font-medium transition"
                            >
                                <FiChevronRight
                                    className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="flex justify-end px-3">
                            {open && (
                                <div className="mt-2 rounded-lg bg-white shadow-lg border border-gray-300 p-2 flex">
                                    <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                        Normal
                                    </button>
                                    <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                        Balanced
                                    </button>
                                    <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                        Advanced
                                    </button>
                                </div>
                            )}
                        </div>


                    </div>
                </div>


                <div className="mt-6 p-5">
                    <h1 className="text-gray-700 text-[20px] font-bold leading-tight tracking-[-0.015em] pb-2">Data Management</h1>
                    <h1 className="border-b mb-4 border-gray-300"></h1>
                    <div className="px-20 ">
                        <div className="flex items-center justify-between p-1 mt-6">
                            <p className="text-[#23232a] text-[15px] font-medium">Export Data</p>
                            <button
                                onClick={() => setEnabled(!enabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${enabled ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                                        }`}
                                ></span>
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-1 mt-6">
                            <p className="text-[#23232a] text-[15px] font-medium">Clear Chat Histroy</p>
                            <button
                                onClick={() => setEnabled(!enabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${enabled ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                                        }`}
                                ></span>
                            </button>
                        </div>

                        <div className="flex items-center justify-between p-1 mt-6">
                            <p className="text-[#23232a] text-[15px] font-medium">Connected Accounts</p>
                            <button
                                className="flex items-center gap-2 px-[9px] bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm font-medium transition"
                            >
                                <FiChevronRight
                                    onClick={() => setOpen(!open)}
                                    className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="p-1">
                            {open && (
                                <div className="mt-2 w-full rounded-lg bg-white shadow-lg border border-gray-300 p-2">
                                    <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                        Normal
                                    </button>
                                    <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                        Balanced
                                    </button>
                                    <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                        Advanced
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                <div className="mt-6 p-5">
                    <h1 className="text-gray-700 text-[20px] font-bold leading-tight tracking-[-0.015em] pb-2">Support & About</h1>
                    <h1 className="border-b mb-4 border-gray-300"></h1>
                    <div>
                        <div className="px-20">
                            <div className="flex items-center justify-between p-1 mt-6">
                                <p className="text-[#23232a] text-[15px] font-medium">About</p>
                                <button
                                    className="flex items-center gap-2 px-[9px] bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm font-medium transition"
                                >
                                    <FiChevronRight
                                        onClick={() => setOpen(!open)}
                                        className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="p-1">
                                {open && (
                                    <div className="mt-2 w-full rounded-lg bg-white shadow-lg border border-gray-300 p-2">
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Normal
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Balanced
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Advanced
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between p-1 mt-6">
                                <p className="text-[#23232a] text-[15px] font-medium">Terms & Conditions</p>
                                <button
                                    className="flex items-center gap-2 px-[9px] bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm font-medium transition"
                                >
                                    <FiChevronRight
                                        onClick={() => setOpen(!open)}
                                        className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="p-1">
                                {open && (
                                    <div className="mt-2 w-full rounded-lg bg-white shadow-lg border border-gray-300 p-2">
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Normal
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Balanced
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Advanced
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between p-1 mt-6">
                                <p className="text-[#23232a] text-[15px] font-medium">Contact Support</p>
                                <button
                                    className="flex items-center gap-2 px-[9px] bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm font-medium transition"
                                >
                                    <FiChevronRight
                                        onClick={() => setOpen(!open)}
                                        className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="p-1">
                                {open && (
                                    <div className="mt-2 w-full rounded-lg bg-white shadow-lg border border-gray-300 p-2">
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Normal
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Balanced
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Advanced
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between p-1 mt-6">
                                <p className="text-[#23232a] text-[15px] font-medium">Privacy Policy</p>
                                <button
                                    className="flex items-center gap-2 px-[9px] bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm font-medium transition"
                                >
                                    <FiChevronRight
                                        onClick={() => setOpen(!open)}
                                        className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="p-1">
                                {open && (
                                    <div className="mt-2 w-full rounded-lg bg-white shadow-lg border border-gray-300 p-2">
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Normal
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Balanced
                                        </button>
                                        <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                                            Advanced
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingTab
