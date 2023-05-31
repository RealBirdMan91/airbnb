'use client';
import { IoMdClose } from 'react-icons/io';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <div className="relative  flex items-center justify-center rounded-t border-b-[1px] p-6">
      <button
        className=" absolute left-9  border-0 p-1 hover:opacity-70"
        onClick={() => onClose()}
      >
        <IoMdClose size={18} />
      </button>
      <div className="text-lg font-semibold">{title}</div>
    </div>
  );
}

export default ModalHeader;
