import React, { HTMLAttributes, ReactNode } from "react";

interface ICardView extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function CardView({ children, ...props }: ICardView) {
  return (
    <div
      className="h-36 p-4 flex flex-col items-start justify-between bg-main-bg dark:bg-main-dark-bg rounded-md shadow-md"
      {...props}
    >
      {children}
    </div>
  );
}
