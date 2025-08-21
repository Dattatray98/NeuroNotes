const DatasetsTab = () => {
    return (
        <div className="p-3 overflow-y-scroll max-h-[83vh]">
            <h1 className="text-[#111118] tracking-light text-[32px] font-bold leading-tight min-w-72">Hello Dattu 👋 Ready to explore your study</h1>

            <div className="mt-5 flex gap-5 p-1 items-center px-3">
                <button
                    className="bg-gray-200 rounded-xl h-11 px-5 font-bold text-black text-[16px]
             hover:bg-[#786cf9] hover:text-white 
             transition-colors duration-300 ease-in-out"
                >
                    Upload Pdf
                </button>

                <button
                    className="bg-gray-200 rounded-xl h-11 px-5 font-bold text-[16px]
             hover:bg-[#786cf9] hover:text-white 
             transition-colors duration-300 ease-in-out"
                >
                    Ask a Question
                </button>

                <button
                    className="bg-gray-200 rounded-xl h-11 px-5 font-bold text-[16px] 
             hover:bg-[#786cf9] hover:text-white 
             transition-colors duration-300 ease-in-out"
                >
                    Generate Summary
                </button>
            </div>
            
            <div className="p-1 mt-10 ">
                <h1 className="text-[#111118] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Stats</h1>
                <div className="px-2 py-4 flex items-center gap-5">
                    <div className=" border h-30 w-58 rounded-xl p-6 hover:shadow-md border-gray-200">
                        <h1 className="text-lg text-black font-medium ">Document Uploaded</h1>
                    </div>
                    <div className=" border h-30 w-58 rounded-xl p-6 hover:shadow-md border-gray-200">
                        <h1 className="text-lg text-black font-medium ">Summaries Generated</h1>
                    </div>

                    <div className=" border h-30 w-58 rounded-xl p-6 hover:shadow-md border-gray-200">
                        <h1 className="text-lg text-black font-medium ">Insights Saved</h1>
                    </div>

                    <div className=" border h-30 w-58 rounded-xl p-6 hover:shadow-md border-gray-200">
                        <h1 className="text-lg text-black font-medium ">Time Saved</h1>
                    </div>
                </div>
            </div>


            <div className="p-1 mt-10">
                <h1 className="text-[#111118] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Recent Activities</h1>
                <div className="px-1 py-2">
                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl">
                        <div className="border h-12 w-12 rounded-xl border-gray-200"> 
                        </div>
                        <div className="px-3">
                        <h1 className="text-lg text-gray-900 font-medium">AI Ethics Paper</h1>
                        <p className="text-gray-500">Summarized paper on AI ethics</p>
                        </div>
                    </div>

                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl">
                        <div className="border h-12 w-12 rounded-xl border-gray-200"> 
                        </div>
                        <div className="px-3">
                        <h1 className="text-lg text-gray-900 font-medium">AI Ethics Paper</h1>
                        <p className="text-gray-500">Summarized paper on AI ethics</p>
                        </div>
                    </div>

                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl">
                        <div className="border h-12 w-12 rounded-xl border-gray-200"> 
                        </div>
                        <div className="px-3">
                        <h1 className="text-lg text-gray-900 font-medium">AI Ethics Paper</h1>
                        <p className="text-gray-500">Summarized paper on AI ethics</p>
                        </div>
                    </div>

                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl">
                        <div className="border h-12 w-12 rounded-xl border-gray-200"> 
                        </div>
                        <div className="px-3">
                        <h1 className="text-lg text-gray-900 font-medium">AI Ethics Paper</h1>
                        <p className="text-gray-500">Summarized paper on AI ethics</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DatasetsTab;
