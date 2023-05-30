import clsx from 'clsx';
import React from 'react';
import { IconType } from 'react-icons';

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Button {
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

function Button({
  disabled,
  outline,
  small,
  icon: Icon,
  children,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70',
        outline
          ? 'border-black bg-white text-black'
          : 'border-rose-500 bg-rose-500 text-white',
        small
          ? 'border-[1px] py-1 text-sm font-light'
          : 'text-md border-2 py-3 font-semibold'
      )}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
}

export default Button;
