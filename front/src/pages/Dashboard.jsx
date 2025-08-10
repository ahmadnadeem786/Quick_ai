import React, { useEffect, useState } from 'react';
import { dummyCreationData } from '../assets/assets';
import { Gem, Sparkles } from 'lucide-react';
import { Protect, useAuth } from '@clerk/clerk-react';
import CreationItem from '../components/CreationItem';
import axios from "axios";
import { toast } from "react-hot-toast";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth();

  const getDashboardData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:3000/api/user/get-user-creations', {
        headers: { Authorization: `Bearer ${await getToken()}` }
      });

      if (data.success) {
        toast.success(data.message || "Data loaded!");
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
    console.log("Creations loaded:", creations);
  }


  useEffect(() => {
    getDashboardData()
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Total Creations Card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white flex justify-center items-center">
            <Sparkles className="w-5" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-xl font-semibold">
              <Protect plan="premium" fallback="Free">Premium</Protect>
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white flex justify-center items-center">
            <Gem className="w-5" />
          </div>
        </div>
      </div>


      {
        loading ? (<div className='flex justify-center items-center h-3/4'>
          <div className='animate-spin rounded-full h-11 w-11 border-3
      border-[#456882] border-t-transparent'></div>
        </div>) :


          (<div className="space-y-3">
            <p className="text-lg font-medium mb-4">Recent Creations</p>
            {creations.map((item) => (
              <CreationItem key={item.id} item={item} />
            ))}
          </div>)}
    </div>
  );
};

export default Dashboard;
