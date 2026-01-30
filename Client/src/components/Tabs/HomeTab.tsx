import type React from "react";

const options1 = [
    { id: 1, name: "Upload Syllbus", tab_id: 1 },
    { id: 2, name: "Ask a Question", tab_id: 2 },
    { id: 3, name: "Generate Summary", tab_id: 3 }
]

const options2 = [
    { id: 1, name: "Uploaded Documents" },
    { id: 2, name: "Generated Summaries" },
    { id: 3, name: "saved Insights" },
    { id: 4, name: "Time Saved" }
]

const DatasetsTab: React.FC<any> = ({ setActiveTab }) => {

    return (

        <div className="p-3 overflow-y-scroll max-h-[83vh]">
            <h1 className="text-[#111118] tracking-light text-[32px] font-bold leading-tight min-w-72">Hello Dattu 👋 Ready to explore your study</h1>

            <div className="mt-5 flex gap-5 p-1 items-center px-3">
                {options1.map((item: any) => (
                    <button key={item.id} className="bg-gray-200 rounded-xl h-11 px-5 font-bold text-black text-[16px]
             hover:bg-[#786cf9] hover:text-white transition-all duration-500 shadow-md "
                        onClick={()=>setActiveTab(item.tab_id)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            <div className="p-1 mt-10 ">
                <h1 className="text-[#111118] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Stats</h1>
                <div className="px-2 py-4 flex items-center gap-5">
                    {options2.map((item: any) => (
                        <div key={item.id} className=" border h-30 w-58 rounded-xl p-6 hover:shadow-md border-gray-200 transition-all duration-300">
                            <h1 className="text-lg text-black font-medium ">Document Uploaded</h1>
                        </div>
                    ))}
                </div>
            </div>


            <div className="p-1 mt-10">
                <h1 className="text-[#111118] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Recent Activities</h1>
                <div className="px-1 py-2">
                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl m-1">
                        <div className="border h-12 w-12 rounded-xl border-gray-200">
                        </div>
                        <div className="px-3">
                            <h1 className="text-lg text-gray-900 font-medium">AI Ethics Paper</h1>
                            <p className="text-gray-500">Summarized paper on AI ethics</p>
                        </div>
                    </div>

                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl m-1">
                        <div className="border h-12 w-12 rounded-xl border-gray-200">
                        </div>
                        <div className="px-3">
                            <h1 className="text-lg text-gray-900 font-medium">AI Ethics Paper</h1>
                            <p className="text-gray-500">Summarized paper on AI ethics</p>
                        </div>
                    </div>

                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl m-1">
                        <div className="border h-12 w-12 rounded-xl border-gray-200">
                        </div>
                        <div className="px-3">
                            <h1 className="text-lg text-gray-900 font-medium">AI Ethics Paper</h1>
                            <p className="text-gray-500">Summarized paper on AI ethics</p>
                        </div>
                    </div>

                    <div className="p-2 flex border border-gray-100 hover:border-gray-300 hover:shadow-md rounded-xl m-1">
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
