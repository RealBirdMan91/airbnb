import clsx from "clsx";
import React from "react";

type Container = React.HTMLAttributes<HTMLDivElement>;

interface Props extends Container {
  children: React.ReactNode;
}

function Container({ children, ...props }: Props) {
  return (
    <div
      className={clsx(
        "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4",
        props.className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
