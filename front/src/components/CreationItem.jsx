import React, { useState } from 'react';
import Markdown from "react-markdown";
const CreationItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            onClick={() => setExpanded(!expanded)}
            className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer transition-all duration-200"
        >
            <div className="flex justify-between items-center gap-4">
                <div>
                    <h2 className="font-medium text-gray-800">{item.prompt}</h2>
                    <p className="text-gray-500">
                        {item.type} - {new Date(item.created_at).toLocaleDateString()}
                    </p>
                </div>
                <button
                    type="button"
                    className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full text-xs"
                >
                    {item.type}
                </button>
            </div>

            {expanded && (
                <div className="mt-3">
                    {item.type === 'image' ? (
                        <img
                            src={item.content}
                            alt="Generated Content"
                            className="w-full max-w-md rounded shadow"
                        />
                    ) : (
                        <div className="mt-3 h-full overflow-y-auto text-slate-700 text-sm">
                            <div className='reset-tw'>
                                <Markdown>
                                    {item.content}
                                </Markdown>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CreationItem;
