import clsx from 'clsx';
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  isCentered?: boolean;
}

function Heading({ title, subtitle, isCentered }: Props) {
  return (
    <header className={clsx(isCentered ? 'text-center' : 'text-start')}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
    </header>
  );
}

export default Heading;
