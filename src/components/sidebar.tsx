import Image from 'next/image';
import logo from '../../public/logo-gymtime.svg';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className='pt-5 pb-10 px-5 h-screen bg-[#18181B] flex flex-col justify-between' >
      <div>
        <div className='flex items-center gap-2 mb-16'>
            <Image src={logo} alt='GymTime Logo' width={36}/>
            <p className='font-medium text-2xl'>GymTime</p>
        </div>
        <nav>
            <ul className='flex flex-col gap-4 text-xl'>
                <li><a href="#" className='block py-4 pl-2 pr-8 bg-white text-black rounded-2xl min-w-[260px] hover:bg-[#D4D4D8] transition-colors cursor-pointer'>Nova Postagem</a></li>
                <li><a href="/feed" className='block py-4 pl-2 pr-8 rounded-2xl hover:bg-[#27272A] transition-colors cursor-pointer'>Feed</a></li>
                <li><a href="#" className='block py-4 pl-2 pr-8 rounded-2xl hover:bg-[#27272A] transition-colors cursor-pointer'>Notificação</a></li>
                <li><Link href="/profile" className='block py-4 pl-2 pr-8 rounded-2xl hover:bg-[#27272A] transition-colors cursor-pointer'>Perfil</Link></li>
            </ul>
        </nav>
      </div>

      <div className='flex gap-3 items-center p-2 rounded-full hover:bg-[#27272A] transition-colors cursor-pointer'>
        <div>           
          <img src='http://github.com/edvxndxvi.png' alt='Avatar' className='rounded-full w-10'/>
        </div>
        <div>
          <p className='text-lg font-medium'>Nome Usuário</p>
          <p className='text-lg text-[#3F3F46] mt-[-8px]'>@_user_</p>
        </div>
        
      </div>

    </aside>
  )
}
  
