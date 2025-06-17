import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`bg-blue-gray rounded-lg p-4 sm:p-6 mb-6 border border-blue-gray-light max-w-full sm:max-w-3/5 w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
