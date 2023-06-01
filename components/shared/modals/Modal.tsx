import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import Backdrop from './Backdrop';
import { Transition } from '@headlessui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  return (
    <Backdrop isOpen={isOpen}>
      <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6  lg:h-auto lg:w-3/6 xl:w-2/5">
        <Transition.Child
          enter="transition ease-in duration-[300ms]"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition ease-out duration-[300ms]"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-full opacity-0"
          className="h-full"
        >
          <div className="translate relative flex h-full w-full flex-col rounded-lg border-0  bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto ">
            <ModalHeader title={title} onClose={onClose} />

            <div className="relative flex-auto p-6">{children}</div>
            <ModalFooter
              actionLabel={actionLabel}
              onSubmit={onSubmit}
              disabled={disabled}
              footer={footer}
              secondaryAction={secondaryAction}
              secondaryActionLabel={secondaryActionLabel}
            />
          </div>
        </Transition.Child>
      </div>
    </Backdrop>
  );
};

export default Modal;
