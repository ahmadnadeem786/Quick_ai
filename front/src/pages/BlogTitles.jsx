import React, { useState } from 'react';
import { Edit, Hash, Sparkles } from "lucide-react";
import { toast } from "react-hot-toast";
import Markdown from "react-markdown";
import { useAuth } from '@clerk/clerk-react';
import axios from "axios";


// Set base URL for axios from environment variable
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const BlogTitles = () => {
  const blogCategories = ['General', 'Technology', 'Business', 'Health', 'Lifestyle', 'Education', 'Travel', 'Food'];

  const [selectedCategory, setSelectedCategory] = useState('General');
  const [input, setInput] = useState('');

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Generate a Blog title for the keyword ${input} in the category ${selectedCategory}`
      const { data } = await axios.post("http://localhost:3000/api/ai/generate-blog-title",
        {
          prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      )

      if (data.success) {
        setContent(data.content);
        toast.success("Title generated successfully!");
      } else {
        toast.error(data.message || "Failed to generate article.");
      }

    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
    setLoading(false);
    // Logic to generate blog titles goes here
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start justify-between flex-wrap gap-4 text-slate-700">
      {/* Left column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="The future of artificial intelligence is..."
          required
        />

        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogCategories.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedCategory === item
                ? 'bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white'
                : 'text-gray-500 border-gray-300'
                }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
          ) : (

            <Hash className="w-5" />
          )}
          Generate Titles
        </button>
      </form>

      {/* Right column */}
      <div className="p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 flex-1">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Generated Titles</h1>
        </div>
        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center">
              <Hash className="w-9 h-9" />
              <p>Enter a topic and click "Generate Titles" to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 h-full overflow-y-auto text-sm text-slate-600 whitespace-pre-line">
            <div>
              <Markdown >
                {content}
              </Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTitles;
