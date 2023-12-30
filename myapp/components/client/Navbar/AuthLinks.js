'use client'
import React from 'react';
import { FiShoppingCart, FiUser, FiLogOut } from 'react-icons/fi';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthLinks = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <nav className='mx-auto max-w-screen-xl px-4 py-8 flex justify-between items-center gap-6'>
      {session ? (
        <div className='flex items-center gap-2'>
          <FiShoppingCart size={24} />

          {/* Show logout link on hover */}
          <span className='group relative cursor-pointer'>
            <FiUser size={24} />
            <div className='hidden group-hover:block absolute right-0 top-6 bg-white p-2 shadow-md'>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </span>
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          {/* Show user icon */}
          <FiUser size={24} />

          {/* Show login button on hover */}
          <span className='group relative cursor-pointer'>
            <button className='hidden group-hover:block bg-white p-2 shadow-md' onClick={() => router.push('/login')}>
              Login
            </button>
          </span>
        </div>
      )}
    </nav>
  );
};

export default AuthLinks;
