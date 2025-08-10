import React, { useState } from 'react';
import { Edit, Eraser, Hash, Image, Sparkles } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";
import Markdown from "react-markdown";

// Set base URL for axios from environment variable
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveBackground = () => {

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData()
      formData.append('image', input)

      const { data } = await axios.post(
        'http://localhost:3000/api/ai/remove-image-background',
        formData,
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`
          }
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
  }

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start justify-between flex-wrap gap-4 text-slate-700">
      {/* Left column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          accept='image/*'
          type='file'
          className="w-full text-gray-600 p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />


        <p className='text-xs text-gray-500 font-light mt-1'>Supports JPG, PNG, and other image formats</p>

        <button
          disabled={loading}
          className='w-full flex justify-center items-center gap-2
            bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6
            text-sm rounded-lg cursor-pointer'>
          {loading ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
          ) : (
            <Eraser className='w-5' />
          )}
          Remove background
        </button>
      </form>

      {/* Right column */}
      <div className="p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 flex-1">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>
     {!content ? (
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center">
            <Eraser className="w-9 h-9" />
            <p>Upload an image and click "Remove Background" to get started</p>
          </div>
        </div>
          ) : (
            <img src={content} alt="image" className='mt-3 w-full h-full' />
             )}
      </div>
    </div>
  );
};

export default RemoveBackground
