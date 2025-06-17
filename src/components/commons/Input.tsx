import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      type="text"
      className={`flex-1 rounded px-3 py-2 sm:px-4 sm:py-2 bg-blue-gray-light placeholder-gray-light focus:outline-none focus:ring-2 focus:ring-red text-sm sm:text-base ${className}`}
      {...props}
    />
  );
}
