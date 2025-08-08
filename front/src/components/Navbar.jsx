import React from 'react'
import { assets } from "../assets/assets"
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from "@clerk/clerk-react"

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();
    return (
        <div className=' w-full z-5  backdrop-blur-2xl flex item-center justify-between lg:px-27 sm:px-20 py-3 md:px-10 px-5'>
           
                <h2 onClick={()=> navigate("/")} className='cursor-pointer text-3xl text-[#456882] font-semibold flex items-start gap-2 justify-center'>Quick<span className='text-xl bottom2'> AI </span></h2>
           
            {
                user ? <UserButton /> : (
                     <button onClick={openSignIn} className="cta">
                            <div className='flex items-center justify-between'>
                                <span>log in</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </div>
                        </button>
                )
            }
        </div>
    )
}

export default Navbar
