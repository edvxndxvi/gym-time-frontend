"use client";

import Image from 'next/image';
import logo from '../../public/logo-gymtime.svg';
import Link from 'next/link';
import { Bell, Home, Plus, UserRound } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className='pt-5 pb-10 px-5 h-screen border-r border-[#27272A] flex flex-col justify-between' >
      <div className='flex flex-col items-center xl:items-start'>
        <div className='flex items-center gap-2 mb-16'>
            <Image src={logo} alt='GymTime Logo' width={36}/>
            <p className='hidden xl:block font-medium text-2xl'>GymTime</p>
        </div>
        <nav>
            <ul className='flex flex-col gap-4 text-xl'>
                <li>
                  <a href="#" className='sidebar-item bg-white text-black hover:bg-[#D4D4D8]'>
                    <Plus size={20} color='black'/>
                    <p className='hidden xl:block'>Nova Postagem</p>
                  </a>
                </li>
                <li>
                  <a href="/feed" className='sidebar-item hover:bg-[#27272A]'>
                    <Home size={20} color='white'/>
                    <p className='hidden xl:block'>Feed</p>
                  </a>
                </li>
                <li>
                  <a href="#" className='sidebar-item hover:bg-[#27272A]'>
                    <Bell size={20} color='white'/>
                    <p className='hidden xl:block'>Notificação</p>
                  </a>
                </li>
                <li>
                  <Link href="/profile" className='sidebar-item hover:bg-[#27272A]'>
                    <UserRound size={20} color='white'/>
                    <p className='hidden xl:block'>Perfil</p>
                  </Link>
                </li>
            </ul>
        </nav>
      </div>

      <div className='flex gap-3 items-center p-2 xl:px-2 xl:py-1 rounded-full hover:bg-[#27272A] transition-colors cursor-pointer'>
        <div>           
          <img src='http://github.com/edvxndxvi.png' alt='User avatar' className='rounded-full w-10'/>
        </div>
        <div className='hidden xl:block'>
          <p className='text-lg font-medium'>Nome Usuário</p>
          <p className='text-lg text-[#3F3F46] mt-[-8px]'>@_user_</p>
        </div>
        
      </div>

    </div>
  )
}
  
