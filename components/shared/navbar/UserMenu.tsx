'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';

interface Props {
  user: User | null;
}

function UserMenu({ user }: Props) {
  const { onOpen: onOpenRegister } = useRegisterModal();
  const { onOpen: onOpenLogin } = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = (e: MouseEvent) => {
    if (menuRef.current?.contains(e.target as Node)) {
      return setIsOpen(prev => !prev);
    }
    return setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', e => toggleModal(e));

    return () => {
      document.removeEventListener('click', e => toggleModal(e));
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
          {user && user.name ? `Willkommen ${user.name}` : 'Airbnb your home'}
        </div>
        <div
          ref={menuRef}
          className="boder-[1px] flex cursor-pointer flex-row items-center rounded-full border-neutral-200   p-4 shadow-sm transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="ml-4 hidden md:block">
            <Avatar src={user?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {user ? (
              <>
                <MenuItem onClick={() => {}}>My trips</MenuItem>
                <MenuItem onClick={() => {}}>My favorites</MenuItem>
                <MenuItem onClick={() => {}}>My reservations</MenuItem>
                <MenuItem onClick={() => {}}>Airbnb my Home</MenuItem>
                <hr />
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={onOpenLogin}>Login</MenuItem>
                <MenuItem onClick={onOpenRegister}>SignUp</MenuItem>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
