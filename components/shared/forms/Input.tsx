// Input.tsx
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { IconType } from 'react-icons';

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends Input {
  icon?: IconType;
  rounded?: boolean;
  className?: string;
  id: string;
  error?: FieldError | undefined;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ icon: Icon, rounded = false, className, id, error, ...props }, ref) => {
    return (
      <div>
        <label
          className={clsx(
            'flex items-center gap-5 border-[1px] border-neutral-300 bg-white px-5 py-3',
            rounded ? 'rounded-full' : 'rounded-md',
            error?.message
              ? 'border-red-500 focus-within:border-red-500'
              : 'focus-within:border-neutral-500',
            className
          )}
          htmlFor={id}
        >
          {Icon && (
            <Icon
              className={clsx(
                'h-6 w-6',
                error?.message ? 'text-red-500' : 'text-neutral-500'
              )}
            />
          )}

          <input
            id={id}
            ref={ref} // Hinzufügen
            className={clsx(
              'flex-1 bg-transparent bg-white outline-none placeholder:text-neutral-400',
              error?.message ? 'text-red-500' : 'text-neutral-700'
            )}
            {...props}
          />
        </label>
        {error?.message && (
          <small className="text-red-500">{error.message}</small>
        )}
      </div>
    );
  }
);

export default Input;
