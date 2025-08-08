import React, { useState } from 'react';
import { assets } from '../assets/assets';
import {
  Eraser, FileText, Hash, House, Menu, Scissors,
  SquarePen, Users, X
} from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { SignIn, useUser } from '@clerk/clerk-react';
import Dashboard from './Dashboard';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className='flex flex-col h-screen'>
      
      {/* Top Navigation */}
      <nav className='w-full h-16 px-8 bg-[#1B3C53] flex items-center justify-between'>
        <h2 onClick={()=> navigate("/")} className='text-3xl cursor-pointer text-[#456882] font-semibold flex items-start gap-2 justify-center'>Quick<span className='text-xl bottom2'> AI </span></h2>
        {sidebar ? (
          <X
            className='w-6 h-6 text-gray-600 sm:hidden'
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className='w-6 h-6 text-gray-600 sm:hidden'
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>

      {/* Sidebar and Main Content */}
      <div className='flex flex-1 h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 p-4 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  );
};

export default Layout;
