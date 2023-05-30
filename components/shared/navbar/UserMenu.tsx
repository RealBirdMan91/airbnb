'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/hooks/useRegisterModal';

function UserMenu() {
  const { onOpen } = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
          Airbnb your home
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="boder-[1px] flex cursor-pointer flex-row items-center rounded-full border-neutral-200   p-4 shadow-sm transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="ml-4 hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem onClick={() => {}}>Login</MenuItem>
              <MenuItem onClick={() => onOpen()}>SignUp</MenuItem>
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
