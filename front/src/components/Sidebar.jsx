import React from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Eraser, FileText, Hash, House, Scissors, SquarePen,
  Users, Image as ImageIcon, LogOut
} from 'lucide-react';

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const location = useLocation();

  const navItems = [
    { to: "/ai", label: "Dashboard", Icon: House },
    { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
    { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
    { to: "/ai/generate-images", label: "Generate Images", Icon: ImageIcon },
    { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
    { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
    { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
    { to: "/ai/community", label: "Community", Icon: Users },
  ];

  return (
    <div
      className={`
        w-60 border-r-2 border-gray-200 flex flex-col items-center justify-between 
        max-sm:absolute max-sm:top-14 max-sm:bottom-0 
        ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'}  
        transition-all duration-300 z-50'}
      `}
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-4 px-6 py-4 border-b border-[#D2C1B6]">
          <img
            src={user?.imageUrl}
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-lg font-semibold text-[#456882]">{user?.fullName}</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-2 px-4 text-sm font-medium text-gray-600">
          {navItems.map(({ to, label, Icon }) => {
            const isActive = location.pathname === to;
            return (
              <NavLink
                key={to}
                to={to}
                onClick={() => setSidebar(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition 
                  ${isActive
                    ? 'bg-[#D2C1B6] text-[#456882] font-semibold'
                    : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-[#D2C1B6] px-4 py-3 flex items-center justify-between">
        <div onClick={openUserProfile} className="flex items-center gap-3 cursor-pointer">
          <img src={user?.imageUrl} alt="User" className="w-8 h-8 rounded-full" />
          <div className="text-sm">
            <p className="font-semibold text-[#456882]">{user?.fullName}</p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-5 ml-4 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition"
        />
      </div>
    </div>
  );
};

export default Sidebar;
