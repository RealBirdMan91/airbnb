'use client';
import { Transition } from '@headlessui/react';

interface BackdropProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

function Backdrop({ isOpen, children }: BackdropProps) {
  console.log(isOpen);
  return (
    <Transition
      as="div"
      show={isOpen}
      enter="transition ease-in duration-[200ms]"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-out duration-[200ms]"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="translate fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden  bg-neutral-800/70 outline-none focus:outline-none"
    >
      {children}
    </Transition>
  );
}

export default Backdrop;
