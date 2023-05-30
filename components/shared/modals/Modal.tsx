'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../buttons/Button';
import clsx from 'clsx';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
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
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={clsx(
          `translate 
          fixed 
          inset-0 
          z-50 
          flex 
          items-center 
          justify-center 
          overflow-y-auto 
          overflow-x-hidden 
          bg-neutral-800/70
          outline-none
          duration-300
          focus:outline-none`,
          showModal ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div
          className="
          relative 
          mx-auto
          my-6
          h-full
          w-full
          md:h-auto
          md:w-4/6 
          lg:h-auto 
          lg:w-3/6
          xl:w-2/5
          "
        >
          {/*content*/}
          <div
            className={clsx(
              `
            translate
            h-full
            duration-300`,
              showModal
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            )}
          >
            <div
              className="
              translate
              relative
              flex
              h-full
              w-full 
              flex-col 
              rounded-lg 
              border-0 
              bg-white 
              shadow-lg 
              outline-none 
              focus:outline-none 
              md:h-auto 
              lg:h-auto
            "
            >
              {/*header*/}
              <div
                className="
                relative 
                flex 
                items-center
                justify-center
                rounded-t
                border-b-[1px]
                p-6
                "
              >
                <button
                  className="
                    absolute
                    left-9 
                    border-0
                    p-1
                    transition
                    hover:opacity-70
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}

              <div className="relative flex-auto p-6">{children}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex 
                    w-full 
                    flex-row 
                    items-center 
                    gap-4
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                      outline
                    >
                      {secondaryActionLabel}
                    </Button>
                  )}
                  <Button
                    disabled={disabled}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {actionLabel}
                  </Button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
