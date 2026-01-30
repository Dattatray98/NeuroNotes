import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SidebarProps {
  tabs: { label: string; icon: React.ElementType }[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tabs, activeTab, setActiveTab }) => {
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -250, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.4
        }}
        className="w-[24%] min-h-[83vh] p-4 border-r-2 border-gray-200"
      >
        <div className="flex flex-col gap-2">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                onClick={() => handleTabClick(index)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-md transition ${activeTab === index
                  ? "bg-blue-100 text-gray-800 font-medium border-l-4 border-gray-800 shadow-md"
                  : "text-gray-700 font-medium hover:bg-gray-100"
                  }`}
              >
                <Icon className="h-6 w-6" />
                {tab.label}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;