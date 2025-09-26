# React functions

1. What it is

In React, the map() function is commonly used to loop through an array of data and render multiple components dynamically instead of writing them one by one.


2. How it works

Suppose you have an array of tab names. You use map() to generate <button> or <Tab> components for each item.

<!--        

            import React, { useState } from "react";

            const TabsExample: React.FC = () => {
            // Tabs data
            const tabs = ["Home", "About", "Services", "Contact"];

            // Active tab state
            const [activeTab, setActiveTab] = useState(0);

            return (
                <div className="p-4">
                {/* Tab buttons generated using map */}
                <div className="flex gap-4 border-b pb-2">
                    {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 ${
                        activeTab === index
                            ? "border-b-2 border-blue-500 font-semibold"
                            : "text-gray-500"
                        }`}
                    >
                        {tab}
                    </button>
                    ))}
                </div>

                {/* Tab content */}
                <div className="mt-4">
                    {activeTab === 0 && <p>Welcome to Home!</p>}
                    {activeTab === 1 && <p>About us section.</p>}
                    {activeTab === 2 && <p>Our services listed here.</p>}
                    {activeTab === 3 && <p>Contact us form.</p>}
                </div>
                </div>
            );
            };

            export default TabsExample; 

-->
